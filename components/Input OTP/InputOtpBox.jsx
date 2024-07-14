import React, { useState, useEffect } from 'react';
import { getSizeClasses } from './utils';
import classNames from 'classnames';

const InputOtpBox = ({ length = 6, className = '', size = 'md', outline = '', placeholder = 'o', onOtpChange }) => {
  const [pins, setPins] = useState(Array(length).fill(''));

  useEffect(() => {
    if (onOtpChange) {
      onOtpChange(pins.join(''));
    }
  }, [pins, onOtpChange]);

  const handleChange = (event, index) => {
    const { value } = event.target;
    
    if (!/^[0-9]*$/.test(value)) {
      return; 
    }

    const newPins = [...pins];
    newPins[index] = value;
    setPins(newPins);

    if (value.length === 1 && index < length - 1) {
      const nextInput = document.getElementById(`pin-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }

    if (value.length === 0 && index > 0) {
      const prevInput = document.getElementById(`pin-${index - 1}`);
      if (prevInput) {
        prevInput.focus();
      }
    }
  };

  const handlePaste = (event) => {
    // Prevent default paste behavior to allow custom handling
    event.preventDefault();

    const pastedText = event.clipboardData.getData('text');
    if (pastedText.length <= length) {
      const newPins = pastedText.split('').map((char, index) => (index < length ? char : ''));
      setPins(newPins);

      // Focus on the last pasted input or the next one if pasting is incomplete
      const lastPastedIndex = Math.min(length - 1, newPins.lastIndexOf(''));
      const nextInput = document.getElementById(`pin-${lastPastedIndex + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const sizeClass = getSizeClasses(size);
  return (
    <>
      {pins.map((pin, index) => (
        <input
          key={index}
          type="text"
          id={`pin-${index}`}
          className={classNames('text-center border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 dark:border-[#2E2E2E] dark:bg-[#1C1C1B] dark:text-white', className, sizeClass)}
          maxLength="1"
          value={pin}
          onChange={(event) => handleChange(event, index)}
          onPaste={handlePaste}
          placeholder={placeholder}
          style={{'--tw-ring-color': outline }}
        />
      ))}
    </>
  );
};

export default InputOtpBox;
