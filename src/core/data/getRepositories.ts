import { GetRepositories } from "@/core/domain/GetRepositories";
import { request } from "@/core/infra/request";
import { dispatch, store } from "@/core/infra/store";

export const getRepositories: GetRepositories = ({
  direction = "desc",
  per_page = 50,
  sort = "updated",
  username,
}) =>
  new Promise((resolve) => {
    const state = store.getState().repositories;
    if (
      state.repositories.length &&
      state.repositories[0].owner.login === username
    ) {
      resolve([...state.repositories]);
    }

    request(
      `${
        import.meta.env.VITE_API_URL
      }/users/${username}/repos?sort=${sort}&direction=${direction}&per_page=${per_page}`
    )
      .then((response) => response.json())
      .then((repositories) => {
        dispatch.repositories(repositories);
        resolve([...repositories]);
      });
  });
