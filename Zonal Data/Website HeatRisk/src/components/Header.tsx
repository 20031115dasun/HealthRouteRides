import React, { useEffect, useState } from 'react';
import { MenuIcon, UserIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleAuthNavigation = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    setTimeout(() => {
      navigate('/auth');
    }, 500); 
  };
  const menuItems = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Routes',
    path: '/routes'
  }, {
    name: "What's New",
    path: '/#whats-new'
  }, {
    name: 'About',
    path: '/#about'
  }, {
    name: 'Contact',
    path: '/#contact'
  }];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleNavigation = (path: string) => {
    if (path.startsWith('/#')) {
      if (window.location.pathname === '/') {
        scrollToSection(path.substring(2));
      } else {
        navigate('/');
        setTimeout(() => {
          scrollToSection(path.substring(2));
        }, 100);
      }
    } else {
      navigate(path);
    }
  };
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-dark-800/80 backdrop-blur-lg' : 'bg-dark-900'}`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/">
          <Logo />
        </Link>
        <nav className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => <motion.button key={item.name} onClick={() => handleNavigation(item.path)} className="text-neutral-white hover:text-primary-cyan font-medium transition-colors" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }} initial={{
          opacity: 0,
          y: -20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: index * 0.1
        }}>
              {item.name}
            </motion.button>)}
        </nav>
        <div className="flex items-center space-x-4">
          <motion.button onClick={handleAuthNavigation} className="hidden md:flex items-center bg-gradient-to-r from-primary-cyan to-primary-blue text-white px-4 py-2 rounded-lg" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            <UserIcon className="h-5 w-5 mr-2" />
            <span>Sign in</span>
          </motion.button>
          <motion.button className="md:hidden text-neutral-white" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.95
        }}>
            <MenuIcon className="h-6 w-6" />
          </motion.button>
        </div>
      </div>
    </motion.header>;
};