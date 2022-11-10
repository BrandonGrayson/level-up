import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface Project {
  id: number;
  title: string;
  description: string;
  open_positions: string[];
  link_to_repo: string;
}

export interface NewProject {
  title: string;
  description: string;
  open_positions: string[];
  link_to_repo: string;
}

interface ProjectState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  projects: Project[];
}

const initialState: ProjectState = {
  projects: [],
  status: "idle",
  error: null,
};

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    // projectAdded(state, action) {
    //   console.log("project added fired");
    //   console.log(action.payload);
    //   state.projects.push(action.payload);
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProjects.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log("Whats being added to state", action.payload);
        state.projects = state.projects.concat(action.payload);
        // return action.payload;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message!;
      });
  },
  // extraReducers(builder) {
  //   builder.addCase(addNewProject.fulfilled, (state, action) => {
  //     console.log("state", state);
  //     console.log("action payload", action.payload);
  //     //   state.projects.push(action.payload)
  //   });
  // },
});

export const fetchProjects = createAsyncThunk(
  "projects/getAllProjects",
  async () => {
    const response = await fetch("http://127.0.0.1:8000/projects", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("data from response", data.data);
    return data.data;
  }
);

export const addNewProject = createAsyncThunk(
  "projects/addNewProject",
  async (initialProject: NewProject) => {
    console.log("Initial Project", initialProject);
    const response = await fetch("http://127.0.0.1:8000/projects", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(initialProject),
    });

    const data = response.json();
    console.log("New Proj Data", data);
  }
);

console.log("Project Slice", projectSlice);

// export const { projectAdded } = projectSlice.actions;

export default projectSlice.reducer;

export const selectAllProjects = (state: RootState) => state.projects.projects;
