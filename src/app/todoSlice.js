import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, todo, description } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.todo = todo;
        item.description = description;
      }
    },
    toggleDone: (state, action) => {
      state.items = state.items.map((item) =>
       ( item.id === action.payload ? { ...item, done: !item.done } : item)
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, toggleDone } = todoSlice.actions;

export default todoSlice.reducer;
