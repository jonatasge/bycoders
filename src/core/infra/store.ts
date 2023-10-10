import { configureStore } from "@reduxjs/toolkit";

import { userDispatch, userReducer } from "./useCases/store/user.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export const dispatch = {
  user: userDispatch(store),
};
