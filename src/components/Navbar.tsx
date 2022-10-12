import { Box, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
          width: "100%",
          backgroundColor: "red",
        }}
      >
        <Typography sx={{ color: "white", marginLeft: "10%" }}>
          Level Up
        </Typography>
        <Typography sx={{ color: "white", marginRight: "10%" }}>
          Collaborate
        </Typography>
      </Box>
    </>
  );
}
