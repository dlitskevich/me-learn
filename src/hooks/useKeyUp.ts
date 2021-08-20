import { useEffect } from 'react';

export const useKeyUp = (targetKey:string, action:()=>void) => {
  const upHandler = ({ key }) => {
    if (key === targetKey) {
      action();
    }
  };
  useEffect(() => {
    window.addEventListener('keyup', upHandler);
    return () => window.removeEventListener('keyup', upHandler);
  }, []);
};
