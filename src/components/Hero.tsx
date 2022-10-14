import { Grid, TextField, Button } from "@mui/material";
import "../css/Hero.css";

// button color #1976d2

export default function Hero() {
  return (
    <Grid item xs={12}>
      <div className="hero-box">
        <p className="hero-txt">Let's grow from here together.</p>
        <p className="hero-sub-txt">
          The developer platform for finding projects,
        </p>
        <p className="hero-sub-txt2">and collaborating with other developers</p>
        <div className="action-box">
          <TextField
            id="search-bar"
            label="Search"
            variant="outlined"
            color="secondary"
            sx={{ backgroundColor: "white" }}
          />
          <Button variant="contained">Search Projects</Button>
        </div>
      </div>
    </Grid>
  );
}
