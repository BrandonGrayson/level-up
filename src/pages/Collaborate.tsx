import { Grid, Button } from "@mui/material";
import "../css/collab.css";
import { useState } from "react";
import AddProjectDialog from "../components/AddProjectDialog";
import { useSelector } from "react-redux";
import { Project } from "../store/ProjectSlice";
import { selectAllProjects } from "../store/ProjectSlice";

export default function Collaborate() {
  const [open, setOpen] = useState(false);
  const projectList = useSelector(selectAllProjects);

  console.log("state from Collaborate useSelector");

  const renderedProjects = projectList.map((project: Project, index) => (
    <div key={index}>
      <p className="project-info">{project.title}</p>
    </div>
  ));
  return (
    <Grid item xs={12}>
      <div className="collab-box">
        <p className="collab-txt">Add a project to collab with other dev's.</p>
        <Button
          onClick={() => setOpen(true)}
          id="add-proj"
          sx={{ marginTop: "20px" }}
          variant="contained"
        >
          Add Project
        </Button>
        <AddProjectDialog open={open} setOpen={setOpen} />
      </div>
      <div
        style={{
          display: "flex",
          backgroundColor: "red",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <h3>Projects</h3>
      </div>
      {renderedProjects}
    </Grid>
  );
}
