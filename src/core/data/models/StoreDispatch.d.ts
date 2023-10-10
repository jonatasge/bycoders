export type StoreDispatchFactory<T = unknown, U = unknown> = (
  store: T
) => StoreDispatch<U>;

export type StoreDispatch<T = unknown> = (data: T) => void;
