import Grid from "@mui/material/Grid2";
import { useState, useEffect } from "react";
import { getPhotos } from "../services/photos.service";
import { useLocation } from "react-router-dom";
import { CustomUserInfo } from "../components/CustomUserInfo";
import { useNavigate } from "react-router-dom";
import { Panel } from "../components/Panel";
import { Thumbnail } from "../components/Thumbnail";
import { BackButton } from "../components/shared/BackButton";

export const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const location = useLocation();
  const { username, email, name, profileIcon, userId, itemId, thumbnailUrl } =
    location.state || {};
  const navigate = useNavigate();
  const [modalData, setModalData] = useState({ url: null, title: null });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPhotos(itemId);
      setPhotos(data);
    };
    fetchData();
  }, [itemId]);

  return (
    <>
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <BackButton
            to={`/${userId}/albums`}
            state={{ username, email, name, profileIcon, userId }}
          />
        </Grid>
      </Grid>
      <CustomUserInfo
        username={username}
        email={email}
        name={name}
        profileIcon={profileIcon}
        itemId={itemId}
      />

      <Panel modalData={modalData} setModalData={setModalData} />

      <Grid container spacing={2} sx={{ mt: "15px", mb: "15px" }}>
        {photos.map((photo) => (
          <Grid
            size={{ xs: 6, sm: 4, md: 3, lg: 2 }}
            key={photo.id}
            sx={{
              transition: "transform 0.1s ease-in-out, filter 0.1s ease-in-out",
              "&:hover": {
                borderRadius: "12px",
                transform: "scale(1.05)",
                filter: "brightness(1.1)",
              },
            }}
          >
            <Thumbnail {...photo} setModalData={setModalData} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
