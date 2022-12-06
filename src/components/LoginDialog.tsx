import { Grid, Box, Typography, Input, Button } from "@mui/material";
import "../css/loginDialog.css";

export default function LoginDialog() {
  return (
    <>
      <Grid item xs={12}>
        <Box className="login-title-container">
          <Typography sx={{ color: "white" }} variant="h5">
            Sign in to Level Up
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Box className="login-container">
          <Typography
            sx={{
              color: "white",
              marginBottom: "10px",
              marginLeft: "20px",
              marginTop: "20px",
            }}
            variant="body1"
          >
            Email Address
          </Typography>
          <Input
            sx={{
              backgroundColor: "white",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Typography
            sx={{
              color: "white",
              marginBottom: "10px",
              marginLeft: "20px",
              marginTop: "20px",
            }}
          >
            Password
          </Typography>
          <Input
            sx={{
              backgroundColor: "white",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          {/* <TextField
            sx={{ backgroundColor: "white", width: "80%" }}
            color="success"
            label="email"
            variant="filled"
          />
          <TextField label="password" variant="outlined" /> */}
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: "30px",
              width: "90%",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            Sign In
          </Button>
        </Box>
      </Grid>
    </>
  );
}
