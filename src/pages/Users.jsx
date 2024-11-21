import { useState } from "react";
import Grid from "@mui/material/Grid2";
import { SearchForm } from "../components/pages/SearchForm";
import { UserList } from "../components/pages/UserList";
import { Header } from "../components/shared/Header";

const Users = () => {
  const [search, setSearch] = useState("");
  const handleSearchFormChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Grid container pt={6} sx={{ paddingTop: 0 }}>
      <Header />
      
      <Grid component="form" size={12} offset={0} sx={{ paddingTop: "48px" }}>
        <SearchForm onChange={handleSearchFormChange} value={search} />
      </Grid>
      <Grid size={12}>
        <UserList search={search} />
      </Grid>
    </Grid>
  );
};

export default Users;
