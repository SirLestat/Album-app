import { Skeleton } from "@mui/material";
import { useState } from "react";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

export const PhotoCard = ({ thumbnailUrl, url, title, setModalData, id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", paddingTop: "100%" }}>
      {error ? (
        <div
          onClick={() => setModalData({ url, title })}
          style={{
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "12px",
            border: "1px solid rgba(245, 245, 245, 0.2)",
          }}
        >
          <BrokenImageIcon
            sx={{
              fontSize: "60px",
              color: "rgba(245, 245, 245, 0.2)",
            }}
          />
        </div>
      ) : (
        isLoading && (
          <Skeleton
            variant="rectangular"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: "12px",
              cursor: "pointer",
            }}
          />
        )
      )}
      <img
        onClick={() => setModalData({ url, title })}
        onLoad={() => setIsLoading(false)}
        onError={() => setError(true)}
        src={thumbnailUrl}
        alt={`thumbnail${id}`}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "12px",
          cursor: "pointer",
          display: error ? "none" : "block",
        }}
      />
    </div>
  );
};
