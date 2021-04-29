import { alertReducers } from './alert';
import { combineCtxReducers } from '@/utils/context';
import { utilNotificationReducers } from './notify';

export const utilReducer = combineCtxReducers([
  ...alertReducers,
  ...utilNotificationReducers
])
