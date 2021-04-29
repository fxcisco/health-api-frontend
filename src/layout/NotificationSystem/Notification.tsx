import { hideNotification } from '@/context/util/actions';
import React, { useEffect } from 'react';

interface Props {
  id: string;
  title: string;
  message: string;
  status?: string;
  hidden?: boolean;
}

export const Notification = (props: Props) => {
  const { id, title, message, status, hidden } = props;
  useEffect(() => {
    let hideTimer = setTimeout(() => hideNotification(id), 8000);
    return () => {
      clearTimeout(hideTimer);
    };
  }, []);

  const closeNotification = () => {
    hideNotification(id);
  };

  let statusClasses = '';
  if (status === 'success') {
    statusClasses = 'success';
  }

  if (status === 'error') {
    statusClasses = 'error';
  }

  if (status === 'pending') {
    statusClasses = 'pending';
  }

  const hiddenClass = hidden ? 'hide':'';
  const classNames = `notification ${statusClasses} ${hiddenClass}`;
  return (
    <div className={classNames} onClick={closeNotification}>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};
