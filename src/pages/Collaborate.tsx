import { Grid, Button } from "@mui/material";
import "../css/collab.css";
import React from "react";

export default function Collaborate() {
  return (
    <Grid item xs={12}>
      <div className="collab-box">
        <p className="collab-txt">Add a project to collab with other dev's.</p>
        <Button id="add-proj" sx={{ marginTop: "20px" }} variant="contained">
          Add Project
        </Button>
      </div>
    </Grid>
  );
}
