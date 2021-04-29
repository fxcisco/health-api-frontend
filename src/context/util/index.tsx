import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

import {
  UtilDispatch,
  UtilState,
  Init_UtilState
} from './types';

import { utilReducer } from './reducers';

const UtilStateContext = createContext<UtilState>(Init_UtilState);

export class UtilCtx {
  private static state_ctx = UtilStateContext;
  private static _state: UtilState = Init_UtilState;
  private static _dispatch: UtilDispatch = (args: any) => {};

  static set(state: UtilState, dispatch: UtilDispatch){
    UtilCtx._state = state;
    UtilCtx._dispatch = dispatch;
  }

  static dispatch(action: Parameters<UtilDispatch>[0]){
    return UtilCtx._dispatch(action);
  }
  static getState = () => UtilCtx._state;
  static useState = () => useContext(UtilCtx.state_ctx);
}


type ProviderProps = { children: ReactNode; }
export const UtilityProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useReducer(utilReducer, Init_UtilState);
  UtilCtx.set(state, dispatch);
  
  return (
    <UtilStateContext.Provider value={state}>
      {children}
    </UtilStateContext.Provider>
  );
};