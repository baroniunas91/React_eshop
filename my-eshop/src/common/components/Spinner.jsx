import { useEffect, useState } from 'react';
import { ReactComponent as SpinIcon } from '../assets/spin.svg';

function Spinner({ text = 'Loading' }) {
  const [dots, setDots] = useState('');
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (dots !== '...') {
        setDots((dots) => dots + '.');
      } else {
        setDots('');
      }
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, [dots]);

  return (
    <div className="h-full flex-col flex items-center justify-center">
      <SpinIcon />
      <div className="mt-1 font-semibold">{text + dots}</div>
    </div>
  );
}

export default Spinner;
