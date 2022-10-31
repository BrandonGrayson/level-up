import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  DialogActions,
  Typography,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { projectAdded } from "../store/ProjectSlice";
import CloseIcon from "@mui/icons-material/Close";
import { addNewProject } from "../store/ProjectSlice";

export default function AddProjectDialog({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [position, setPosition] = useState("");
  const [openPositions, setOpenPositions] = useState<string[]>([]);
  const [linkToRepo, setLinkToRepo] = useState("");
  //   const dispatch = useDispatch<AppDispatch>();
  const handleClose = () => {
    setOpen(false);
  };
  // {title, description, position, openPositions, linkToRepo}
  const saveProject = async () => {
    try {
      // await dispatch(addNewProject()).unwrap()
      setTitle("");
      setDescription("");
      setLinkToRepo("");
      setPosition("");
      setOpenPositions([]);
      handleClose();
    } catch {}
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth={true}>
      <DialogTitle>Create a Project</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="Title">Title</label>
          <input
            type="text"
            className="create-project-name"
            name="name"
            placeholder="Title for project"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            className="create-project-name"
            name="Description"
            placeholder="Describe the project"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <label>Repository Link</label>
          <input
            type="text"
            className="create-project-name"
            name="Repository Link"
            onChange={(e) => setLinkToRepo(e.target.value)}
            value={linkToRepo}
            placeholder="Link to Repo"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginBottom: "40px",
            }}
          >
            <label htmlFor="Open Positions">Open Positions</label>
            <input
              type="text"
              className="create-project-name"
              name="Open Positions"
              onChange={(e) => {
                setPosition(e.target.value);
              }}
              value={position}
              placeholder="What skills does the project need?"
            />
            <Button
              variant="contained"
              onClick={() => {
                setOpenPositions([...openPositions, position]);
                setPosition("");
              }}
              sx={{ width: "100px", marginTop: "10px" }}
            >
              <Typography sx={{ fontSize: "10px" }}>Add Skill</Typography>
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {openPositions.map((openPosition, index) => (
            <Box key={index} sx={{ display: "flex", flexDirection: "row" }}>
              <Button>
                <>
                  <CloseIcon
                    onClick={() =>
                      setOpenPositions(
                        openPositions.filter(
                          (position) => position !== openPosition
                        )
                      )
                    }
                  />
                  {openPosition}
                </>
              </Button>
            </Box>
          ))}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={saveProject}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}
