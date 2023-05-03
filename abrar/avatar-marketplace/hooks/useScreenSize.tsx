import {useEffect, useState} from 'react';

type ScreenSize = '4xl' | '3xl' | '2xl' | 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>();

  const updateScreenSize = () => {
    const width = window.innerWidth;
    switch (true) {
      case width > 2560:
        setScreenSize('4xl');
        return;
      case width > 1920:
        setScreenSize('3xl');
        return;
      case width > 1536:
        setScreenSize('2xl');
        return;
      case width > 1280:
        setScreenSize('xl');
        return;
      case width > 1024:
        setScreenSize('lg');
        return;
      case width > 768:
        setScreenSize('md');
        return;

      case width > 640:
        setScreenSize('sm');
        return;
      default:
        setScreenSize('xs');
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateScreenSize);
      updateScreenSize();
      return () => window.removeEventListener('resize', updateScreenSize);
    }
  }, []);

  const isMobile = () => {
    return screenSize && ['xs', 'sm'].includes(screenSize);
  };

  return {screenSize, isMobile};
};
export default useScreenSize;
