// ** Redux Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
  },
});
export const { setLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
