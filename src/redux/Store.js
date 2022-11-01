import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './features/HabitSlice'

const store=configureStore({
  reducer: {
    habits: habitReducer,
  },
});
export default store;