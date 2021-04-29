import { Reducer_FN } from '@/types';
import { UtilActionType, UtilState } from '../types';
export type RFn_Util = Reducer_FN<UtilActionType, UtilState>;

const handleSetAlert = (alert, state: any) => {
  const updated = state.alerts.concat(alert);
  return { ...state, alerts: updated } as any;
};

const handleRemoveAlert = (id: number | string, state: any) => {
  const updated = state.alerts.filter((a: any) => a.id !== id);
  return { ...state, alerts: updated } as any;
};

const utilAlertReducer:RFn_Util = (state, action) => {
  switch (action.type) {
    case 'ALERT_SET':
      return handleSetAlert(action.payload, state);
    case 'ALERT_REMOVE':
      return handleRemoveAlert(action.payload, state);

    default:
      return state;
  }
}

export const alertReducers = [
  utilAlertReducer
]