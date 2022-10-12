import { Grid, TextField, Box, Button } from "@mui/material";
import "../css/Hero.css";

export default function Hero() {
  return (
    <Grid item xs={12}>
      <div className="hero-box">
        <p className="hero-txt">Let's grow from here,</p>
        <p className="hero-txt">together.</p>
        <p className="hero-sub-txt">
          The developer platform for finding projects,
        </p>
        <p className="hero-sub-txt2">and collaborating with other developers</p>
        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            alignContent: "center",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            color="secondary"
            sx={{ backgroundColor: "white", width: "300px" }}
          />
          <Button className="action" variant="contained">
            Search Projects
          </Button>
        </Box>
      </div>
    </Grid>
  );
}
