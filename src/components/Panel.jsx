import { IconButton, Container, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactDOM from "react-dom";

export const Panel = ({ modalData, setModalData }) => {
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
              backgroundColor: "rgba(0, 0, 0, 0.7)",
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
                border: "1px solid grey",
                padding: "16px",
                backgroundColor: "#222",
                borderRadius: "8px",
                width: {
                  xs: "70%", 
                  sm: "80%",  
                  md: "600px", 
                  lg: "600px" 
                },
              }}
            >
              <IconButton
                onClick={() => setModalData({ url: null, title: null })}
                sx={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  color: "#FFF",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <CloseIcon />
              </IconButton>

              <img
                src={modalData.url}
                alt="photo"
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "auto", 
                  maxHeight: "70vh", 
                  objectFit: "contain",
                }}
              />

              <p
                style={{
                  marginBottom: "0px",
                  marginTop: "8px",
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
