import { Box, Container } from "@mui/material";

import { Albums } from "./Albums";
import SearchBar from "./SearchBar";

const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "#131717", minHeight: "100vh", margin: 0 }}>
      <Container>
        <SearchBar />
        <Albums />
      </Container>
    </Box>
  );
};

export default Layout;
