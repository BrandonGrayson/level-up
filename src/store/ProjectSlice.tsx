import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Project {
  title: string;
  description: string;
  openPositions: string[];
  linkToRepo: string;
}

interface ProjectState {
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [
    {
      title: "Espn",
      description: "Sports Media App",
      openPositions: ["React"],
      linkToRepo: "Espn Link",
    },
  ],
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    projectAdded(state, action) {
      console.log(action.payload);
      state.projects.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder.addCase(addNewProject.fulfilled, (state, action) => {
      console.log("state", state);
      console.log("action payload", action.payload);
      //   state.projects.push(action.payload)
    });
  },
});

export const addNewProject = createAsyncThunk(
  "projects/addNewProject",
  async (initialProject: Project) => {
    console.log("Initial Project", initialProject);
    const response = await fetch("http://127.0.0.1:8000/projects", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify(initialProject),
    });

    console.log(response);
    return response;
  }
);

console.log("Project Slice", projectSlice);

export const { projectAdded } = projectSlice.actions;

export default projectSlice.reducer;

export const selectAllProjects = (state: RootState) => state.projects.projects;
