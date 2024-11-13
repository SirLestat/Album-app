import { useEffect, useMemo, useState } from "react";
import { getUsers } from "../../services/users.service";
import Grid from "@mui/material/Grid2";
import { User } from "./User";
import { Skeleton } from "@mui/material";
import { createArray } from "../../helpers/createArray";

export const UserList = ({ search }) => {
  const [users, setUsers] = useState([]);

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
      const data = await getUsers();
      setUsers(data);
    };
    fetchData();
  }, []);
  if (!users.length)
    return (
      <Grid container spacing={3} py={6}>
        {createArray(10).map((item) => (
          <Grid key={item} size={12}>
            <Skeleton
              variant="rectangular"
              width="100%"
              sx={{ borderRadius: 3, height: { xl: "156px" } }}
            />
          </Grid>
        ))}
      </Grid>
    );
  return (
    <Grid container spacing={3} py={6}>
      {filtered.map((user) => (
        <Grid key={user.id} size={12}>
          <User user={user} />
        </Grid>
      ))}
    </Grid>
  );
};
