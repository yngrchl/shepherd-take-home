import React, { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const redirect = (id) => {
    navigate(`/${id}`);
  };

  return (
    <Box>
      <h1>Welcome to Shepherd Lite!</h1>
      <p>Please select an application below to get started.</p>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ gap: "1rem" }}
        mt={5}
      >
        <Button variant="contained" onClick={() => redirect(0)}>
          Company Application
        </Button>
        <Button variant="contained" onClick={() => redirect(1)}>Employee Application</Button>
        <Button variant="contained" onClick={() => redirect(2)}>Auto Application</Button>
      </Box>
    </Box>
  );
};

export default Home;
