import { createSlice } from "@reduxjs/toolkit";

import { StoreDispatchFactory } from "@/core/data/models/StoreDispatch";
import { Store } from "@/core/infra/models/Store";
import { Repository } from "@/core/models/Repository";

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState: {
    repositories: [] as Repository[],
  },
  reducers: {
    repositoriesSetAction: (state, action) => {
      state.repositories = action.payload;
    },
  },
});

const { repositoriesSetAction } = repositoriesSlice.actions;

export const repositoriesReducer = repositoriesSlice.reducer;

export const repositoriesDispatch: StoreDispatchFactory<
  Store,
  Partial<Repository>[]
> = (store) => (data) => store.dispatch(repositoriesSetAction(data));
