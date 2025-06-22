import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FormInput } from './FormInput';
import { LoaderIcon } from 'lucide-react';
interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const SignUpForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: {
      errors
    }
  } = useForm<SignUpFormData>();
  const password = watch('password');
  const onSubmit = async (data: SignUpFormData) => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log('Sign up:', data);
    setIsLoading(false);
  };
  return <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <FormInput label="Full Name" type="text" error={errors.name?.message} register={register('name', {
      required: 'Name is required',
      minLength: {
        value: 2,
        message: 'Name must be at least 2 characters'
      }
    })} />
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
        value: 8,
        message: 'Password must be at least 8 characters'
      },
      pattern: {
        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        message: 'Password must include uppercase, lowercase, number and special character'
      }
    })} />
      <FormInput label="Confirm Password" type="password" isPassword error={errors.confirmPassword?.message} register={register('confirmPassword', {
      required: 'Please confirm your password',
      validate: value => value === password || 'Passwords do not match'
    })} />
      <motion.button type="submit" disabled={isLoading} className="w-full bg-gradient-to-r from-primary-cyan to-primary-blue text-white py-2 px-4 rounded-lg font-medium
          disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{
      scale: 1.02
    }} whileTap={{
      scale: 0.98
    }}>
        {isLoading ? <LoaderIcon className="h-5 w-5 animate-spin mx-auto" /> : 'Create Account'}
      </motion.button>
    </form>;
};