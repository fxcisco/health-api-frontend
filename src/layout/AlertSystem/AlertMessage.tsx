import React, { useEffect } from 'react';
import { hideAlert } from '@/context/util/actions'

interface Props {
  id: string;
  message: string;
  variant?: string;
}

export const AlertMessage = (props: Props) => {
  const { id, message, variant } = props;
  useEffect(() => {
    let hideTimer = setTimeout(() => hideAlert(id), 8000);
    return () => {
      clearTimeout(hideTimer);
    };
  }, []);

  const closeNotification = () => {
    hideAlert(id);
  };

  let statusClasses = '';
  if (variant === 'good') {
    statusClasses = 'type-good';
  }
  if (variant === 'error') {
    statusClasses = 'type-error';
  }
  if (variant === 'info') {
    statusClasses = 'type-info';
  }

  const classNames = `alert-message ${statusClasses}`;
  return (
    <div className={classNames} onClick={closeNotification}>
      <p className="message-body">{message}</p>
    </div>
  );
};
