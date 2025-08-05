

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import darkIcon from '@/assets/img/dark.png';       // ikonica za dark mode (npr. mesec)
import brightIcon from '@/assets/img/brightnes.svg'; // ikonica za light mode (npr. sunce)

const DarkLightToggle = () => {
  const [activeMode, setActiveMode] = useState<string>('light');
  const [isAnimating, setIsAnimating] = useState(false);

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

  const toggleTheme = () => {
    setIsAnimating(true);
    setActiveMode(prev => (prev === 'dark' ? 'light' : 'dark'));
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Promeni temu: tamna/svetla"
      title="Promeni temu"
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 4,
        borderRadius: 8,
        transition: 'background-color 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: isAnimating ? '0 0 10px rgba(255, 255, 0, 0.7)' : 'none',
      }}
      onMouseEnter={e => e.currentTarget.style.backgroundColor = '#f0f0f0'}
      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
    >
      <Image
        src={activeMode === 'dark' ? brightIcon : darkIcon}
        alt={activeMode === 'dark' ? 'Light mode ikon' : 'Dark mode ikon'}
        width={24}
        height={24}
        style={{
          transition: 'transform 0.3s ease',
          transform: isAnimating ? 'rotate(360deg)' : 'rotate(0deg)',
        }}
      />
    </button>
  );
};

export default DarkLightToggle;
