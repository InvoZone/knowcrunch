import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  loginPopup: boolean;
  signupPopup: boolean;
  forgotPopup: boolean;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  loginPopup: false,
  signupPopup: false,
  forgotPopup: false
};

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

export const { login, logout, openLoginSignUpPopup, openForgotPopup } = authSlice.actions;

export default authSlice.reducer;
