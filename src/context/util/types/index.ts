import { ActionCreator, UnionizeTypeArgs } from '@/types';
import { Dispatch } from 'react';

import { NotifyState, NotifyCreatorTypes, Init_NotifyState } from './notify'
import { AlertState, AlertCreatorTypes, Init_AlertState } from './alert';

export type AlertType = {
  id?: string | number;
  variant?: 'error'|'info'|'good';
  message: string;
}

type UtilCreatorTypes = AlertCreatorTypes & NotifyCreatorTypes;

export type UtilState = AlertState & NotifyState;
export const Init_UtilState: UtilState = {
  ...Init_NotifyState,
  ...Init_AlertState
}

export type UtilActionType = UnionizeTypeArgs<UtilCreatorTypes>;
export type UtilAction = ActionCreator<UtilActionType>;
export type UtilDispatch = Dispatch<UtilActionType>;