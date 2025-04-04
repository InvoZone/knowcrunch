import { configureStore } from '@reduxjs/toolkit';
import auth from './slices/auth';
import course from './slices/course';

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth,
      course
    }
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
