import { GetRepository } from "@/core/domain/GetRepository";
import { request } from "@/core/infra/request";
import { dispatch, store } from "@/core/infra/store";

export const getRepository: GetRepository = (fullName) =>
  new Promise((resolve) => {
    const state = store.getState().repository;
    if (state.repository.full_name === fullName) resolve(state.repository);

    Promise.all([
      request(`${import.meta.env.VITE_API_URL}/repos/${fullName}`),
      request(`${import.meta.env.VITE_API_URL}/repos/${fullName}/readme`),
    ])
      .then((response) => Promise.all(response.map((data) => data.json())))
      .then(([data, readme]) => {
        const repository = {
          ...data,
          readme: readme.content ? atob(readme.content) : "",
        };
        dispatch.repository(repository);
        resolve(repository);
      });
  });
