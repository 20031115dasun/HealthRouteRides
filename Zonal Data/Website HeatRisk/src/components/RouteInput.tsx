import React, { useState } from 'react';
import { MapPinIcon, InfoIcon } from 'lucide-react';

const GOOGLE_API_KEY = 'AIzaSyBWYvBl1NgwIXRzGUfxanbiRA1lnauO_Yc';

export const RouteInput = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [transportType, setTransportType] = useState('car');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [locationErrors, setLocationErrors] = useState({
    pickup: '',
    dropoff: ''
  });

  const validateLocation = async (address, type) => {
    if (!address) {
      setLocationErrors(prev => ({ ...prev, [type]: 'Please enter a location' }));
      return null;
    }

    try {
      const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'OK' && data.results.length > 0) {
        setLocationErrors(prev => ({ ...prev, [type]: '' }));
        const { lat, lng } = data.results[0].geometry.location;
        return { lat, lon: lng };
      }

      const errorMsg = data.status === 'ZERO_RESULTS'
        ? 'Location not found. Please try a more specific address.'
        : data.error_message || 'Could not find location';

      setLocationErrors(prev => ({ ...prev, [type]: errorMsg }));
      return null;
    } catch (err) {
      console.error('Geocoding error:', err);
      setLocationErrors(prev => ({ ...prev, [type]: 'Failed to connect to location service' }));
      return null;
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const pickupCoords = await validateLocation(pickupLocation, 'pickup');
      const dropoffCoords = await validateLocation(dropoffLocation, 'dropoff');

      if (!pickupCoords || !dropoffCoords) {
        throw new Error('Please fix the location errors to continue');
      }

      const routeData = {
        pickupCoords,
        dropoffCoords,
        transportType
      };

      const response = await fetch('http://localhost:5000/api/route-info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(routeData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to analyze route');
      }

      const data = await response.json();
      setResults(data);
    } catch (err) {
      console.error('Search error:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const renderRiskLevel = (score) => {
    if (score > 0.7) return <span className="text-red-600 font-medium">High</span>;
    if (score > 0.5) return <span className="text-yellow-600 font-medium">Medium</span>;
    return <span className="text-green-600 font-medium">Low</span>;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 w-full max-w-4xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-center text-gray-800 mb-6">
        Heat-Safe Route Planner
      </h2>

      <div className="mb-6 bg-blue-50 p-4 rounded-lg flex items-start">
        <InfoIcon className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
        <p className="text-sm text-blue-700">
          This tool analyzes your route and suggests safer alternatives to avoid heat risks based on weather data and environmental factors.
        </p>
      </div>

      <form onSubmit={handleSearch}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Starting Point
            </label>
            <div className="relative">
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => {
                  setPickupLocation(e.target.value);
                  setLocationErrors(prev => ({ ...prev, pickup: '' }));
                }}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 ${
                  locationErrors.pickup ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter starting address"
                required
              />
              <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
            {locationErrors.pickup && (
              <p className="mt-1 text-sm text-red-600">{locationErrors.pickup}</p>
            )}
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Destination
            </label>
            <div className="relative">
              <input
                type="text"
                value={dropoffLocation}
                onChange={(e) => {
                  setDropoffLocation(e.target.value);
                  setLocationErrors(prev => ({ ...prev, dropoff: '' }));
                }}
                className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 ${
                  locationErrors.dropoff ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Enter destination address"
                required
              />
              <MapPinIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-500" />
            </div>
            {locationErrors.dropoff && (
              <p className="mt-1 text-sm text-red-600">{locationErrors.dropoff}</p>
            )}
          </div>
        </div>

        <div className="mb-6">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">Transport Mode</label>
            <select
              value={transportType}
              onChange={(e) => setTransportType(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white text-gray-800"
            >
              <option value="car">Car</option>
              <option value="bike">Bicycle</option>
              <option value="walking">Walking</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading || (locationErrors.pickup || locationErrors.dropoff)}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-6 rounded-lg font-medium hover:opacity-90 transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Analyzing...
            </>
          ) : (
            <>Analyze Route</>
          )}
        </button>

        {error && (
          <p className="mt-4 text-red-600 text-sm text-center">{error}</p>
        )}
      </form>
    </div>
  );
};
