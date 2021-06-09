import { useEffect, useState } from 'react';
import { ReactComponent as SpinIcon } from '../assets/spin.svg';

function Spinner({ text = 'Loading' }) {
  const [dots, setDots] = useState('');
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDots((prevdots) => (prevdots === '...' ? '' : prevdots + '.'));
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="h-full flex-col flex items-center justify-center">
      <SpinIcon />
      <div className="mt-1 font-semibold">{text + dots}</div>
    </div>
  );
}

export default Spinner;
