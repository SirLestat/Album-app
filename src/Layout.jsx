import { Box, Container } from "@mui/material";

import { Albums } from "./Albums";
import SearchBar from "./SearchBar";

const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "#0D1012", minHeight: "100vh", margin: 0 }}>
      <Container>
        <SearchBar />
        <Albums />
      </Container>
    </Box>
  );
};

export default Layout;
