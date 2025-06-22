import React from 'react';
import { Clock, ThermometerIcon, DollarSignIcon, AlertTriangleIcon, LeafIcon } from 'lucide-react';
import { motion } from 'framer-motion';
interface RouteCardProps {
  title: string;
  type: 'fastest' | 'coolest' | 'balanced';
  eta: string;
  temperature: string;
  cost: string;
  distance: string;
  riskLevel: 'low' | 'medium' | 'high';
  isRecommended?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
}
export const RouteCard = ({
  title,
  type,
  eta,
  temperature,
  cost,
  distance,
  riskLevel,
  isRecommended = false,
  isSelected = false,
  onSelect
}: RouteCardProps) => {
  const getBgColor = () => {
    switch (type) {
      case 'fastest':
        return 'bg-dark-800 border-primary-red border-2';
      case 'coolest':
        return 'bg-dark-800 border-[#51CF66] border-2';
      case 'balanced':
        return 'bg-dark-800 border-primary-yellow border-2';
      default:
        return 'bg-dark-800 border-gray-700 border';
    }
  };
  const getBadgeColor = () => {
    switch (type) {
      case 'fastest':
        return 'bg-primary-red/20 text-primary-red';
      case 'coolest':
        return 'bg-[#51CF66]/20 text-[#51CF66]';
      case 'balanced':
        return 'bg-primary-yellow/20 text-primary-yellow';
      default:
        return 'bg-gray-800 text-gray-400';
    }
  };
  const getRiskBadge = () => {
    switch (riskLevel) {
      case 'high':
        return <motion.div className="flex items-center text-status-danger" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.3
        }}>
            <AlertTriangleIcon className="h-4 w-4 mr-1" />
            <span className="text-xs font-medium">High Heat Risk</span>
          </motion.div>;
      case 'medium':
        return <motion.div className="flex items-center text-status-warning" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.3
        }}>
            <AlertTriangleIcon className="h-4 w-4 mr-1" />
            <span className="text-xs font-medium">Medium Heat Risk</span>
          </motion.div>;
      case 'low':
        return <motion.div className="flex items-center text-status-success" initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.3
        }}>
            <LeafIcon className="h-4 w-4 mr-1" />
            <span className="text-xs font-medium">Eco-Friendly Route</span>
          </motion.div>;
    }
  };
  return <motion.div className={`${getBgColor()} rounded-xl p-5 shadow-lg relative backdrop-blur-sm hover:shadow-2xl transition-all duration-300
        ${isSelected ? 'ring-2 ring-primary-cyan ring-offset-2 ring-offset-dark-800' : ''}`} initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} whileHover={{
    scale: 1.02
  }} transition={{
    duration: 0.3
  }}>
      {isRecommended && <motion.div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#51CF66] text-white text-xs font-bold px-3 py-1 rounded-full" initial={{
      opacity: 0,
      y: -10
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.2
    }}>
          RECOMMENDED
        </motion.div>}
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-bold text-lg text-neutral-white">{title}</h3>
        <motion.span className={`${getBadgeColor()} text-xs font-medium px-2 py-1 rounded-full`} whileHover={{
        scale: 1.1
      }}>
          {type === 'fastest' ? 'Fastest' : type === 'coolest' ? 'Coolest' : 'Balanced'}
        </motion.span>
      </div>
      <div className="space-y-3 mb-4">
        <motion.div className="flex items-center" whileHover={{
        x: 5
      }}>
          <Clock className="h-4 w-4 text-neutral-mid mr-2" />
          <span className="text-sm text-neutral-white">
            <strong>ETA:</strong> {eta}
          </span>
        </motion.div>
        <motion.div className="flex items-center" whileHover={{
        x: 5
      }}>
          <ThermometerIcon className="h-4 w-4 text-neutral-mid mr-2" />
          <span className="text-sm text-neutral-white">
            <strong>Avg Temp:</strong> {temperature}
          </span>
        </motion.div>
        <motion.div className="flex items-center" whileHover={{
        x: 5
      }}>
          <DollarSignIcon className="h-4 w-4 text-neutral-mid mr-2" />
          <span className="text-sm text-neutral-white">
            <strong>Est. Cost:</strong> {cost}
          </span>
        </motion.div>
        <motion.div className="flex items-center" whileHover={{
        x: 5
      }}>
          <svg className="h-4 w-4 text-neutral-mid mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7L9 12H15L11 17" />
          </svg>
          <span className="text-sm text-neutral-white">
            <strong>Distance:</strong> {distance}
          </span>
        </motion.div>
      </div>
      <div className="flex justify-between items-center">
        {getRiskBadge()}
        <motion.button onClick={onSelect} className={`text-sm px-4 py-2 rounded-lg transition-colors 
            ${type === 'fastest' ? 'bg-primary-red hover:bg-primary-red/80' : type === 'coolest' ? 'bg-[#51CF66] hover:bg-[#51CF66]/80' : 'bg-primary-yellow hover:bg-primary-yellow/80'} text-white
            ${isSelected ? 'ring-2 ring-white' : ''}`} whileHover={{
        scale: 1.05
      }} whileTap={{
        scale: 0.95
      }}>
          {isSelected ? 'Selected' : 'Select'}
        </motion.button>
      </div>
    </motion.div>;
};