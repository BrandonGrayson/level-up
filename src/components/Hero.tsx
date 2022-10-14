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
            id="outlined-basic"
            label="Search"
            variant="outlined"
            color="secondary"
            fullWidth={true}
            sx={{ backgroundColor: "white" }}
          />
        </div>
        <Button variant="contained">Search Projects</Button>
      </div>
    </Grid>
  );
}
