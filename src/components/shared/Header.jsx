import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import albumIcon from "../../assets/photo(1).png";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import CollectionsOutlinedIcon from "@mui/icons-material/CollectionsOutlined";
import PhotoCameraOutlinedIcon from "@mui/icons-material/PhotoCameraOutlined";
export const Header = () => {
  return (
    <Grid
      sx={{
        background:
          "linear-gradient(90deg, rgba(19, 78, 74, 0.9) 0%, rgba(17, 94, 89, 0.6) 50%, rgba(42, 157, 143, 0.3) 100%)",
        width: "100%",
        height: { xs: "auto", sm: "auto", md: "130px" },
        display: "flex",
        justifyContent: "center",
        borderBottomRightRadius: "12px",
        borderBottomLeftRadius: "12px",
        flexDirection: "column",
        padding: { xs: "10px" },
      }}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          paddingLeft: { xs: "0px", sm: "0px", md: "40px", lg: "40px" },
          gap: { xs: "0px", sm: "0px", md: "20px", lg: "20px", xl: "20px" },
          flexDirection: { xs: "column", md: "row", lg: "row" },
        }}
      >
        <img src={albumIcon} alt="albumIcon" style={{ width: "80px" }} />

        <Grid
          sx={{
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
            },
            display: "flex",
            gap: { xs: "5px", sm: "5px", md: "20px" },
          }}
        >
          <Box>
            <Box sx={{ paddingBottom: "5px" }}>
              <Typography variant="h5">Album App</Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                  md: "row",
                  lg: "row",
                  xl: "row",
                },
                gap: "10px",
              }}
            >
              <Typography
                sx={{ display: "flex", justifyContent: "center", gap: "5px" }}
              >
                <PersonOutlineOutlinedIcon />
                10 Usuarios
              </Typography>
              <Typography
                sx={{ display: "flex", justifyContent: "center", gap: "5px" }}
              >
                <CollectionsOutlinedIcon />
                100 Álbumes
              </Typography>
              <Typography
                sx={{ display: "flex", justifyContent: "center", gap: "5px" }}
              >
                <PhotoCameraOutlinedIcon />
                5K Fotos
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
