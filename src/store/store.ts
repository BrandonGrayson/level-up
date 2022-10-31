import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import projectsReducer from './ProjectSlice';

const store = configureStore({
  reducer: {
    projects: projectsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 

export default store
