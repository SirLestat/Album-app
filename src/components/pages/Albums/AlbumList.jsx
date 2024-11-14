import { useEffect, useState } from "react";
import { AlbumCard } from "./AlbumCard";
import { getAlbums } from "../../../services/albums.service";
import { createArray } from "../../../helpers/createArray";
import Grid from "@mui/material/Grid2";
import { Skeleton } from "@mui/material";

export const AlbumList = ({ userId }) => {
  const [albums, setAlbums] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getAlbums(userId);
        setAlbums(data);
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [userId]);

  if (error) return <h1>{error.message}</h1>;

  return (
    <Grid container spacing={2}>
      {isLoading
        ? createArray(12).map((item) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 3 }} key={item}>
              <Skeleton
                variant="rectangular"
                sx={{
                  borderRadius: 2,
                  width: "100%",
                  height: "150px",
                }}
              />
            </Grid>
          ))
        : albums.map((item) => (
            <AlbumCard key={item.id} item={item} userId={userId} />
          ))}
    </Grid>
  );
};
