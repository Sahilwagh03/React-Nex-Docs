import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "../../lib/utils";

const ProgressBar = ({ value, activeColor = "" , className = "", animationDuration = 1 }) => {
  const controls = useAnimation();

  useEffect(() => {
    const adjustedProgress = Math.min(value, 100);
    controls.start({
      width: `${adjustedProgress}%`,
      transition: { duration: animationDuration }
    });
  }, [value, controls]);

  return (
    <div className={cn(`w-full h-2 rounded-full overflow-hidden bg-[#18181b33] dark:bg-black  ${className}`)}
      role="progressbar" // Add role attribute
      aria-valuemin="0" // Minimum value
      aria-valuemax="100" // Maximum value
      aria-valuenow={value} // Current value (dynamic based on `value` prop)
    >
      <motion.div
        className={cn(`h-full bg-black dark:bg-white`)}
        style={{ width: "0%", backgroundColor: activeColor!="" && `${activeColor}` }} // Initial width before animation
        animate={controls}
      />
    </div>
  );
};

export default ProgressBar;
