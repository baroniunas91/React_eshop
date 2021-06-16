import { useEffect } from 'react';
import clsx from 'clsx';
import { render, unmountComponentAtNode } from 'react-dom';

const notificationContainer = document.getElementById('notification');
export const notificationTypes = {
  SUCCESS: 'success',
  INFO: 'info',
};
const typeClassMap = {
  success: 'bg-green-500',
  info: 'bg-blue-500',
};
const initialClasses =
  'fixed text-white font-semibold bottom-3 right-3 p-3 z-50 shadow';

function Notification({ text, type, hangTimeInMS = 3000 }) {
  useEffect(() => {
    setTimeout(() => {
      unmountComponentAtNode(notificationContainer);
    }, hangTimeInMS);
  }, []); //eslint-disable-line
  return <div className={clsx(initialClasses, typeClassMap[type])}>{text}</div>;
}

export const notification = {
  success: (props) =>
    render(
      <Notification {...props} type={notificationTypes.SUCCESS} />,
      notificationContainer
    ),
  info: (props) =>
    render(
      <Notification {...props} type={notificationTypes.INFO} />,
      notificationContainer
    ),
};
