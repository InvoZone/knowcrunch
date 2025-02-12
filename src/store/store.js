import { configureStore } from "@reduxjs/toolkit";
import loading from "../store/slices/loading";
import course from "../store/slices/course";

export const store = configureStore({
    reducer: {
        loading,
        course
        // Add your reducers here
        // yourReducer: yourReducer,
    },
});
