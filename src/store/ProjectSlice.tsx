import { createSlice } from "@reduxjs/toolkit";

interface Project {
  title: string;
  description: string;
  open_positions: string[];
  link_to_repo: string;
}

interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    projectAdded(state, action) {
      state.projects.push(action.payload);
    },
  },
});
