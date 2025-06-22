import React, { Children } from 'react';
import { RouteInput } from './RouteInput';
import { ShieldCheckIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export const HeroSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0
    }
  };
  return <section className="relative bg-gradient-to-b from-dark-900 to-dark-800 py-16">
      <div className="container mx-auto px-4">
        <motion.div ref={ref} initial="hidden" animate={inView ? 'visible' : 'hidden'} variants={containerVariants} className="flex flex-col items-center mb-10 text-center">
          <motion.div className="flex items-center mb-4" variants={itemVariants}>
            <ShieldCheckIcon className="h-8 w-8 text-primary-cyan mr-2" />
            <h1 className="text-3xl md:text-4xl font-bold text-neutral-white">
              Heat-Safe Route Finder
            </h1>
          </motion.div>
          <motion.p className="text-xl text-neutral-mid max-w-2xl" variants={itemVariants}>
            Smarter Routes. Safer Deliveries.
          </motion.p>
          <motion.div className="flex items-center mt-4 bg-primary-cyan/10 text-primary-cyan px-3 py-1 rounded-full" variants={itemVariants}>
            <span className="text-sm font-medium">
              AI-powered routes for delivery drivers
            </span>
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'} transition={{
        delay: 0.4
      }}>
          <RouteInput />
        </motion.div>
        <motion.div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center" variants={containerVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
          {[{
          icon: 'clock',
          title: 'Time-Optimized',
          description: 'Find the fastest routes to complete your deliveries on time',
          color: 'primary-green'
        }, {
          icon: 'temperature',
          title: 'Temperature-Aware',
          description: 'Avoid dangerous heat zones with real-time temperature data',
          color: 'primary-blue'
        }, {
          icon: 'dollar',
          title: 'Cost-Efficient',
          description: 'Balance fuel consumption and time for optimal cost savings',
          color: 'primary-yellow'
        }].map((feature, index) => <motion.div key={index} variants={itemVariants} whileHover={{
          scale: 1.05
        }} className="group">
              <motion.div className={`bg-${feature.color}/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${feature.color}/20 transition-colors duration-300`} animate={{
            y: [0, -5, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'reverse'
          }}>
                <svg className={`h-6 w-6 text-${feature.color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {feature.icon === 'clock' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                  {feature.icon === 'temperature' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />}
                  {feature.icon === 'dollar' && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />}
                </svg>
              </motion.div>
              <h3 className="font-bold text-lg text-neutral-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-mid">{feature.description}</p>
            </motion.div>)}
        </motion.div>
      </div>
      <div className="hidden md:block absolute bottom-0 left-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" fill="#1A1A1A">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64L1440,64L1440,100L1392,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path>
        </svg>
      </div>
    </section>;
};