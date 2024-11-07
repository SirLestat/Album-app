import { Box, Button, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";

export const User = ({ user }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleAlbumsClick = () => {
    navigate(`/${user.id}/albums`, {
      state: { username: user.username, email: user.email, name: user.name },
    });
  };

  return (
    <Grid
      size={12}
      sx={{
        alignItems: "center",
        backgroundColor: theme.palette.customColors.itemBackground,
        borderRadius: 3,
        borderStyle: "solid",
        borderColor: theme.palette.customColors.border,
        padding: "20px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img
          src="src\assets\cheems.jpg"
          alt="profile image"
          style={{ borderRadius: "50%", width: "80px", height: "80px" }}
        />

        <Typography
          sx={{
            color: "#FFF",
            marginLeft: "20px",
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          {user.username}
        </Typography>
      </Box>

      <Grid sx={{ color: "#FFF", marginTop: "10px" }}>
        <Typography>
          <strong>Usuario:</strong> {user.name}
        </Typography>
        <Typography>
          <strong>Email:</strong> {user.email}
        </Typography>
      </Grid>

      <Grid container justifyContent={"flex-end"}>
        <Button
          onClick={handleAlbumsClick}
          sx={{
            backgroundColor: theme.palette.customColors.button,
            color: "#FFF",
            "&:hover": {
              backgroundColor: theme.palette.customColors.buttonHover,
            },
            textTransform: "none",
          }}
        >
          Álbumes
          {/* <Link to="/albums" style={{textDecoration:"none", color:"white"}}>Albumes</Link> */}
        </Button>
      </Grid>
    </Grid>
  );
};
