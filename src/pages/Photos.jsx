import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState, useEffect } from "react";
import { getPhotos } from "../helpers/getPhotos";
import { useLocation } from "react-router-dom";
import { CustomUserInfo } from "../components/CustomUserInfo";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const location = useLocation();
  const { username, email, name, profileIcon, userId, itemId } =
    location.state || {};
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPhotos(itemId);
      setPhotos(data);
    };
    fetchData();
  }, [itemId]);

  return (
    <Container>
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <Button
            onClick={() =>
              navigate(`/${userId}/albums`, {
                state: { username, email, name, profileIcon, userId },
              })
            }
            variant="contained"
            startIcon={<ArrowBackIosNewRoundedIcon />}
            sx={{
              backgroundColor: theme.palette.customColors.button,
              textTransform: "none",
              marginTop: "15px",
              marginBottom: "15px",
              "&:hover": {
                backgroundColor: theme.palette.customColors.buttonHover,
              },
            }}
          >
            Regresar
          </Button>
        </Grid>
      </Grid>
      <CustomUserInfo
        username={username}
        email={email}
        name={name}
        profileIcon={profileIcon}
        itemId={itemId}
      />

      <Grid container spacing={2}>
        {photos.map((photo) => (
          <Grid xs={2}  lg={6}key={photo.id}> 
            
              <img
                src={photo.thumbnailUrl}
                alt={`thumbnail${photo.id}`}
                style={{ 
                  width: "100%", 
                  height: "100%", 
                  borderRadius: "8px" 
                }}
              />
            
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
