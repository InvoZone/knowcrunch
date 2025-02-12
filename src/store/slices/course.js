// ** Redux Imports
import { courseFilters } from "@/utils/courses";
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    filterOpen: false,
    filters: courseFilters
};

export const courseSlice = createSlice({
    name: "course",
    initialState,
    reducers: {
        filterStatus: (state, { payload }) => {
            state.filterOpen = payload;
        },
    },
});
export const { filterStatus } = courseSlice.actions;

export default courseSlice.reducer;
