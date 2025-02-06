import { getPhotos } from "../../../services/photos.service";
import { useState, useEffect } from "react";
import { PhotoCard } from "./PhotoCard";
import Grid from "@mui/material/Grid2";
import { Button, Skeleton } from "@mui/material";
import { createArray } from "../../../helpers/createArray";
import { useTheme } from "@emotion/react";
import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";

export const PhotoList = ({ setModalData, albumId }) => {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  const fetchData = async () => {
    setIsLoading(true);
    const data = await getPhotos(albumId);
    setPhotos(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [albumId]);
  return (
    <div>
      {/* <Button
        variant="contained"
        startIcon={<RefreshOutlinedIcon />}
        onClick={fetchData}
        sx={{
          color: "#FFFFFF",
          backgroundColor: theme.palette.customColors.button,
          textTransform: "none",
          marginTop: "15px",
          marginBottom: "15px",
          "&:hover": {
            backgroundColor: theme.palette.customColors.buttonHover,
          },
          borderRadius: "50px",
        }}
      >
        Actualizar Albúm
      </Button> */}
      <Grid container spacing={2} sx={{ mt: "15px", mb: "15px" }}>
        {isLoading
          ? createArray(30).map((item) => (
              <Grid
                size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                key={item}
                sx={{
                  transition:
                    "transform 0.1s ease-in-out, filter 0.1s ease-in-out",
                  "&:hover": {
                    borderRadius: "12px",
                    transform: "scale(1.05)",
                    filter: "brightness(1.1)",
                  },
                }}
              >
                <Skeleton
                  variant="rectangular"
                  sx={{
                    borderRadius: "12px",
                    width: "100%",
                    height: "178.66px",
                  }}
                />
              </Grid>
            ))
          : photos.map((photo) => (
              <Grid
                size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
                key={photo.id}
                sx={{
                  transition:
                    "transform 0.1s ease-in-out, filter 0.1s ease-in-out",
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
    </div>
  );
};
