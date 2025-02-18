// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
    filterOpen: false,
    selectedFilters: [],
};

export const classroomCourseSlice = createSlice({
    name: "classroomCourses",
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
export const { filterStatus, selectFilter } = classroomCourseSlice.actions;

export default classroomCourseSlice.reducer;
