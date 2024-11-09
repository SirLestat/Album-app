import { getPhotos } from "../../../services/photos.service";
import { useState, useEffect } from "react";
import { PhotoCard } from "./PhotoCard";
import Grid from "@mui/material/Grid2";

export const PhotoList = ({ setModalData, albumId }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPhotos(albumId);
      setPhotos(data);
    };
    fetchData();
  }, [albumId]);
  return (
    <Grid container spacing={2} sx={{ mt: "15px", mb: "15px" }}>
      {photos.map((photo) => (
        <Grid
          size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
          key={photo.id}
          sx={{
            transition: "transform 0.1s ease-in-out, filter 0.1s ease-in-out",
            "&:hover": {
              borderRadius: "12px",
              transform: "scale(1.05)",
              filter: "brightness(1.1)",
            },
          }}
        >
          <PhotoCard {...photo} setModalData={setModalData} />
        </Grid>
      ))}
    </Grid>
  );
};
