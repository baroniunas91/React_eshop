import { ReactComponent as SpinIcon } from '../assets/spin.svg';
import useLoadingDots from '../hooks/useLoadingDots';

function Spinner({ text = 'Loading' }) {
  const loadingDots = useLoadingDots();

  return (
    <div className="h-full flex-col flex items-center justify-center">
      <SpinIcon />
      <div className="mt-1 font-semibold">{text + loadingDots}</div>
    </div>
  );
}

export default Spinner;
