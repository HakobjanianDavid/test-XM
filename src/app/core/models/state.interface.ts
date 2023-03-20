export enum state {
  LOADING = 'loading',
  LOADED = 'loaded',
};

export interface IState<T> {
  value: T,
  state: state
};
