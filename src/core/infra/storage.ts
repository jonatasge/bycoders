import {
  StorageFindProps,
  StorageFindResponse,
  StorageInsertProps,
  StorageInsertResponse,
} from "@/core/data/models/Storage";

const find = <T = unknown>({
  key,
  table,
}: StorageFindProps): StorageFindResponse<T> => {
  const item = localStorage.getItem(`${table}.${key}`);
  return Promise.resolve(item ? JSON.parse(item) : undefined);
};

const insert = <T = unknown>({
  key,
  table,
  value,
}: StorageInsertProps<T>): StorageInsertResponse => {
  localStorage.setItem(`${table}.${key}`, JSON.stringify(value));
  return Promise.resolve();
};

export const storage = {
  find,
  insert,
};
