import { GetRepository } from "@/core/domain/GetRepository";
import { request } from "@/core/infra/request";

export const getRepository: GetRepository = async (fullName) => {
  const response = await Promise.all([
    request(`${import.meta.env.VITE_API_URL}/repos/${fullName}`),
    request(`${import.meta.env.VITE_API_URL}/repos/${fullName}/readme`),
  ]);

  const readme = await response[1].json();

  return {
    ...(await response[0].json()),
    readme: readme.content ? atob(readme.content) : ''
  };
};
