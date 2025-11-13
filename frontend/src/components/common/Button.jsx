const Button = ({ 
    children, 
    type = 'button', 
    variant = 'primary', 
    size = 'md', 
    onClick, 
    disabled = false,
    fullWidth = false,
    className = ''
  }) => {
    const baseClasses = 'rounded-full font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variantClasses = {
      primary: 'bg-theme-red text-white hover:bg-white hover:text-theme-red border-2 border-theme-red focus:ring-theme-red',
      secondary: 'bg-secondary text-white hover:bg-white hover:text-secondary border-2 border-secondary focus:ring-secondary',
      danger: 'bg-danger text-white hover:bg-white hover:text-danger border-2 border-danger focus:ring-danger',
      success: 'bg-success text-white hover:bg-white hover:text-success border-2 border-success focus:ring-success',
      outline: 'border-2 border-theme-red bg-white text-theme-red hover:bg-theme-red hover:text-white focus:ring-theme-red'
    };
    
    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2',
      lg: 'px-6 py-3 text-lg'
    };
    
    const widthClass = fullWidth ? 'w-full' : '';
    const disabledClass = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
    
    return (
      <button
        type={type}
        className={`
          ${baseClasses}
          ${variantClasses[variant]}
          ${sizeClasses[size]}
          ${widthClass}
          ${disabledClass}
          ${className}
        `}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    );
  };
  
  export default Button;