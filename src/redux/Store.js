import { configureStore } from "@reduxjs/toolkit";
import habitReducer from './features/HabitSlice'
//Redux store holding the state.
const store=configureStore({
  reducer: {
    habits: habitReducer,
  },
});
export default store;