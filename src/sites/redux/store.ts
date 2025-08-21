import userReducer from './features/user'
import themeReducer from './features/theme'
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer
  }
});

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']> 
export type AppDispatch = AppStore['dispatch']
