import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from './ProjectSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>

export default store
