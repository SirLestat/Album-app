import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { getPhotos } from "../helpers/getPhotos";

export const Photos = () => {
  const [photos, setPhotos] = useState([]);

  return (
    <Container>
      <Grid container sx={{ border: "solid", borderColor: "green" }}>
        <Typography variant="h1">dasdasdsadqw</Typography>
      </Grid>
    </Container>
  );
};
