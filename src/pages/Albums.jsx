import { Link, useParams } from "react-router-dom";
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

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item size={12}>
          <Button
            variant="contained"
            startIcon={<ArrowBackIosNewRoundedIcon />}
          >
            <Link to="/">Regresar</Link>
          </Button>

          

          <Grid
            item
            size={12}
            sx={{
              border: "solid",
              borderColor: "green",
              
            }}
          >
            <Typography>sdfsdfsdfsd</Typography>
          </Grid>
        </Grid>

        {albums.map((item) => {
          return (
            <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={item.id}>
              <Card
                sx={{
                  backgroundColor: theme.palette.customColors.itemBackground,
                  border: "solid",
                  borderColor: theme.palette.customColors.border,
                  borderRadius: 2,
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
