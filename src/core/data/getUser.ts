import { GetUser } from "@/core/domain/GetUser";
import { request } from "@/core/infra/request";
import { dispatch, store } from "@/core/infra/store";

export const getUser: GetUser = (username: string) =>
  new Promise((resolve) => {
    const state = store.getState().user;
    if (state.user.login === username) resolve(state.user);

    request(`${import.meta.env.VITE_API_URL}/users/${username}`)
      .then((response) => response.json())
      .then((user) => {
        dispatch.user(user);
        resolve(user);
      });
  });
