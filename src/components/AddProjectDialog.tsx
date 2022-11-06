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
import CloseIcon from "@mui/icons-material/Close";
import { addNewProject } from "../store/ProjectSlice";
import { useAppDispatch } from "../hooks/hooks";

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
  const [open_positions, setOpenPositions] = useState<string[]>([]);
  const [link_to_repo, setLinkToRepo] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const dispatch = useAppDispatch();

  const saveProject = async () => {
    try {
      await dispatch(
        addNewProject({ title, description, open_positions, link_to_repo })
      ).unwrap();
      setTitle("");
      setDescription("");
      setLinkToRepo("");
      setPosition("");
      setOpenPositions([]);
      handleClose();
    } catch (error) {
      console.error("Failed to save new Project", error);
    }
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
            value={link_to_repo}
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
                setOpenPositions([...open_positions, position]);
                setPosition("");
              }}
              sx={{ width: "100px", marginTop: "10px" }}
            >
              <Typography sx={{ fontSize: "10px" }}>Add Skill</Typography>
            </Button>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {open_positions.map((openPosition, index) => (
            <Box key={index} sx={{ display: "flex", flexDirection: "row" }}>
              <Button>
                <>
                  <CloseIcon
                    onClick={() =>
                      setOpenPositions(
                        open_positions.filter(
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
