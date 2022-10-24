import { Grid, Button } from "@mui/material";
import "../css/collab.css";
import { useState } from "react";
import AddProjectDialog from "../components/AddProjectDialog";

export default function Collaborate() {
  const [open, setOpen] = useState(false);
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
    </Grid>
  );
}
