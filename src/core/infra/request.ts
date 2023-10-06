import { Request } from "@/core/data/models/Request";

export const request: Request = (url, options) => {
  return fetch(url, {
    ...options,
    headers: {
      Authorization: import.meta.env.VITE_API_TOKEN,
      ...options?.headers,
    },
  });
};
