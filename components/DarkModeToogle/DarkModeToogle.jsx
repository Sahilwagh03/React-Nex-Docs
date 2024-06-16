import React, { useEffect, useState } from 'react';
import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { useTheme } from 'next-themes';

const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Render nothing on the server and until the component is mounted
  }

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button onClick={toggleDarkMode} style={{ padding: '8px', cursor: 'pointer', background: 'none', border: 'none' }}>
      {resolvedTheme === 'dark' ? <IoSunnyOutline size={24} /> : <IoMoonOutline size={24} />}
    </button>
  );
};

export default DarkModeToggle;
