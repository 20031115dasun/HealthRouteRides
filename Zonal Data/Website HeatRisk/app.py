import numpy as np
import tensorflow as tf
import joblib
import requests
from flask import Flask, request, jsonify
import time
from flask_cors import CORS
import math

app = Flask(__name__)
CORS(app)


ZONE_NDVI = {
    'Battaramulla': 0.601687225,
    'Borella': 0.460038969,
    'Cinnamon Gardens': 0.466006165,
    'Colombo Central': 0.410151453,
    'Colombo North': 0.46217277,
    'Colombo South': 0.424594054,
    'Dehiwala North': 0.476039021,
    'Godagama': 0.649288436,
    'Kaduwela East': 0.715679119,
    'Kaduwela West': 0.630297001,
    'Kolonnawa East': 0.53333849,
    'Kolonnawa West': 0.378946076,
    'Madapatha': 0.763041154,
    'Maharagama': 0.566257632,
    'Malabe/Koswatta': 0.623791626,
    'Mirihana': 0.52564001,
    'Mount Lavinia': 0.464657691,
    'North Moratuwa': 0.486749851,
    'Parliament Area': 0.538383254,
    'Piliyandala': 0.693251948,
    'Pitipana': 0.718189494,
    'Ratmalana North': 0.533411022,
    'Ratmalana South': 0.484685604,
    'Seethawaka Region': 0.692868002,
    'South Moratuwa': 0.542505852,
}

ZONE_COORDS = {
    'Battaramulla': (6.9167, 79.9167),
    'Borella': (6.9083, 79.8700),
    'Cinnamon Gardens': (6.9081, 79.8675),
    'Colombo Central': (6.9450, 79.8640),
    'Colombo North': (6.9740, 79.8636),
    'Colombo South': (6.9000, 79.8600),
    'Dehiwala North': (6.8350, 79.8750),
    'Godagama': (6.8900, 79.9500),
    'Kaduwela East': (6.9333, 79.9800),
    'Kaduwela West': (6.9333, 79.9600),
    'Kolonnawa East': (6.9333, 79.9000),
    'Kolonnawa West': (6.9333, 79.8900),
    'Madapatha': (6.9500, 80.0200),
    'Maharagama': (6.8500, 79.9500),
    'Malabe/Koswatta': (6.9000, 79.9800),
    'Mirihana': (6.8500, 79.8800),
    'Mount Lavinia': (6.8200, 79.8650),
    'North Moratuwa': (6.7900, 79.8900),
    'Parliament Area': (6.9167, 79.8600),
    'Piliyandala': (6.8000, 79.8900),
    'Pitipana': (6.8600, 79.9700),
    'Ratmalana North': (6.7900, 79.8700),
    'Ratmalana South': (6.7800, 79.8700),
    'Seethawaka Region': (6.9300, 80.0500),
    'South Moratuwa': (6.7700, 79.8900),
}

def load_artifacts():
    print("Loading ML model and tools...")
    model = tf.keras.models.load_model('heat_risk_model.h5')
    scaler = joblib.load('scaler.joblib')
    label_encoder = joblib.load('label_encoder.joblib')
    print("Artifacts loaded.")
    return model, scaler, label_encoder

model, scaler, label_encoder = load_artifacts()

def calculate_dew_point(temp_c, rh):
    a = 17.27
    b = 237.7
    alpha = ((a * temp_c) / (b + temp_c)) + math.log(rh / 100.0)
    dew_point = (b * alpha) / (a - alpha)
    return round(dew_point, 2)

def get_zone_ndvi(lat, lon):
    closest_zone = min(
        ZONE_COORDS.keys(),
        key=lambda zone: (ZONE_COORDS[zone][0] - lat)**2 + (ZONE_COORDS[zone][1] - lon)**2
    )
    ndvi = ZONE_NDVI[closest_zone]
    print(f"Using NDVI {ndvi} from zone '{closest_zone}' for location ({lat}, {lon})")
    return ndvi

def get_weather_data(lat, lon):
    url = "https://api.openweathermap.org/data/2.5/weather"
    params = {
        "lat": lat,
        "lon": lon,
        "appid": OPENWEATHER_API_KEY,
        "units": "metric"
    }
    print(f"Requesting weather for ({lat}, {lon})")
    response = requests.get(url, params=params)
    if response.status_code != 200:
        print(f"Weather API error: {response.status_code} - {response.text}")
        return None
    data = response.json()

    air_temp_c = data["main"]["temp"]
    air_temp_f = air_temp_c * 9 / 5 + 32
    humidity = data["main"]["humidity"]
    dew_point_c = calculate_dew_point(air_temp_c, humidity)

    ndvi = get_zone_ndvi(lat, lon)
    if ndvi is None:
        print("NDVI data missing for this location, skipping")
        return None

    inputs = {
        "LST_Celsius": round(air_temp_c, 2),
        "NDVI": ndvi,
        "DewPoint_C": dew_point_c,
        "AirTemp_F": round(air_temp_f, 2),
        "RH_C": humidity
    }
    print(f"API inputs: {inputs}")
    return inputs

def predict_heat_risk(inputs):
    feature_order = ['LST_Celsius', 'NDVI', 'DewPoint_C', 'AirTemp_F', 'RH_C']
    features = np.array([[inputs[feat] for feat in feature_order]])
    print(f"Features before scaling: {features}")
    features_scaled = scaler.transform(features)
    print(f"Features after scaling: {features_scaled}")
    prediction = model.predict(features_scaled)
    label = label_encoder.inverse_transform(np.argmax(prediction, axis=1))[0]
    print(f"Predicted Heat Risk: {label}")
    return label

def display_route_links(route_points):
    base_url = "https://www.google.com/maps?q="
    links = []
    for lat, lon in route_points:
        link = f"{base_url}{lat},{lon}"
        links.append(link)
    return links

def print_route(route_points):
    print("\nOptimized Route Coordinates:")
    for lat, lon in route_points:
        print(f"Latitude: {lat}, Longitude: {lon}")

def get_route_points(start, end):
    lat1, lon1 = start['lat'], start['lon']
    lat2, lon2 = end['lat'], end['lon']
    midpoint = ((lat1 + lat2) / 2, (lon1 + lon2) / 2)
    return [(lat1, lon1), midpoint, (lat2, lon2)]

def optimize_route(start, end):
    lat1, lon1 = start['lat'], start['lon']
    lat2, lon2 = end['lat'], end['lon']
    original_mid = ((lat1 + lat2) / 2, (lon1 + lon2) / 2)

    def risk_at_point(lat, lon):
        inputs = get_weather_data(lat, lon)
        if inputs is None:
            return None
        return predict_heat_risk(inputs)

    original_risk = risk_at_point(*original_mid)
    print(f"Original midpoint risk: {original_risk}")

    if original_risk != 'High':
        return [(lat1, lon1), original_mid, (lat2, lon2)]

    alternatives = [
        (original_mid[0] + 0.005, original_mid[1]),
        (original_mid[0] - 0.005, original_mid[1]),
        (original_mid[0], original_mid[1] + 0.005),
        (original_mid[0], original_mid[1] - 0.005)
    ]

    best_point = original_mid
    best_risk = original_risk
    for alt_point in alternatives:
        alt_risk = risk_at_point(*alt_point)
        if alt_risk != 'High':
            best_point = alt_point
            best_risk = alt_risk
            break

    optimized_points = [(lat1, lon1), best_point, (lat2, lon2)]
    print_route(optimized_points)

    links = display_route_links(optimized_points)
    print("\nOptimized Route Links:")
    for link in links:
        print(link)

    return optimized_points

@app.route('/api/route-info', methods=['POST'])
def route_info():
    data = request.get_json()
    print("\nReceived data:", data)
    required = ['pickupCoords', 'dropoffCoords', 'transportType']
    missing = [f for f in required if f not in data]
    if missing:
        print(f"Missing fields: {missing}")
        return jsonify({"message": "Missing required parameters", "missing": missing}), 400
    try:
        pickup = data['pickupCoords']
        dropoff = data['dropoffCoords']

        original_points = get_route_points(pickup, dropoff)

        optimized_points = optimize_route(pickup, dropoff)

        def get_route_info(points):
            results = []
            for lat, lon in points:
                inputs = get_weather_data(lat, lon)
                if inputs is None:
                    print("⚠️ Skipping point due to data error")
                    continue
                risk = predict_heat_risk(inputs)
                results.append({
                    "lat": lat,
                    "lon": lon,
                    "modelInputs": inputs,
                    "heatRisk": risk
                })
                time.sleep(1) 
            return results

        original_route_info = get_route_info(original_points)
        optimized_route_info = get_route_info(optimized_points)

        return jsonify({
            "originalRoute": original_route_info,
            "optimizedRoute": optimized_route_info
        })
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"message": "Internal server error"}), 500

if __name__ == '__main__':
    app.run(debug=True)
