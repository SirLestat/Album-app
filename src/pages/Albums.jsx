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
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { useNavigate } from "react-router-dom";
import profileIcon from "../assets/cheems.jpg";

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
    <Container>
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

          <Grid
            xs={12}
            sx={{
              border: "solid",
              borderColor: theme.palette.customColors.border,
              height: "150px",
              display: "flex",
              alignItems: "center",
              borderRadius: 3,
            }}
          >
            <Grid
              container
              spacing={2}
              sx={{
                paddingLeft: "25px",
                alignItems: "center",
                direction: "row",
              }}
            >
              <img
                src={profileIcon}
                alt="profile image"
                style={{ borderRadius: "50%", width: "80px", height: "80px" }}
              />
              <Grid>
                <Typography
                  sx={{
                    color: "#FFF",
                    fontSize: "22px",
                    fontWeight: 700,
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  sx={{
                    color: "#FFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  @{username}
                </Typography>
                <Typography sx={{ display: "flex", alignItems: "center" }}>
                  <EmailOutlinedIcon sx={{ mr: 1, fontSize: "20px" }} /> {email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
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
                  onClick={() => navigate(`${albumId}/photos`)}
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
    </Container>
  );
};

export default Albums;
