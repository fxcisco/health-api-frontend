export const isServer = () => typeof window === 'undefined';

export const checkStaleData = (oldTime: any) => {
  return Date.now() > oldTime + (1000 * 60 * 60);
}

export const randomId = (size: number = 24) => {
  return Math.random().toString(16).substr(2,size);
}