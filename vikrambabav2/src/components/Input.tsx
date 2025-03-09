import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className = '',
      fullWidth = true,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`${fullWidth ? 'w-full' : ''} space-y-2`}>
        {label && (
          <label
            htmlFor={props.id}
            className="block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}
        <div className="relative rounded-lg shadow-sm">
          {leftIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                {leftIcon}
              </span>
            </div>
          )}
          <input
            ref={ref}
            className={`
              block rounded-lg bg-white dark:bg-gray-800
              border-gray-300 dark:border-gray-600
              focus:border-blue-500 dark:focus:border-blue-400
              focus:ring-blue-500 dark:focus:ring-blue-400
              disabled:opacity-60 disabled:cursor-not-allowed
              shadow-sm
              ${error ? 'border-red-500 dark:border-red-400' : ''}
              ${leftIcon ? 'pl-10' : ''}
              ${rightIcon ? 'pr-10' : ''}
              ${fullWidth ? 'w-full' : ''}
              ${className}
            `}
            {...props}
          />
          {rightIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500 dark:text-gray-400 sm:text-sm">
                {rightIcon}
              </span>
            </div>
          )}
        </div>
        {(error || helperText) && (
          <p
            className={`text-sm ${
              error
                ? 'text-red-600 dark:text-red-400'
                : 'text-gray-500 dark:text-gray-400'
            }`}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
); 