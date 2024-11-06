import { useLocation, useParams } from "react-router-dom";
import { getAlbums } from "../helpers/getAlbums";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Container,
  Typography,
  useTheme,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";

import { useNavigate } from "react-router-dom";
import profileIcon from "../assets/cheems.jpg";
import { UserInfo } from "../components/UserInfo";

const Albums = () => {
  const location = useLocation();
  const { username, email, name } = location.state || {};
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAlbums(userId);

      setAlbums(data);
    };
    fetchData();
  }, []);

  const navigate = useNavigate();

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <Button
          onClick={() => navigate("/")}
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

        <UserInfo
          name={name}
          username={username}
          email={email}
          profileIcon={profileIcon}
          theme={theme}
        />
      </Grid>

      {albums.map((item) => {
        return (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} key={item.id}>
            <Card
              sx={{
                backgroundColor: theme.palette.customColors.itemBackground,
                border: "solid",
                borderColor: theme.palette.customColors.border,
                borderRadius: 3,
                display: "block",
                height: "100%",
                transition:
                  "transform 0.2s ease-in-out, border-color 0.2s ease-in-out",
                "&:hover": {
                  transform: "translateY(-4px)",
                  borderColor: theme.palette.customColors.button,
                },
              }}
            >
              <CardContent
                onClick={() =>
                  navigate(`/${userId}/albums/photos/${item.id}`, {
                    state: {
                      username,
                      email,
                      name,
                      profileIcon,
                      userId,
                      itemId: item.id,
                      thumbnailUrl: item.thumbnailUrl,
                    },
                  })
                }
                sx={{ cursor: "pointer" }}
              >
                <Typography variant="h5" mb="30px">
                  Albúm {item.id}
                </Typography>
                <Typography>{item.title}</Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Albums;
