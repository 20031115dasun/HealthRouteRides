import React from 'react';
import { LayersIcon, ZoomInIcon, ZoomOutIcon, InfoIcon } from 'lucide-react';
export const MapSection = () => {
  return <div className="w-full bg-dark-800 rounded-xl shadow-lg overflow-hidden">
      <div className="p-4 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-bold text-[#2E2E2E]">Route Map</h3>
        <div className="flex items-center space-x-2">
          <button className="p-2 rounded hover:bg-gray-100">
            <LayersIcon className="h-5 w-5 text-[#2E2E2E]" />
          </button>
          <div className="flex items-center border border-gray-300 rounded overflow-hidden">
            <button className="p-2 hover:bg-gray-100">
              <ZoomOutIcon className="h-5 w-5 text-[#2E2E2E]" />
            </button>
            <button className="p-2 hover:bg-gray-100">
              <ZoomInIcon className="h-5 w-5 text-[#2E2E2E]" />
            </button>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="h-[400px] bg-dark-700 relative">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: "url('https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x400&maptype=roadmap&key=YOUR_API_KEY')",
          opacity: 0.7
        }} />
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="none">
            <path d="M100,300 C150,280 200,150 300,140 S450,120 500,100" stroke="#FF6B6B" strokeWidth="4" fill="none" strokeDasharray="8,4" />
            <path d="M100,300 C130,250 180,220 250,200 S400,180 500,100" stroke="#51CF66" strokeWidth="4" fill="none" />
            <path d="M100,300 C140,260 190,180 270,170 S420,150 500,100" stroke="#FFD43B" strokeWidth="4" fill="none" strokeDasharray="1,3" />
            <circle cx="350" cy="160" r="40" fill="#FF6B6B" opacity="0.3" />
            <circle cx="200" cy="220" r="30" fill="#FF6B6B" opacity="0.2" />
            <circle cx="100" cy="300" r="8" fill="#51CF66" />
            <circle cx="500" cy="100" r="8" fill="#FF6B6B" />
          </svg>
          <div className="absolute bottom-4 left-4 bg-dark-800 p-3 rounded-lg shadow-md text-sm text-neutral-white">
            <div className="font-bold mb-2">Route Legend</div>
            <div className="flex items-center mb-1">
              <span className="inline-block w-4 h-1 bg-primary-red mr-2"></span>
              <span>Fastest Route (High Risk)</span>
            </div>
            <div className="flex items-center mb-1">
              <span className="inline-block w-4 h-1 bg-[#51CF66] mr-2"></span>
              <span>Coolest Route (Safe)</span>
            </div>
            <div className="flex items-center mb-1">
              <span className="inline-block w-4 h-1 bg-primary-yellow mr-2"></span>
              <span>Balanced Route</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-4 h-4 rounded-full bg-primary-red opacity-30 mr-2"></span>
              <span>Heat Zone</span>
            </div>
          </div>
        </div>
        <div className="bg-dark-800 p-4 border-t border-dark-700 flex items-center">
          <InfoIcon className="h-5 w-5 text-neutral-mid mr-2" />
          <span className="text-sm text-neutral-mid">
            Toggle heat layer visibility to see temperature variations along
            routes.
          </span>
        </div>
      </div>
    </div>;
};