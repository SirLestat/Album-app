import Grid from "@mui/material/Grid2";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/users.service";
import { gravatar } from "../../helpers/gravatar";

export const UserInfo = ({ userId, albumId = "" }) => {
  const theme = useTheme();
  const [user, setUser] = useState({ name: "", username: "", email: "" });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserById(userId);

      setUser(data);
    };
    fetchData();
  }, []);

  if (user.email)
    return (
      <Grid
        sx={{
          border: "solid",
          borderColor: theme.palette.customColors.border,
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
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
          <Grid>
            <img
              src={gravatar(user.email)}
              alt="profile image"
              style={{ borderRadius: "50%", width: "80px", height: "80px" }}
            />
          </Grid>
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
              <EmailOutlinedIcon sx={{ mr: 1, fontSize: "20px" }} />{" "}
              {user.email}
            </Typography>
          </Grid>
        </Grid>

        {!!albumId && (
          <Box
            sx={{
              width: "100%",
              bgcolor: "rgba(255, 255, 255, 0.1)",
              p: 1,
              borderTop: "solid",
              borderColor: theme.palette.customColors.border,
            }}
          >
            <Typography align="center" sx={{ fontSize: "22px" }}>
              Albúm {albumId}
            </Typography>
          </Box>
        )}
      </Grid>
    );
};
