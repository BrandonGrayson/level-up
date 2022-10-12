import { Box, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "10%",
          marginTop: "30px",
          marginRight: "10%",
        }}
      >
        <Typography sx={{ color: "white" }}>Level Up</Typography>
        <Typography sx={{ color: "white" }}>Collaborate</Typography>
      </Box>
    </>
  );
}
