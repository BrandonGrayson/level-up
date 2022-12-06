import { Grid, Button, Card, CardContent, Typography } from "@mui/material";
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
    <>
      <Card
        sx={{
          backgroundColor: "#eee",
          marginTop: "10px",
          marginRight: "10px",
        }}
        key={index}
        id="card"
      >
        <CardContent>
          <Typography variant="h5">Title: {project.title}</Typography>
          <Typography variant="body2">
            Description: {project.description}
          </Typography>
          <Typography variant="body2">
            Repo Link: {project.link_to_repo}
          </Typography>
          <Typography>Open Positions:</Typography>
          <div className="open-positions-list">
            {project.open_positions.map((position, index) => (
              <Typography sx={{ marginRight: "10px" }} key={index}>
                {position}
              </Typography>
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  ));

  return (
    <>
      <Grid item xs={12}>
        <div className="collab-box">
          <p className="collab-txt">
            Add a project to collab with other dev's.
          </p>
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
      </Grid>
      <Grid item xs={12}>
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

        <div className="project-list">{renderedProjects}</div>
      </Grid>
    </>
  );
}
