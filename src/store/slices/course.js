// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    filterOpen: false,
    selectedFilters: [],
};

export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        filterStatus: (state, { payload }) => {
            state.filterOpen = payload;
        },
        selectFilter: (state, { payload }) => {
            state.selectedFilters = payload;
        },
    },
});
export const { filterStatus, selectFilter } = courseSlice.actions;

export default courseSlice.reducer;
