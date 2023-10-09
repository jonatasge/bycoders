export type StorageQuery = {
  key: string;
  table: string;
};

export type StorageFindProps = StorageQuery;
export type StorageFindResponse<T = unknown> = Promise<T | undefined>;

export type StorageInsertProps<T = unknown> = StorageQuery & { value: T };
export type StorageInsertResponse<T = unknown> = Promise<T>;
