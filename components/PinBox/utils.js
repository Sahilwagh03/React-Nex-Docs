export const getSizeClasses = (size) => {
    switch (size) {
        case 'xs':
            return 'w-6 h-6 text-xs'
        case 'sm':
            return 'w-8 h-8 text-sm';
        case 'md':
            return 'w-10 h-10 text-md';
        case 'lg':
            return 'w-12 h-12 text-lg';
        default:
            return 'w-10 h-10 text-xs'; // Default to medium size
    }
};

export const getOutlineColorClasses = (color) => {
    if (color) {
      return `focus:ring-${color}-500`;
    }
    return '';
  };