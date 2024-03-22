export const getColorTheme = (theme, resolvedTheme, className) => {
    if ((theme === 'dark' || resolvedTheme === 'dark') && className === "") {
      return 'bg-white text-black';
    } else {
      return 'bg-black text-white';
    }
  };