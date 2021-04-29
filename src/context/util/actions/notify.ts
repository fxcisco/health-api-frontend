import { randomId } from '@/utils/common';
import { UtilCtx } from '../index';

interface MessageInput {
  status: 'pending' | 'success' | 'error';
  title: string;
  message: string;
  hide?: string[]
}
export function setNotification({ status, title, message, hide }: MessageInput) {
  const id = randomId();
  const notification = { id, status, title, message, hide: hide || []};
  
  UtilCtx.dispatch({
    type: 'NOTIFICATION_SET',
    payload: notification,
  });
}

export async function hideNotification(id: string) {
  UtilCtx.dispatch({
    type: 'NOTIFICATION_REMOVE',
    payload: id,
  });
}