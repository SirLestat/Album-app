import { Box, Button, Typography, useTheme } from "@mui/material";
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
        border: "1px solid",
        borderColor: theme.palette.customColors.border,
        padding: { xs: "20px", sm: "40px" },
        display: "flex",
        justifyContent: { xs: "center", sm: "space-between" },
        flexWrap: "wrap",
        position: "relative",
        minHeight: "fit-content",
        textAlign: { xs: "center", sm: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "flex-start" },
          flexGrow: 1,
          gap: "20px",
          flexDirection: { xs: "column", sm: "row" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <img
          src={gravatar(user.email)}
          alt="profile image"
          style={{
            borderRadius: "50%",
            width: "70px",
            height: "70px",
            objectFit: "cover",
          }}
        />

        <Box
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", sm: "flex-start" },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: { xs: "center", sm: "flex-start" },
              color: "#FFF",
              fontSize: "22px",
              fontWeight: 700,
              marginBottom: "5px",
            }}
          >
            {user.username}
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: { xs: "20px", sm: "40px" },
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              alignItems: { xs: "center", sm: "flex-start" },
            }}
          >
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
                gap: "5px",
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              <PersonOutlineOutlinedIcon sx={{ fontSize: "20px" }} />
              {user.name}
            </Typography>

            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: { xs: "center", sm: "flex-start" },
                gap: "5px",
                fontSize: { xs: "14px", sm: "16px" },
              }}
            >
              <EmailOutlinedIcon sx={{ fontSize: "20px" }} />
              {user.email}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{
          display: "flex", 
          justifyContent: "center",
          width: { xs: "90%", sm:"100%",md: "auto" }
        }}>
        <Button
          onClick={handleAlbumsClick}
         sx={{
            backgroundColor: theme.palette.customColors.button,
            color: "#FFF",
            "&:hover": {
              backgroundColor: theme.palette.customColors.buttonHover,
            },
            textTransform: "none",
            gap: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "20px",
            width: { xs: "100%", md: "auto" },
            minWidth: { xs: "100%", md: "120px" },
            padding: { xs: "8px 16px", md: "6px 16px" },
            borderRadius:"50px"
            
          }}
        >
          <ImageOutlinedIcon />
          Álbumes
        </Button>
      </Box>
    </Box>
  );
};
