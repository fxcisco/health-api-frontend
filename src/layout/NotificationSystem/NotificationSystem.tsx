import React from 'react';
import { useRouter } from 'next/router';
import { UtilCtx } from '@/context/util';
import { Notification } from './Notification';

export const NotificationSystem = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const { notifications } = UtilCtx.useState();

  const renderAlerts = () => {
    return notifications.map((note) => {
      const hidden = note.hide?.some((v) => pathname.includes(v));
      return <Notification key={note.id} {...note} hidden={hidden} />;
    });
  };

  return <aside className="notification-center">{renderAlerts()}</aside>;
};
