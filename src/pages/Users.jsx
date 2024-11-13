import { useEffect, useMemo, useState } from "react";
import { getUsers } from "../services/users.service";
import Grid from "@mui/material/Grid2";
import { SearchForm } from "../components/pages/SearchForm";
import { User } from "../components/pages/User";
import { UserList } from "../components/pages/UserList";

const Users = () => {
  const [search, setSearch] = useState("");
  const handleSearchFormChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Grid container spacing={3} py={6}>
      <Grid component="form" size={6} offset={3} mb={3}>
        <SearchForm onChange={handleSearchFormChange} value={search} />
      </Grid>
      <Grid size={12}>
        <UserList search={search} />
      </Grid>
    </Grid>
  );
};

export default Users;
