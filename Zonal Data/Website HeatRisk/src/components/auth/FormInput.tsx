import React, { useState } from 'react';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { motion } from 'framer-motion';
interface FormInputProps {
  label: string;
  type: string;
  error?: string;
  register: any;
  isPassword?: boolean;
}
export const FormInput = ({
  label,
  type,
  error,
  register,
  isPassword = false
}: FormInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const inputType = isPassword ? showPassword ? 'text' : 'password' : type;
  return <div className="mb-4">
      <label className="block text-sm font-medium text-neutral-mid mb-1">
        {label}
      </label>
      <div className="relative">
        <motion.div animate={error ? {
        x: [0, -10, 10, -10, 10, 0]
      } : {}} transition={{
        duration: 0.4
      }}>
          <input type={inputType} {...register} className={`w-full px-4 py-2 bg-dark-700 border rounded-lg outline-none transition-colors
              ${error ? 'border-primary-red focus:border-primary-red' : 'border-dark-600 focus:border-primary-cyan'}
              text-neutral-white placeholder-neutral-mid`} />
        </motion.div>
        {isPassword && <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-mid hover:text-neutral-white">
            {showPassword ? <EyeOffIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
          </button>}
      </div>
      {error && <motion.p initial={{
      opacity: 0,
      y: -10
    }} animate={{
      opacity: 1,
      y: 0
    }} className="text-primary-red text-sm mt-1">
          {error}
        </motion.p>}
    </div>;
};