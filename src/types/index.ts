import { NextComponentType, NextPageContext } from 'next';
import { AxiosInstance } from 'axios';
import { Dispatch, PropsWithChildren } from 'react';

export interface MyPageContext
  extends NextPageContext { client: AxiosInstance; }

interface RegComponent extends PropsWithChildren<{}> {}

export type SSRPage<CProps = RegComponent> = NextComponentType<MyPageContext, CProps, CProps>


// Redux -------------
export type NOT_NULL = string | number | boolean | object;
export type ActionCreator<AT> = ((d: Dispatch<AT>) => void | Promise<void>)| AT;


// Context ------------
export const useCtxDispatch = <D>(dis: D) => (fn:(dis: D) => void) => fn(dis);
export type Action_FN<A> = (d: Dispatch<A>) => void | Promise<void>;
export type Reducer_FN<A,S> = (s: S, a: A) => S;


export type UnionizeTypes<T extends object> = {
  [K in keyof T]: {type: K;}
}[keyof T];

export type UnionizeTypeArgs<T extends object> = {
  [K in keyof T]: T[K] extends never? {type: K} : {type: K; payload: T[K]}
}[keyof T]


type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type KVPair = { k: PropertyKey; v: unknown }
type Objectify<T extends KVPair> = {
  [k in T['k']]: Extract<T, {k: k}>['v']
};
