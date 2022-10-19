import {
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Box,
  DialogActions,
} from "@mui/material";
import "../css/collab.css";
import React, { useState } from "react";

export default function Collaborate() {
  const [open, setOpen] = useState(true);

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
              />
              <TextField
                id="outlined-basic"
                label="Description"
                variant="outlined"
                sx={{ marginBottom: "10px", width: "80%" }}
              />
              <TextField
                id="outlined-basic"
                label="Repository Link"
                variant="outlined"
                sx={{ marginBottom: "10px", width: "80%" }}
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
                />
                <Button sx={{ marginLeft: "10px" }}>Add</Button>
              </Box>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Subscribe</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Grid>
  );
}
