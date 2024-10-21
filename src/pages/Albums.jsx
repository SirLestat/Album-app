import { useParams } from "react-router-dom";
import { getAlbums } from "../helpers/getAlbums";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Container,
  Typography,
  useTheme,
  Box,
  Button,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useNavigate } from "react-router-dom";
import profileIcon from "../assets/cheems.jpg";
const Albums = () => {
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

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Button
            onClick={handleButtonClick}
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
            item
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
                  asdasd
                </Typography>
                <Typography>qqqqqqqqq</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {albums.map((item) => {
          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
              <Card
                sx={{
                  backgroundColor: theme.palette.customColors.itemBackground,
                  border: "solid",
                  borderColor: theme.palette.customColors.border,
                  borderRadius: 3,
                  display: "block",
                  height: "100%",
                }}
              >
                <CardContent>
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
