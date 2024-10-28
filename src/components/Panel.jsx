import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ReactDOM from "react-dom";

export const Panel = ({ modalData, setModalData }) => {
  return (
    <div>
      {modalData.url &&
        ReactDOM.createPortal(
          <div
            style={{
              top: "0",
              position: "fixed",
              width: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              height: "100%",
              color: "#FFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                border: "solid 1px",
                borderColor: "grey",
                padding: "16px",
                
                backgroundColor: "#222",
                borderRadius: "8px",
              }}
            >
              <IconButton
                onClick={() => setModalData({ url: null, title: null })}
                style={{
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
                  
                }}
                
                
              />
              
              <p style={{marginBottom:"0px"}}>{modalData.title}</p>
            </div>
          </div>,
          document.querySelector("#portal")
        )}
    </div>
  );
};
