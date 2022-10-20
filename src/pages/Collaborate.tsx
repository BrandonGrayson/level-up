import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  DialogActions,
  Typography,
} from "@mui/material";
import "../css/collab.css";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectAdded } from "../store/ProjectSlice";

export default function Collaborate() {
  const [open, setOpen] = useState(true);
  const { projects } = useSelector((state: any) => state.projects);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState("");
  const [open_positions, setOpenPositions] = useState<string[]>([]);
  const [linkToRepo, setLinkToRepo] = useState("");
  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Grid item xs={12}>
      <div className="collab-box">
        <p className="collab-txt">Add a project to collab with other dev's.</p>
        <Button id="add-proj" sx={{ marginTop: "20px" }} variant="contained">
          Add Project
        </Button>
        <Dialog open={open} onClose={handleClose} fullWidth={true}>
          <DialogTitle>Add a Project</DialogTitle>
          <DialogContent>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                sx={{ marginBottom: "10px", marginTop: "10px", width: "80%" }}
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                sx={{ marginBottom: "10px", width: "80%" }}
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <TextField
                id="outlined-basic"
                label="Repository Link"
                variant="outlined"
                sx={{ marginBottom: "10px", width: "80%" }}
                onChange={(e) => setLinkToRepo(e.target.value)}
                value={linkToRepo}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  marginBottom: "40px",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Open Positions"
                  variant="outlined"
                  sx={{ width: "80%" }}
                  onChange={(e) => setPosition(e.target.value)}
                />
                <Button
                  onClick={() => {
                    setOpenPositions([...open_positions, position]);
                    setPosition("");
                  }}
                  sx={{ marginLeft: "10px" }}
                >
                  Add
                </Button>
              </Box>
            </Box>
            {open_positions.map((position) => (
              <Box>
                <p>x</p>
                <Typography>{position}</Typography>
              </Box>
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button
              onClick={() =>
                dispatch(
                  projectAdded({
                    title,
                    description,
                    linkToRepo,
                    open_positions,
                  })
                )
              }
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Grid>
  );
}
