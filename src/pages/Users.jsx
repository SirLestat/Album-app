import { useEffect, useState } from "react";
import { getUser } from "../helpers/getUser";
import { Box, Typography, Button, TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Link, useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

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

  const handleNavigation = (userId) => {
    navigate(`/${userId}/albums`);
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
            },
          }}
          placeholder="Buscar usuario"
          variant="filled"
          onChange={handleSearchChange}
          value={search}
          autoComplete="off"
          fullWidth
        ></TextField>
      </Grid>

      {filtered.map((user) => {
        return (
          <Grid
            size={{ xs: 12 }}
            sx={{
              alignItems: "center",
              backgroundColor: "#1E3A3A",
              borderRadius: 5,
              borderStyle: "solid",
              borderColor: "#2C5454",
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
                
                onClick={() => handleNavigation(user.id)}
                sx={{
                  backgroundColor: "#2A9D8F",
                  color: "#FFF",
                  "&:hover": {
                    backgroundColor: "#21867A",
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
