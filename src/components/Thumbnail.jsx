import { Skeleton } from "@mui/material";
import { useState } from "react";

export const Thumbnail = ({ thumbnailUrl, url, title, setModalData,id }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <>
      {isLoading && (
        <Skeleton
          sx={{
            cursor: "pointer",
            width: "100%",
            height: "100%",
            borderRadius: "12px",
          }}
        />
      )}
      <img
        onClick={() => {
          setModalData({ url, title });
        }}
        onLoad={() => setIsLoading(false)}
        src={thumbnailUrl}
        alt={`thumbnail${id}`}
        style={{
          cursor: "pointer",
          width: "100%",
          height: "100%",
          borderRadius: "12px",
        }}
      />
    </>
  );
};
