import { Card, CardContent, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";


export const AlbumCard = ({ item, userId }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }}>
      <Card
        sx={{
          background: "linear-gradient(135deg, rgba(42, 157, 143, 0.7) 0%, rgba(17, 94, 89, 0.6) 50%, rgba(19, 78, 74, 0.5) 100%)",
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
          onClick={() => navigate(`/${userId}/albums/photos/${item.id}`)}
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
};
