import { UtilCtx } from "../index";
import { randomId } from "@/utils/common";
import { parseErrors } from '@/utils/errors';

interface MessageInput {
  variant?: 'info' | 'good' | 'error';
  message: string;
}

export function setAlert({ variant = 'info', message }: MessageInput) {
  const id = randomId();
  const notification = { id, variant, message };
  
  UtilCtx.dispatch({
    type: 'ALERT_SET',
    payload: notification,
  });
}

export async function hideAlert(id: string) {
  UtilCtx.dispatch({
    type: 'ALERT_REMOVE',
    payload: id,
  });
}

type ErrorLogInput = Parameters<typeof parseErrors>[0];
export function logError(error: ErrorLogInput){
  const { message, list } = parseErrors(error);
  list.forEach(err => {
    setAlert({ variant: 'error', message: err.message });
  })
  return message;
}