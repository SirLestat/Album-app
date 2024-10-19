import { Box, Container } from "@mui/material";
import Users from "../pages/Users";



const Layout = () => {
  return (
    <Box sx={{minHeight: "100vh", margin: 0 }}>
      <Container>
        <Users/>
      </Container>
    </Box>
  );
};

export default Layout;
