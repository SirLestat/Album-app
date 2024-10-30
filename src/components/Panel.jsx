import { IconButton, Container, Box, useTheme, Skeleton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";

export const Panel = ({ modalData, setModalData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    modalData.url && setIsLoading(true);
  }, [modalData.url]);

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
                paddingBottom: "0px",
                backgroundColor: "#121212",
                border: `3px solid ${theme.palette.customColors.border}`,
                borderRadius: "12px",
                width: {
                  xs: "340px",
                  md: "640px",
                },
                height: {
                  xs:"40vh",
                  md: "640px"
                }
              }}
            >
              <IconButton
                onClick={() => setModalData({ url: null, title: null })}
                sx={{
                  position: "absolute",
                  top: "-40px",
                  right: "-40px",
                  color: "#FFF",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": {
                    backgroundColor: `${theme.palette.customColors.button}`,
                  },
                }}
              >
                <CloseIcon sx={{ fontSize: "25px" }} />
              </IconButton>

              {isLoading && (
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  
                  animation="wave"
                  sx={{ borderRadius: "12px",height: {
                    xs: "35vh",
                    md: "546px",
                  } }}
                />
              )}

              <img
                src={modalData.url}
                alt="photo"
                style={{
                  borderRadius: "12px",
                  width: "100%",
                  height: "auto",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  display: isLoading ? "none" : "block",
                }}
                onLoad={() => setIsLoading(false)}
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
