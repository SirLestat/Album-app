import { useEffect, useState } from "react";
import { getUser } from "../helpers/getUser";
import { Box, Typography, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser();

      setUsers(data);
    };
    fetchData();
  }, []);

  const filteredUsers = (users, search) => {
    return users.filter(
      (user) =>
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const filtered = filteredUsers(users, search);

  const handleNavigation = (user) => {
    navigate(`/${user.id}/albums`, {
      state: { username: user.username, email: user.email, name: user.name },
    });
  };
  return (
    <Grid container spacing={3} py={6}>
      <Grid component="form" size={6} offset={3} mb={3}>
        <TextField
          sx={{
            borderRadius: 2,
            backgroundColor: "#F5F5F5",
            "& .MuiInputBase-input": {
              display: "flex",
              alignItems: "center",
              padding: "10px 14px",
              color:theme.palette.text.secondary,
            },
          }}
          autoComplete="off"
          fullWidth
          onChange={handleSearchChange}
          placeholder="Buscar usuario"
          value={search}
          variant="filled"
        ></TextField>
      </Grid>

      {filtered.map((user) => {
        return (
          <Grid
            size={{ xs: 12 }}
            sx={{
              alignItems: "center",
              backgroundColor: theme.palette.customColors.itemBackground,
              borderRadius: 3,
              borderStyle: "solid",
              borderColor: theme.palette.customColors.border,
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

              <Typography
                sx={{
                  color: "#FFF",
                  marginLeft: "20px",
                  fontSize: "22px",
                  fontWeight: 700,
                }}
              >
                {user.username}
              </Typography>
            </Box>

            <Grid sx={{ color: "#FFF", marginTop: "10px" }}>
              <Typography>
                <strong>Usuario:</strong> {user.name}
              </Typography>
              <Typography>
                <strong>Email:</strong> {user.email}
              </Typography>
            </Grid>

            <Grid container justifyContent={"flex-end"}>
              <Button
                onClick={() => handleNavigation(user)}
                sx={{
                  backgroundColor: theme.palette.customColors.button,
                  color: "#FFF",
                  "&:hover": {
                    backgroundColor: theme.palette.customColors.buttonHover,
                  },
                  textTransform: "none",
                }}
              >
                Álbumes
                {/* <Link to="/albums" style={{textDecoration:"none", color:"white"}}>Albumes</Link> */}
              </Button>
            </Grid>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Users;
