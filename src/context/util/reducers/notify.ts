import { Reducer_FN } from '@/types';
import { UtilActionType, UtilState } from '../types';

export type RFn_Util = Reducer_FN<UtilActionType, UtilState>;

const handleSetAlert = (note: any, state: any) => {
  const updated = state.notifications.concat(note);
  return { ...state, notifications: updated } as any;
};

const handleRemoveAlert = (id: string, state: any) => {
  const updated = state.notifications.filter((a: any) => a.id !== id);
  return { ...state, notifications: updated } as any;
};


const notificationReducer:RFn_Util = (state, action) => {
  switch (action.type) {
    case 'NOTIFICATION_SET':
      return handleSetAlert(action.payload, state);
    case 'NOTIFICATION_REMOVE':
      return handleRemoveAlert(action.payload, state);
    case 'NOTIFICATION_STATUS':
      const { status, value } = action.payload;
      state.statusType[status] = value;
      return {...state};
    default:
      return state;
  }
}

export const utilNotificationReducers = [
  notificationReducer
]