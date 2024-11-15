import { Box, Button, Typography, useTheme, Skeleton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { gravatar } from "../../helpers/gravatar";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";

export const User = ({ user }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleAlbumsClick = () => {
    navigate(`/${user.id}/albums`);
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        backgroundColor: theme.palette.customColors.itemBackground,
        borderRadius: 3,
        border: " 1px solid",
        borderColor: theme.palette.customColors.border,
        padding: "40px",
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexGrow: 1,
          gap: "20px",
        }}
      >
        <img
          src={gravatar(user.email)}
          alt="profile image"
          style={{ borderRadius: "50%", width: "70px", height: "70px" }}
        />
        <Box>
          <Typography
            sx={{
              color: "#FFF",
              fontSize: "22px",
              fontWeight: 700,
              marginBottom: "5px",
            }}
          >
            {user.username}
          </Typography>

          <Box sx={{ display: "flex", gap: "40px" }}>
            <Typography
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <PersonOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
              {user.name}
            </Typography>

            <Typography
              sx={{ display: "flex", alignItems: "center", gap: "5px" }}
            >
              <EmailOutlinedIcon sx={{ fontSize: "20px" }} />
              {user.email}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Button
        onClick={handleAlbumsClick}
        sx={{
          backgroundColor: theme.palette.customColors.button,
          color: "#FFF",
          "&:hover": {
            backgroundColor: theme.palette.customColors.buttonHover,
          },
          textTransform: "none",
          paddingRight: "",
          marginRight: "15px",
          gap: "5px",
          display: "flex",
          alignItems: "center",

          "@media (max-width: 750px)": {
            width: "100%",
            marginTop: "20px",
          },
        }}
      >
        <ImageOutlinedIcon />
        Álbumes
      </Button>
    </Box>
  );
};
