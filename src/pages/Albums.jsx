import Grid from "@mui/material/Grid2";
import { UserInfo } from "../components/UserInfo";
import { useParams } from "react-router-dom";
import { BackButton } from "../components/shared/BackButton";
import { AlbumList } from "../components/pages/Albums/AlbumList";

const Albums = () => {
  const { userId } = useParams();

  return (
    <Grid container spacing={2}>
      <Grid size={12}>
        <BackButton to="/" text="Regresar" />
        <UserInfo userId={userId} />
      </Grid>
      <AlbumList userId={userId} />
    </Grid>
  );
};

export default Albums;
