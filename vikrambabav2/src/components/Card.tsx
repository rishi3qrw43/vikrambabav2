import React from 'react';

interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined' | 'glass';
  className?: string;
  onClick?: () => void;
  isHoverable?: boolean;
}

const variantStyles = {
  default: 'bg-white dark:bg-gray-800 shadow-sm',
  elevated: 'bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl',
  outlined: 'border border-gray-200 dark:border-gray-700',
  glass: 'backdrop-blur-md bg-white/30 dark:bg-black/30',
};

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  className = '',
  onClick,
  isHoverable = false,
}) => {
  return (
    <div
      className={`
        rounded-xl p-6
        transition-all duration-200 ease-in-out
        ${variantStyles[variant]}
        ${isHoverable ? 'hover:scale-[1.02] cursor-pointer' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = '',
}) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  className = '',
}) => (
  <h3
    className={`text-xl font-semibold text-gray-900 dark:text-gray-100 ${className}`}
  >
    {children}
  </h3>
);

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({
  children,
  className = '',
}) => (
  <p className={`mt-2 text-gray-600 dark:text-gray-400 ${className}`}>
    {children}
  </p>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({
  children,
  className = '',
}) => <div className={className}>{children}</div>;

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = '',
}) => (
  <div
    className={`mt-4 flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700 ${className}`}
  >
    {children}
  </div>
); 