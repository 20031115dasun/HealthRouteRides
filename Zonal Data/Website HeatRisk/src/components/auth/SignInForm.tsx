import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FormInput } from './FormInput';
import { LoaderIcon } from 'lucide-react';
interface SignInFormData {
  email: string;
  password: string;
}
export const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm<SignInFormData>();
  const onSubmit = async (data: SignInFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Sign in:', data);
    setIsLoading(false);
  };
  return <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput label="Email" type="email" error={errors.email?.message} register={register('email', {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Invalid email address'
      }
    })} />
      <FormInput label="Password" type="password" isPassword error={errors.password?.message} register={register('password', {
      required: 'Password is required',
      minLength: {
        value: 6,
        message: 'Password must be at least 6 characters'
      }
    })} />
      <motion.button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-primary-cyan to-primary-blue text-white py-2 px-4 rounded-lg font-medium
          disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }}>
        {isLoading ? <LoaderIcon className="h-5 w-5 animate-spin mx-auto" /> : 'Sign In'}
      </motion.button>
      <div className="text-center">
        <a href="#" className="text-sm text-primary-cyan hover:underline">
          Forgot your password?
        </a>
      </div>
    </form>;
};