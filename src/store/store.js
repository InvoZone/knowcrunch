import { configureStore } from "@reduxjs/toolkit";
import loading from "../store/slices/loading";
import course from "../store/slices/course";
import auth from "./slices/auth";

export const store = configureStore({
    reducer: {
        loading,
        course,
        auth,
        // Add your reducers here
        // yourReducer: yourReducer,
    },
});
