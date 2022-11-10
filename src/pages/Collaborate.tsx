import {
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import "../css/collab.css";
import { useState, useEffect, useRef } from "react";
import AddProjectDialog from "../components/AddProjectDialog";
import { useSelector } from "react-redux";
import { fetchProjects, Project } from "../store/ProjectSlice";
import { selectAllProjects } from "../store/ProjectSlice";
import { RootState } from "../store/store";
import { useAppDispatch } from "../hooks/hooks";

export default function Collaborate() {
  const [open, setOpen] = useState(false);
  const dataFetchedRef = useRef(false);

  const dispatch = useAppDispatch();
  const projectList = useSelector(selectAllProjects);
  const projectStatus = useSelector(
    (state: RootState) => state.projects.status
  );

  useEffect(() => {
    if (projectStatus === "idle" && dataFetchedRef.current === false) {
      dispatch(fetchProjects());
      dataFetchedRef.current = true;
    }
  }, [projectStatus, dispatch]);

  console.log("project List", projectList);

  const renderedProjects = projectList.map((project: Project, index) => (
    // <div key={index}>
    //   <p className="project-info">{project.title}</p>
    // </div>
    <Card sx={{ width: "400px", backgroundColor: "#eee" }}>
      <CardContent>
        <Typography variant="h5">{project.title}</Typography>
        <Typography variant="body2">{project.description}</Typography>
        <Typography variant="body2">{project.link_to_repo}</Typography>
        {project.open_positions.map((position) => (
          <Typography> {position}</Typography>
        ))}
      </CardContent>
    </Card>
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
          justifyContent: "center",
          marginTop: "20px",
          color: "white",
          fontFamily: "Playfair Display",
        }}
      >
        <h3>Projects</h3>
      </div>
      {renderedProjects}
    </Grid>
  );
}
