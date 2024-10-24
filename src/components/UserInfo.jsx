import Grid from "@mui/material/Grid2";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const UserInfo = ({ name, username, email, profileIcon }) => {
  const theme = useTheme();
  
  return (
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
  );
};
