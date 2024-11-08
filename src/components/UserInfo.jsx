import Grid from "@mui/material/Grid2";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getUserById } from "../services/users.service";
import profileIcon from "../assets/cheems.jpg";

export const UserInfo = ({ userId }) => {
  const theme = useTheme();
  const [user, setUser] = useState({ name: "", username: "", email: "" });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserById(userId);

      setUser(data);
    };
    fetchData();
  }, []);

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
            {user.name}
          </Typography>
          <Typography
            sx={{
              color: "#FFF",
              display: "flex",
              alignItems: "center",
            }}
          >
            @{user.username}
          </Typography>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <EmailOutlinedIcon sx={{ mr: 1, fontSize: "20px" }} /> {user.email}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};
