import "./App.css";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Collaborate from "./pages/Collaborate";

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <Collaborate />
      {/* <Hero /> */}
    </Grid>
  );
}

export default App;
