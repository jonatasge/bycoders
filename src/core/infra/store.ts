import { configureStore } from "@reduxjs/toolkit";

import {
  repositoriesDispatch,
  repositoriesReducer,
} from "./useCases/store/repositories.slice";
import {
  repositoryDispatch,
  repositoryReducer,
} from "./useCases/store/repository.slice";
import { userDispatch, userReducer } from "./useCases/store/user.slice";

export const store = configureStore({
  reducer: {
    repositories: repositoriesReducer,
    repository: repositoryReducer,
    user: userReducer,
  },
});

export const dispatch = {
  repositories: repositoriesDispatch(store),
  repository: repositoryDispatch(store),
  user: userDispatch(store),
};
