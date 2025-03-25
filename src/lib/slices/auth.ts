// ** Redux Imports
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define the shape of the authentication state
interface AuthState {
  isLoggedIn: boolean;
  loginPopup: boolean;
  signupPopup: boolean;
  forgotPopup: boolean;
}

// Initial state for authentication
export const initialState: AuthState = {
  isLoggedIn: false, // Tracks whether user is currently logged in
  loginPopup: false,
  signupPopup: false,
  forgotPopup: false
};

/**
 * Auth slice handles authentication state management
 * Contains reducers for logging in and out
 */
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    logout: (state: AuthState) => {
      state.isLoggedIn = false;
    },
    openLoginSignUpPopup: (state: AuthState, action: PayloadAction<Partial<AuthState>>) => {
      state.loginPopup = action.payload.loginPopup || false;
      state.signupPopup = action.payload.signupPopup || false;
      state.forgotPopup = action.payload.forgotPopup || false;
    },
    openForgotPopup: (state: AuthState, action: PayloadAction<Partial<AuthState>>) => {
      state.loginPopup = action.payload.loginPopup || false;
      state.forgotPopup = action.payload.forgotPopup || false;
    }
  }
});

// Export actions to be used by components
export const { login, logout, openLoginSignUpPopup, openForgotPopup } = authSlice.actions;

// Export reducer to be included in store
export default authSlice.reducer;
