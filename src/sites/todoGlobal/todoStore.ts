import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, useStore, type TypedUseSelectorHook } from "react-redux";
import todoSlice from "./todo";

export type TodoItem = {
  id: string,
  content: string,
  checked: boolean;
};

export const todoStore = configureStore({
  reducer: { todos: todoSlice }
});


export type AppStore = typeof todoStore // from the configureStore return
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']


export const useTodoDispatch: () => AppDispatch = useDispatch;
export const useTodoSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTodoStore: () => AppStore = useStore;

