import { configureStore } from "@reduxjs/toolkit";
import loading from "../store/slices/loading";
import course from "../store/slices/course";
import auth from "./slices/auth";
import classroomCourses from "./slices/classroomCourses";

export const store = configureStore({
    reducer: {
        loading,
        course,
        auth,
        classroomCourses
        // Add your reducers here
        // yourReducer: yourReducer,
    },
});
