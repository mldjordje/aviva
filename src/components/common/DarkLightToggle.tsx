import React, { useEffect, useState } from 'react';

const DarkLightToggle = () => {
  const [activeMode, setActiveMode] = useState<string>('light');

  useEffect(() => {
    const storedMode = localStorage.getItem('mode');
    if (storedMode) {
      setActiveMode(storedMode);
      toggleBodyClass(storedMode);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mode', activeMode);
    toggleBodyClass(activeMode);
  }, [activeMode]);

  const toggleBodyClass = (mode: string) => {
    if (typeof window !== 'undefined') {
      if (mode === 'dark') {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  };

  // ništa ne renderuje na stranici
  return null;
};

export default DarkLightToggle;
