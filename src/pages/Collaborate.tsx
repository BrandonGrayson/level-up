import { Grid, Button } from "@mui/material";
import "../css/collab.css";
import React from "react";

export default function Collaborate() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} lg={8}>
          <div className="collab-box">
            <p className="collab-txt">
              Add a project to collaborate with other dev's.
            </p>
            <Button sx={{ marginTop: "20px" }} variant="contained">
              Add Project
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
