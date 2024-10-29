import { IconButton, Container, Box, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactDOM from "react-dom";

export const Panel = ({ modalData, setModalData }) => {
  const theme = useTheme();
  return (
    <div>
      {modalData.url &&
        ReactDOM.createPortal(
          <Box
            sx={{
              top: 0,
              position: "fixed",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.8)",
              color: "#FFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1300,
            }}
          >
            <Container
              maxWidth="sm"
              sx={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "26px",
                paddingBottom:"0px",
                backgroundColor: "#121212",
                border:`3px solid ${theme.palette.customColors.border}`,
                borderRadius: "12px",
                width: {
                  xs: "70%",
                  sm: "70%",
                },
              }}
            >
              <IconButton
                onClick={() => setModalData({ url: null, title: null })}
                sx={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  color: "#FFF",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": {backgroundColor:`${theme.palette.customColors.button}`}
        
                }}
              >
                <CloseIcon sx={{fontSize:"30px"}} />
              </IconButton>

              <img
                src={modalData.url}
                alt="photo"
                style={{
                  borderRadius: "12px",
                  width: "100%",
                  height: "auto",
                  maxHeight: "70vh",
                  objectFit: "contain",
                }}
              />

              <p
                style={{
                  
                  textAlign: "center",
                }}
              >
                {modalData.title}
              </p>
            </Container>
          </Box>,
          document.querySelector("#portal")
        )}
    </div>
  );
};
