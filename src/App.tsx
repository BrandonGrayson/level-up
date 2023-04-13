import "./App.css";
import { Grid } from "@mui/material";
import Navbar from "./components/Navbar";
import LoginDialog from "./components/LoginDialog";

function App() {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Navbar />
      </Grid>
      <LoginDialog />
    </Grid>
  );
}

export default App;
