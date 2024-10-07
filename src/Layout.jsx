import { Box, Typography } from "@mui/material";
import SearchBar from "./searchBar";
import { Albums } from "./Albums";

const Layout = () => {
  return (
    <Box sx={{ backgroundColor: "#243642", minHeight: "100vh", margin: 0 }}>
      <SearchBar />
      <Albums/>
    </Box>
  );
};

export default Layout;
