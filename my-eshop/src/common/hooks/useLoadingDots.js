import { useEffect, useState } from 'react';

function useLoadingDots() {
  const [loadingDots, setLoadingDots] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingDots((prevdots) => (prevdots === '...' ? '' : prevdots + '.'));
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return loadingDots;
}

export default useLoadingDots;
