export const getUser = async () => {
  const url = "https://jsonplaceholder.typicode.com/users/";

  const res = await fetch(url); // response
  const user = await res.json();

  return user;
};