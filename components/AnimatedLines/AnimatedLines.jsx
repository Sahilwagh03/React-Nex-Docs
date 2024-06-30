import React from 'react';
import { motion } from 'framer-motion';

const AnimatedLines = ({ width = 317, height = 80, pathData, gradientColors, animationConfig }) => {
  // Default path data if not provided
  const defaultPath = "M316 0V10C316 12.2091 314.209 14 312 14H5C2.79086 14 1 15.7909 1 18V80";
  const path = pathData || defaultPath;

  // Default gradient colors if not provided
  const defaultGradientColors = ["#2EB9DF", "#9E00FF"];
  const colors = gradientColors || defaultGradientColors;

  // Generate a unique ID for the gradient
  const gradientId = `pulse-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <svg 
      width={width} 
      height={height} 
      viewBox={`0 0 ${width} ${height}`} 
      fill="none"
    >
      {/* Base path for visual reference */}
      <path
        d={path}
        stroke="black"
        strokeOpacity="0.2"
      />
      {/* Animated path with gradient */}
      <path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeLinecap="round"
        strokeWidth="2"
      />
      {/* Gradient definition */}
      <defs>
        <motion.linearGradient
          animate={animationConfig}
          transition={{
            duration: 2,
            repeat: Infinity
          }}
          id={gradientId}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={colors[0]} stopOpacity="0" />
          <stop stopColor={colors[0]} />
          <stop offset="1" stopColor={colors[1]} stopOpacity="0" />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}

export default AnimatedLines;
