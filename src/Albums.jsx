import { useEffect, useState } from "react";
import { getUser } from "./helpers/getUser";
import { Box, Typography, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";

const Albums = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = "";

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser();

      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          borderRadius: 3,
          pt: "20px",
          marginBottom: "20px",
        }}
      >
        <form>
          <TextField
            sx={{
              borderRadius: 3,
              backgroundColor: "#FFF",
              "& > :not(style)": { width: "50ch" },
            }}
            variant="filled"
            placeholder="Buscar usuario"
            fullWidth
          ></TextField>
        </form>
      </Box>

      <Grid container spacing={3}>
        {users.map((user) => {
          return (
            <Grid
              size={{ xs: 12 }}
              sx={{
                alignItems: "center",
                backgroundColor: "#15393C",
                borderRadius: 5,
                borderStyle: "solid",
                borderColor: "#1E7981",
                padding: "20px",
              }}
              key={user.id}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src="src\assets\cheems.jpg"
                  alt="profile image"
                  style={{ borderRadius: "50%", width: "80px", height: "80px" }}
                />

                <Typography sx={{ color: "#FFF", marginLeft: "20px" }}>
                  {user.username}
                </Typography>
              </Box>

              <Box sx={{ color: "#FFF", marginTop: "10px" }}>
                <Typography>
                  <strong>Usuario:</strong> {user.name}
                </Typography>
                <Typography>
                  <strong>Email:</strong> {user.email}
                </Typography>
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Albums;
