import { GetUser } from "@/core/domain/GetUser";
import { request } from "@/core/infra/request";

export const getUser: GetUser = async (username: string) => {
  const response = await request(
    `${import.meta.env.VITE_API_URL}/users/${username}`
  );

  return await response.json();
};
