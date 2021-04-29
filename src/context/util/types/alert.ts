export type AlertType = {
  id?: string | number;
  variant?: 'error'|'info'|'good';
  message: string;
}

export interface AlertCreatorTypes {
  ALERT_SET: AlertType;
  ALERT_REMOVE: string|number;
}

export interface AlertState {
  language: string;
  alerts: any[];
}

export const Init_AlertState: AlertState = {
  language: 'en',
  alerts: [],
}