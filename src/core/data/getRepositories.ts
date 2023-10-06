import { GetRepositories } from "@/core/domain/GetRepositories";
import { request } from "@/core/infra/request";

export const getRepositories: GetRepositories = async ({
  direction = "desc",
  per_page = 50,
  sort = "updated",
  username,
}) => {
  const response = await request(
    `${
      import.meta.env.VITE_API_URL
    }/users/${username}/repos?sort=${sort}&direction=${direction}&per_page=${per_page}`
  );

  return await response.json();
};
