import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
  async (initialProject) => {
    const response = await fetch("http://127.0.0.1:8000/projects", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      body: JSON.stringify(initialProject),
    });

    return response;
  }
);

console.log("Project Slice", projectSlice);

export const { projectAdded } = projectSlice.actions;

export default projectSlice.reducer;
