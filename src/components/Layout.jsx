import { Box, Container } from "@mui/material";
import Users from "../pages/Users";



const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", minHeight: "100vh", margin: 0 }}>
      <Container>
        <Users/>
      </Container>
    </Box>
  );
};

export default Layout;
