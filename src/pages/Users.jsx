import { useEffect, useMemo, useState } from "react";
import { getUser } from "../helpers/getUser";
import Grid from "@mui/material/Grid2";
import { SearchForm } from "../components/pages/SearchForm";
import { User } from "../components/pages/User";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const handleSearchFormChange = (event) => {
    setSearch(event.target.value);
  };

  const filtered = useMemo(() => {
    return users.filter(
      (user) =>
        user.username.toLowerCase().includes(search.toLowerCase()) ||
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser();

      setUsers(data);
    };
    fetchData();
  }, []);

  

  return (
    <Grid container spacing={3} py={6}>
      <Grid component="form" size={6} offset={3} mb={3}>
        <SearchForm onChange={handleSearchFormChange} value={search} />
      </Grid>
      <Grid container size={12} spacing={3} py={6}>
        {filtered.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Users;
