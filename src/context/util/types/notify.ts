export type NotificationType = {
  id: string;
  title: string;
  status: string;
  message: string;
  hide: string[];
}

export interface NotifyCreatorTypes {
  NOTIFICATION_SET: NotificationType;
  NOTIFICATION_REMOVE: string;
  NOTIFICATION_STATUS: {
    status: string;
    value: boolean;
  };
}

export interface NotifyState {
  notifications: NotificationType[];
  statusType: {
    message: boolean;
    order: boolean;
    notification: boolean;
    follower: boolean;
  }
}

export const Init_NotifyState: NotifyState = {
  notifications: [],
  statusType: {
    message: false,
    order: false,
    notification: false,
    follower: false,
  }
}