import { createSlice } from "@reduxjs/toolkit";

import { StoreDispatchFactory } from "@/core/data/models/StoreDispatch";
import { Store } from "@/core/infra/models/Store";
import { Repository } from "@/core/models/Repository";

const repositorySlice = createSlice({
  name: "repository",
  initialState: {
    repository: {} as Repository,
  },
  reducers: {
    repositorySetAction: (state, action) => {
      state.repository = action.payload;
    },
  },
});

const { repositorySetAction } = repositorySlice.actions;

export const repositoryReducer = repositorySlice.reducer;

export const repositoryDispatch: StoreDispatchFactory<
  Store,
  Partial<Repository>[]
> = (store) => (data) => store.dispatch(repositorySetAction(data));
