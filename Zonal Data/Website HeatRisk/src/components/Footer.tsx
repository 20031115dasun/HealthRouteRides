import React from 'react';
import { Activity, Navigation2, GithubIcon, TwitterIcon, InstagramIcon, LinkedinIcon, ArrowUpCircleIcon, HeartIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Logo } from './Logo';
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <footer className="bg-gradient-to-b from-dark-800 to-dark-900 border-t border-dark-700">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="flex flex-col items-center mb-12">
          <motion.button onClick={scrollToTop} className="p-2 rounded-full bg-dark-700 hover:bg-dark-600 transition-colors mb-6" whileHover={{
          y: -5
        }} whileTap={{
          scale: 0.95
        }}>
            <ArrowUpCircleIcon className="h-6 w-6 text-primary-cyan" />
          </motion.button>
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }}>
            <Logo />
          </motion.div>
        </div>
        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="text-center md:text-left">
            <motion.p className="text-neutral-mid mb-6" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }}>
              Empowering delivery workers with AI to stay safer and healthier on
              every route.
            </motion.p>
            <motion.div className="flex space-x-4 justify-center md:justify-start" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            delay: 0.3
          }}>
              {[TwitterIcon, InstagramIcon, GithubIcon, LinkedinIcon].map((Icon, index) => <motion.a key={index} href="#" className="text-neutral-mid hover:text-primary-cyan transition-colors" whileHover={{
              y: -3,
              scale: 1.1
            }} whileTap={{
              scale: 0.95
            }}>
                    <Icon className="h-5 w-5" />
                  </motion.a>)}
            </motion.div>
          </div>
          <div>
            <h3 className="text-neutral-white font-semibold mb-4 text-center md:text-left">
              Navigation
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              {['Home', 'Routes', "What's New", 'About Us', 'Contact'].map((item, index) => <motion.li key={item} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.1
            }}>
                    <motion.a href="#" className="text-sm text-neutral-mid hover:text-primary-cyan transition-colors" whileHover={{
                x: 5
              }}>
                      {item}
                    </motion.a>
                  </motion.li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-neutral-white font-semibold mb-4 text-center md:text-left">
              Legal
            </h3>
            <ul className="space-y-2 text-center md:text-left">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Data Usage'].map((item, index) => <motion.li key={item} initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} transition={{
              delay: index * 0.1
            }}>
                  <motion.a href="#" className="text-sm text-neutral-mid hover:text-primary-cyan transition-colors" whileHover={{
                x: 5
              }}>
                    {item}
                  </motion.a>
                </motion.li>)}
            </ul>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-neutral-white font-semibold mb-4">
              Get In Touch
            </h3>
            <motion.div className="space-y-2" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }}>
              <p className="text-sm text-neutral-mid">
                support@healthrouterides.com
              </p>
              <p className="text-sm text-neutral-mid mb-4">
                1234 Health Way, Tech City
              </p>
              <motion.button className="bg-gradient-to-r from-primary-cyan to-primary-blue text-white px-6 py-2 rounded-lg font-medium" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }}>
                Contact Support
              </motion.button>
            </motion.div>
          </div>
        </div>
        {/* Bottom Section */}
        <div className="border-t border-dark-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-neutral-mid text-sm">
            <motion.p initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            delay: 0.3
          }}>
              © {new Date().getFullYear()} HealthRouteRides. All rights
              reserved.
            </motion.p>
            <motion.div className="flex items-center mt-4 md:mt-0" initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} transition={{
            delay: 0.4
          }}>
              <span>Made with</span>
              <HeartIcon className="h-4 w-4 text-primary-red mx-1" />
              <span>for delivery workers</span>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div className="absolute inset-0 bg-gradient-to-r from-primary-green/5 via-primary-blue/5 to-primary-green/5" animate={{
        x: ['0%', '100%', '0%']
      }} transition={{
        duration: 10,
        repeat: Infinity,
        ease: 'linear'
      }} />
      </div>
    </footer>;
};