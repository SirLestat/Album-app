export const getUsers = async () => {
  const url = "https://jsonplaceholder.typicode.com/users/";

  const res = await fetch(url); // response
  const users = await res.json();

  return users;
};

export const getUserById = async (userId) => {
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  const res = await fetch(url); // response
  const user = await res.json();

  return user;
};
