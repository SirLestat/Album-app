import { Link, useParams } from "react-router-dom";
import { getAlbums } from "../helpers/getAlbums";
import { useEffect, useState } from "react";

const Albums = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAlbums(userId);

      setAlbums(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Álbumes</h1>
      <Link to="/">Inicio</Link>
      {albums.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
    </div>
  );
};

export default Albums;
