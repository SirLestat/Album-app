import { Button, useTheme } from "@mui/material";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const BackButton = ({
  to = "/",
  text = "Regresar",
  icon = <ArrowBackIosNewRoundedIcon />,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(to)}
      variant="contained"
      startIcon={icon}
      sx={{
        backgroundColor: theme.palette.customColors.button,
        textTransform: "none",
        marginTop: "15px",
        marginBottom: "15px",
        "&:hover": {
          backgroundColor: theme.palette.customColors.buttonHover,
        },
      }}
    >
      {text}
    </Button>
  );
};

BackButton.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.element,
  state: PropTypes.object,
};
