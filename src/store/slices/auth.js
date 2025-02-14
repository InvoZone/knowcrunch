// ** Redux Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state for authentication
export const initialState = {
    isLoggedIn: false, // Tracks whether user is currently logged in
    loginPopup: false,
    signupPopup: false
};

/**
 * Auth slice handles authentication state management
 * Contains reducers for logging in and out
 */
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Sets isLoggedIn to true when user logs in
        login: (state) => {
            state.isLoggedIn = true;
        },
        // Sets isLoggedIn to false when user logs out
        logout: (state) => {
            state.isLoggedIn = false;
        },
        openLoginSignUpPopup: (state, { payload }) => {
            state.loginPopup = payload?.loginPopup || false;
            state.signupPopup = payload?.signupPopup || false;
        }
    },
});

// Export actions to be used by components
export const { login, logout, openLoginSignUpPopup } = authSlice.actions;

// Export reducer to be included in store
export default authSlice.reducer;
