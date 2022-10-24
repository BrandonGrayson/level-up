import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from './ProjectSlice';

export default configureStore({
  reducer: {
    projects: projectsReducer
  },
});
