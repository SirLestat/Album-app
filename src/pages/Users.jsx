import { useEffect, useMemo, useState } from "react";
import { getUsers } from "../services/users.service";
import Grid from "@mui/material/Grid2";
import { SearchForm } from "../components/pages/SearchForm";
import { User } from "../components/pages/User";
import { LoadingIndicator } from "../components/shared/LoadingIndicator";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);

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
      setIsLoading(true);
      const data = await getUsers();
      setUsers(data);
      setIsLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <LoadingIndicator />;
  }
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
