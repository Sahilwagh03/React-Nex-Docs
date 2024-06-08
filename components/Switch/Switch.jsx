import React from 'react';

const Switch = ({ enabled, onChange, disabled }) => {
  const toggleClass = enabled ? 'translate-x-5 md:translate-x-6' : 'translate-x-0';
  const backgroundColor = enabled ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-[#27272a]';
  const cursorStyle = disabled ? 'cursor-not-allowed' : 'cursor-pointer';
  const handleClick = () => {
    if (!disabled) {
      onChange(!enabled);
    }
  };

  return (
    <div
      className={`${backgroundColor} ${cursorStyle} w-12 h-6 md:w-14 md:h-7 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out`}
      onClick={handleClick}
    >
      <div
        className={`bg-white dark:bg-black h-5 w-5 md:h-6 md:w-6 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${toggleClass}`}
      >
      </div>
    </div>
  );
};

export default Switch;
