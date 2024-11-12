import Grid from "@mui/material/Grid2";
import { useState } from "react";

import { Panel } from "../components/pages/Photos/Panel";
import { BackButton } from "../components/shared/BackButton";
import { useParams } from "react-router-dom";
import { PhotoList } from "../components/pages/Photos/PhotoList";
import { UserInfo } from "../components/shared/UserInfo";

export const Photos = () => {
  const [modalData, setModalData] = useState({ url: null, title: null });
  const { userId, albumId } = useParams();

  return (
    <>
      <Panel modalData={modalData} setModalData={setModalData} />
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <BackButton to={`/${userId}/albums`} />
        </Grid>
        <Grid size={12}>
          <UserInfo userId={userId} albumId={albumId} />
        </Grid>
      </Grid>

      <PhotoList albumId={albumId} setModalData={setModalData} />
    </>
  );
};
