import { configureStore } from "@reduxjs/toolkit";

import {
  repositoriesDispatch,
  repositoriesReducer,
} from "./useCases/store/repositories.slice";
import { userDispatch, userReducer } from "./useCases/store/user.slice";

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
    user: userReducer,
  },
});

export const dispatch = {
  repositories: repositoriesDispatch(store),
  user: userDispatch(store),
};
