import { useEffect, useState } from "react";
import getUser from "./helpers/getUser";

export const Albums = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedUsers = await getUser();
      setUsers(fetchedUsers);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {users.map((user) => {
          return (
            <li
              key={user.id}
              style={{
                display:"",
                backgroundColor: "#629584",
                borderStyle: "solid",
                marginBottom: "20px",
                borderRadius: 20,
                marginRight: "20px",
              }}
            >
              
              <h2 style={{ color: "white", margin: "20px" }}>
                <img src="src\assets\cheems.jpg" alt="profile image" style={{borderRadius:"50%", width:"80px", height:"80px"}} /> {user.username}
              </h2>
              
              <p style={{ color: "white", margin: "20px" }}>
                <strong>Nombre:</strong> {user.name}
              </p>
              <p style={{ color: "white", margin: "20px" }}>
                <strong>Email:</strong> {user.email}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
