import { Box, Container } from "@mui/material";

import Albums  from "./Albums";

const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "#121212", minHeight: "100vh", margin: 0 }}>
      <Container>
        <Albums />
      </Container>
    </Box>
  );
};

export default Layout;
