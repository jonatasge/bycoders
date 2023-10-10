import { createSlice } from "@reduxjs/toolkit";

import { StoreDispatchFactory } from "@/core/data/models/StoreDispatch";
import { Store } from "@/core/infra/models/Store";
import { User } from "@/core/models/User";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {} as User,
  },
  reducers: {
    userSetAction: (state, action) => {
      state.user = action.payload;
    },
  },
});

const { userSetAction } = userSlice.actions;

export const userReducer = userSlice.reducer;

export const userDispatch: StoreDispatchFactory<Store, Partial<User>> =
  (store) => (data) =>
    store.dispatch(userSetAction(data));
