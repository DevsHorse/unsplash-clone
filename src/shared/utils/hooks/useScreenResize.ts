import { useEffect } from 'react';

export const useScreenResize = (handler: () => void) => {
  useEffect(() => {
    window.addEventListener('resize', handler);
    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [handler]);
};
