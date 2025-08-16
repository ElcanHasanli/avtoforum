// src/components/common/Button.jsx
import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  loading = false, 
  disabled = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  onClick,
  type = 'button',
  className = '',
  ...props 
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm hover:shadow-md',
    secondary: 'bg-gray-100 text-gray-700 hover:bg-gray-200 focus:ring-gray-500 border border-gray-300',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm hover:shadow-md',
    warning: 'bg-yellow-600 text-white hover:bg-yellow-700 focus:ring-yellow-500 shadow-sm hover:shadow-md',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm hover:shadow-md',
    outline: 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
    ghost: 'text-gray-600 hover:bg-gray-100 focus:ring-gray-500',
    gradient: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 focus:ring-blue-500 shadow-sm hover:shadow-md'
  };

  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs',
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
    xl: 'px-8 py-4 text-lg'
  };

  const disabledClasses = 'opacity-50 cursor-not-allowed pointer-events-none';
  const fullWidthClass = fullWidth ? 'w-full' : '';

  const buttonClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${(disabled || loading) ? disabledClasses : ''}
    ${fullWidthClass}
    ${className}
  `.trim();

  const renderIcon = (position) => {
    if (loading && position === iconPosition) {
      return <Loader2 className="w-4 h-4 animate-spin" />;
    }
    
    if (icon && position === iconPosition && !loading) {
      const IconComponent = icon;
      return <IconComponent className="w-4 h-4" />;
    }
    
    return null;
  };

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {iconPosition === 'left' && (
        <span className={children ? 'mr-2' : ''}>
          {renderIcon('left')}
        </span>
      )}
      
      {children}
      
      {iconPosition === 'right' && (
        <span className={children ? 'ml-2' : ''}>
          {renderIcon('right')}
        </span>
      )}
    </button>
  );
};

// Pre-configured button variants for common use cases
export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;
export const SuccessButton = (props) => <Button variant="success" {...props} />;
export const DangerButton = (props) => <Button variant="danger" {...props} />;
export const OutlineButton = (props) => <Button variant="outline" {...props} />;
export const GhostButton = (props) => <Button variant="ghost" {...props} />;
export const GradientButton = (props) => <Button variant="gradient" {...props} />;

// Icon-only button
export const IconButton = ({ icon: Icon, size = 'md', variant = 'ghost', ...props }) => {
  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
    xl: 'w-7 h-7'
  };

  return (
    <Button variant={variant} size={size} className="!p-2" {...props}>
      <Icon className={iconSizes[size]} />
    </Button>
  );
};

// Loading button
export const LoadingButton = ({ loading, children, ...props }) => (
  <Button loading={loading} disabled={loading} {...props}>
    {loading ? 'Yüklənir...' : children}
  </Button>
);

// Social media buttons
export const FacebookButton = (props) => (
  <Button variant="primary" className="!bg-blue-600 hover:!bg-blue-700" {...props} />
);

export const GoogleButton = (props) => (
  <Button variant="secondary" className="!bg-white hover:!bg-gray-50 border-gray-300" {...props} />
);

export const TwitterButton = (props) => (
  <Button variant="primary" className="!bg-sky-500 hover:!bg-sky-600" {...props} />
);

export default Button;