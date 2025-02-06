import {
  IconButton,
  Container,
  Box,
  useTheme,
  Skeleton,
  Button,
} from "@mui/material";
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
                padding: "24px",
                paddingBottom: "0px",
                backgroundColor: "rgba(18, 18, 18, 0.9)",
                border: "1px solid rgba(42, 157, 143, 0.5)",
                borderRadius: "24px",
                width: {
                  xs: "35vh",
                  sm: error ? "auto" : "500px",
                  xl: error ? "auto" : "640px",
                },
                height: {
                  xs: "auto",
                  sm: error ? "auto" : "auto",
                  xl: error ? "auto" : "auto",
                },
              }}
            >
              {isLoading && (
                <IconButton
                  onClick={() => setModalData({ url: null, title: null })}
                  sx={{
                    position: "absolute",
                    top: { xl: "-40px", xs: "-55px", md: "-40px" },
                    right: { xl: "-40px", xs: "0px", md: "-40px" },
                    color: "#FFF",
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    "&:hover": {
                      backgroundColor: `${theme.palette.customColors.button}`,
                    },
                  }}
                >
                  <CloseIcon sx={{ fontSize: "25px" }} />
                </IconButton>
              )}

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
                  <Button
                    onClick={() => setModalData({ url: null, title: null })}
                    sx={{
                      color: "#fff",
                      backgroundColor: theme.palette.customColors.button,
                      textTransform: "none",
                      marginBottom: "15px",
                      "&:hover": {
                        backgroundColor: theme.palette.customColors.buttonHover,
                      },
                      borderRadius: "50px",
                      width: "100%",
                    }}
                  >
                    Aceptar
                  </Button>
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
                <Box
                  sx={{
                    width: { xs: "100%", md: "50%" },
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                  }}
                >
                  <span
                    style={{
                      textAlign: "center",
                      marginTop: "12px",
                      marginBottom:"12px"
                    }}
                  >
                   Autor:&nbsp;{modalData.author}
                  </span>
                  <Button
                    onClick={() => setModalData({ url: null, title: null })}
                    sx={{
                      color: "#fff",
                      backgroundColor: theme.palette.customColors.button,
                      textTransform: "none",
                      marginBottom: "15px",
                      "&:hover": {
                        backgroundColor: theme.palette.customColors.buttonHover,
                      },
                      borderRadius: "50px",
                    }}
                  >
                    Cerrar
                  </Button>
                </Box>
              )}
            </Container>
          </Box>,
          document.querySelector("#portal")
        )}
    </div>
  );
};
