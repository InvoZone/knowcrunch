import { configureStore } from "@reduxjs/toolkit";
import loading from "../store/slices/loading";

export const store = configureStore({
    reducer: {
        loading,
        // Add your reducers here
        // yourReducer: yourReducer,
    },
});
