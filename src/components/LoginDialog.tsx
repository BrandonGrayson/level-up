import { Grid, Box, Typography, Input, Button } from "@mui/material";
import { useState } from "react";
import "../css/loginDialog.css";

export default function LoginDialog() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.access_token) {
    }

    console.log(data);
  };
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
            onChange={(event) => setUserName(event.target.value)}
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
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              marginTop: "30px",
              width: "90%",
              marginRight: "auto",
              marginLeft: "auto",
            }}
            onClick={handleLogin}
          >
            Sign In
          </Button>
        </Box>
      </Grid>
    </>
  );
}
