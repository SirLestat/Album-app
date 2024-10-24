import { Button, Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { getPhotos } from "../helpers/getPhotos";
import { UserInfo } from "../components/UserInfo";
import { useLocation } from "react-router-dom";
import { CustomUserInfo } from "../components/CustomUserInfo";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const location = useLocation();
  const { username, email, name, profileIcon, userId } = location.state || {};
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Container>
      <Grid container>
        <Grid>
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
      />
    </Container>
  );
};
