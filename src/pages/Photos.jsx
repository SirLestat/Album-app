import Grid from "@mui/material/Grid2";
import { useState } from "react";
import { Panel } from "../components/pages/Photos/Panel";
import { BackButton } from "../components/shared/BackButton";
import { useParams } from "react-router-dom";
import { PhotoList } from "../components/pages/Photos/PhotoList";
import { UserInfo } from "../components/shared/UserInfo";
import { Button } from "@mui/material";
import { useTheme } from "@emotion/react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/shared/Header";

export const Photos = () => {
  const [modalData, setModalData] = useState({ url: null, title: null });
  const { userId, albumId } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <Panel modalData={modalData} setModalData={setModalData} />
      <Grid container size={12}>
        <Header />
        <Grid size={12}>
          <BackButton to={`/${userId}/albums`} />
          <Button
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: theme.palette.customColors.button,
              textTransform: "none",
              "&:hover": {
                backgroundColor: theme.palette.customColors.buttonHover,
              },
              marginLeft: "10px",
              borderRadius: "30px",
              height: "36.5px",
            }}
          >
            <HomeOutlinedIcon
              sx={{ color: "#fff", width: "23px", height: "23px" }}
            />
          </Button>
        </Grid>
        <Grid size={12}>
          <UserInfo userId={userId} albumId={albumId} />
        </Grid>
      </Grid>

      <PhotoList albumId={albumId} setModalData={setModalData} />
    </>
  );
};
