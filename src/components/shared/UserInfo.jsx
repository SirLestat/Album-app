import Grid from "@mui/material/Grid2";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Typography, Box, Skeleton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { getUserById } from "../../services/users.service";
import { gravatar } from "../../helpers/gravatar";

export const UserInfo = ({ userId, albumId = "" }) => {
  const theme = useTheme();
  const [user, setUser] = useState({ name: "", username: "", email: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUserById(userId);
      setUser(data);
      setIsLoading(false);
    };
    fetchData();
  }, [userId]);

  return (
    <Grid
      sx={{
        border: "1px solid",
        borderColor: theme.palette.customColors.border,
        borderRadius: "12px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
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
          {isLoading ? (
            <Skeleton variant="circular" width={80} height={80} />
          ) : (
            <img
              src={gravatar(user.email)}
              alt="profile image"
              style={{ borderRadius: "50%", width: "70px", height: "70px" }}
            />
          )}
        </Grid>
        <Grid>
          {isLoading ? (
            <Skeleton width={180} />
          ) : (
            <Typography
              sx={{
                color: "#FFF",
                fontSize: "22px",
                fontWeight: 700,
              }}
            >
              {user.name}
            </Typography>
          )}

          {isLoading ? (
            <Skeleton width="100%" />
          ) : (
            <Typography
              sx={{
                color: "#FFF",
                display: "flex",
                alignItems: "center",
              }}
            >
              @{user.username}
            </Typography>
          )}

          {isLoading ? (
            <Skeleton width="100%" />
          ) : (
            <Typography sx={{ display: "flex", alignItems: "center" }}>
              <EmailOutlinedIcon sx={{ mr: 1, fontSize: "20px" }} />{" "}
              {user.email}
            </Typography>
          )}
        </Grid>
      </Grid>

      {!!albumId && (
        <Box
          sx={{
            width: "100%",
            background:
              "linear-gradient(90deg, rgba(19, 78, 74, 0.3) 0%, rgba(17, 94, 89, 0.5) 50%, rgba(42, 157, 143, 0.5) 100%)",
            p: 1,
            borderTop: "1px solid",
            borderColor: theme.palette.customColors.border,
            display: "flex",
            justifyContent: "center",
            borderBottomLeftRadius: 11,
            borderBottomRightRadius: 11,
          }}
        >
          {isLoading ? (
            <Skeleton width="130px" height={32} sx={{ margin: "0 auto" }} />
          ) : (
            <Typography align="center" sx={{ fontSize: "22px" }}>
              Álbum {albumId}
            </Typography>
          )}
        </Box>
      )}
    </Grid>
  );
};
