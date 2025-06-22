import React, { useEffect, useState } from 'react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import { motion, AnimatePresence } from 'framer-motion';
export const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  useEffect(() => {
    // Ensure we're at the top of the page when component mounts
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} exit={{
    opacity: 0
  }} className="min-h-screen bg-dark-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} className="bg-dark-800 rounded-xl p-8 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-neutral-white mb-2">
              {isSignIn ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-neutral-mid">
              {isSignIn ? 'Sign in to continue your journey' : 'Join us for a safer delivery experience'}
            </p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={isSignIn ? 'signin' : 'signup'} initial={{
            opacity: 0,
            x: isSignIn ? -20 : 20
          }} animate={{
            opacity: 1,
            x: 0
          }} exit={{
            opacity: 0,
            x: isSignIn ? 20 : -20
          }} transition={{
            duration: 0.2
          }}>
              {isSignIn ? <SignInForm /> : <SignUpForm />}
            </motion.div>
          </AnimatePresence>
          <div className="mt-6 text-center">
            <p className="text-neutral-mid">
              {isSignIn ? "Don't have an account?" : 'Already have an account?'}
              <button onClick={() => setIsSignIn(!isSignIn)} className="text-primary-cyan ml-2 hover:underline focus:outline-none">
                {isSignIn ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>;
};