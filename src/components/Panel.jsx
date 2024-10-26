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
              style={{ display: "flex", flexDirection:"column", border: "solid", borderColor: "red", justifyContent:"center", alignItems:"center" }}
            >
              <img src={modalData.url} alt="photo" />
              <p>{modalData.title}</p>
              <button
                onClick={() => {
                  setModalData({ url: null, title: null });
                }}
              >
                cerrar
              </button>
            </div>
          </div>,
          document.querySelector("#portal")
        )}
    </div>
  );
};
