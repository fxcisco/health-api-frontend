export const combineCtxReducers = <S, A>(
  reducers: ((state: S, action: A) => S)[],
  log?: boolean
) => (state: S, action: A) => {
  if (log) console.log((action as any)?.type);
  return reducers.reduce(
    (root, currentReducer) => {
      return currentReducer(root, action);
    },
    state
  );
};
