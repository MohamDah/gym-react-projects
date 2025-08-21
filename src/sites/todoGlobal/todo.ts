import { createSlice } from "@reduxjs/toolkit";
import type { TodoItem } from "./todoStore";

const todoSlice = createSlice({
  name: "todos",
  initialState: { value: [] as TodoItem[] },
  reducers: {
    toggleCheckTodo: (state, action) => {
      state.value = state.value.map(i => ({
        ...i,
        checked: i.id === action.payload ? !i.checked : i.checked
      }));
    },
    deleteTodo: (state, action) => {
      state.value = state.value.filter(i => i.id !== action.payload);
    },
    addTodo: (state, action) => {
      const todoItem: TodoItem = {
        id: crypto.randomUUID(),
        content: action.payload,
        checked: false
      };
      state.value = [todoItem, ...state.value];
    }
  }
});

export default todoSlice.reducer

export const { addTodo, deleteTodo, toggleCheckTodo } = todoSlice.actions;