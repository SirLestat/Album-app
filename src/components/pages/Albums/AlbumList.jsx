
import { useEffect, useState } from "react";
import { AlbumCard } from "./AlbumCard";
import { getAlbums } from "../../../services/albums.service";


export const AlbumList = ({ userId }) => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAlbums(userId);

      setAlbums(data);
    };
    fetchData();
  }, []);
  return albums.map((item) => {
    return <AlbumCard  key={item.id} item={item} userId={userId}/> ;
  });
};
