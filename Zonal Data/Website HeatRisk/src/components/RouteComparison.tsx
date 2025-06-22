import React, { useState } from 'react';
import { RouteCard } from './RouteCard';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPinIcon, ClockIcon, ThermometerIcon, DollarSignIcon } from 'lucide-react';
export const RouteComparison = () => {
  const [selectedRoute, setSelectedRoute] = useState<string | null>(null);
  const routes = [{
    id: 'fastest',
    title: 'Fastest Route',
    type: 'fastest' as const,
    eta: '12 min',
    temperature: '95°F',
    cost: '$4.25',
    distance: '3.2 miles',
    riskLevel: 'high' as const
  }, {
    id: 'coolest',
    title: 'Coolest Route',
    type: 'coolest' as const,
    eta: '18 min',
    temperature: '82°F',
    cost: '$5.50',
    distance: '4.5 miles',
    riskLevel: 'low' as const,
    isRecommended: true
  }, {
    id: 'balanced',
    title: 'Balanced Route',
    type: 'balanced' as const,
    eta: '15 min',
    temperature: '88°F',
    cost: '$4.75',
    distance: '3.8 miles',
    riskLevel: 'medium' as const
  }];
  const selectedRouteData = routes.find(route => route.id === selectedRoute);
  return <div className="w-full">
      <AnimatePresence>
        {selectedRoute && selectedRouteData && <motion.div initial={{
        opacity: 0,
        y: -20
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -20
      }} className="bg-dark-700 rounded-xl p-6 mb-6 border-2 border-primary-cyan">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-neutral-white mb-2">
                  Selected Route: {selectedRouteData.title}
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center">
                    <ClockIcon className="h-5 w-5 text-primary-cyan mr-2" />
                    <span className="text-neutral-white">
                      {selectedRouteData.eta}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <ThermometerIcon className="h-5 w-5 text-primary-cyan mr-2" />
                    <span className="text-neutral-white">
                      {selectedRouteData.temperature}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <DollarSignIcon className="h-5 w-5 text-primary-cyan mr-2" />
                    <span className="text-neutral-white">
                      {selectedRouteData.cost}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPinIcon className="h-5 w-5 text-primary-cyan mr-2" />
                    <span className="text-neutral-white">
                      {selectedRouteData.distance}
                    </span>
                  </div>
                </div>
              </div>
              <motion.button onClick={() => setSelectedRoute(null)} className="text-neutral-mid hover:text-primary-red" whileHover={{
            scale: 1.1
          }} whileTap={{
            scale: 0.95
          }}>
                Clear
              </motion.button>
            </div>
          </motion.div>}
      </AnimatePresence>
      <h2 className="text-2xl font-bold text-neutral-white mb-6">
        Route Options
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {routes.map(route => <RouteCard key={route.id} {...route} isSelected={selectedRoute === route.id} onSelect={() => setSelectedRoute(route.id)} />)}
      </div>
    </div>;
};