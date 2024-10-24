import Grid from "@mui/material/Grid2";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const CustomUserInfo = ({ name, username, email, profileIcon }) => {
  const theme = useTheme();

  return (
    
      <Box
        sx={{
          border: "solid",
          borderColor: theme.palette.customColors.border,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            padding: "25px",
            alignItems: "center",
          }}
        >
          <Grid item>
            <img
              src={profileIcon}
              alt="profile image"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            />
          </Grid>
          <Grid item xs>
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
        <Box
          sx={{
            width: "100%",
            bgcolor: "rgba(255, 255, 255, 0.1)",
            p: 1,
            borderTop: "solid",
            borderColor: theme.palette.customColors.border,
          }}
        >
          <Typography align="center">Algo</Typography>
        </Box>
      </Box>
    
  );
};
