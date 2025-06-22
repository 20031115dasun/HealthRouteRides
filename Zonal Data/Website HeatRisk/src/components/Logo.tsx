import React from 'react';
import { Activity, Navigation2 } from 'lucide-react';
import { motion } from 'framer-motion';
export const Logo = () => {
  return <motion.div className="flex items-center cursor-pointer" whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.95
  }}>
      <div className="relative">
        <motion.div animate={{
        rotate: [0, 360]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }} className="absolute -inset-1">
          <Activity className="h-8 w-8 text-primary-cyan opacity-50" />
        </motion.div>
        <Navigation2 className="h-6 w-6 text-primary-blue relative" />
      </div>
      <span className="text-xl font-bold text-neutral-white ml-2">
        Health<span className="text-primary-cyan">Route</span>
        <span className="text-primary-blue">Rides</span>
      </span>
    </motion.div>;
};