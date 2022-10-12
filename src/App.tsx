import "./App.css";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Hero />
    </Grid>
  );
}

export default App;
