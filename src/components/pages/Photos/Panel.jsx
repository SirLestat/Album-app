import { IconButton, Container, Box, useTheme, Skeleton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";


export const Panel = ({ modalData, setModalData }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    modalData.url && setIsLoading(true), setError(false);
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
                  xs: "35vh",
                  sm: error ? "auto" : "500px",
                  xl: error ? "auto" : "640px",
                },
                height: {
                  xs: "auto",
                  sm: error ? "auto" : "auto",
                  xl: error ? "auto" : "640px",
                },
              }}
            >
              <IconButton
                onClick={() => setModalData({ url: null, title: null })}
                sx={{
                  position: "absolute",
                  top: { xl: "-40px", xs: "-55px", md:"-40px" },
                  right: { xl: "-40px", xs: "0px", md:"-40px"},
                  color: "#FFF",
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                  "&:hover": {
                    backgroundColor: `${theme.palette.customColors.button}`,
                  },
                }}
              >
                <CloseIcon sx={{ fontSize: "25px" }} />
              </IconButton>

              {error ? (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <ErrorOutlineIcon sx={{ fontSize: "35px" }} />
                  <p>Error al cargar la imagen.</p>
                </div>
              ) : (
                isLoading && (
                  <Skeleton
                    variant="rectangular"
                    width="100%"
                    animation="wave"
                    sx={{
                      borderRadius: "12px",
                      height: { xs: "30vh", sm: "500px", xl: "600px" },
                    }}
                  />
                )
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
                onError={() => setError(true)}
              />

              {error ? null : isLoading ? (
                <Skeleton
                  variant="text"
                  width="70%"
                  animation="wave"
                  sx={{ marginTop: "12px", marginBottom: "12px" }}
                />
              ) : (
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "12px",
                  }}
                >
                  {modalData.title}
                </p>
              )}
            </Container>
          </Box>,
          document.querySelector("#portal")
        )}
    </div>
  );
};
