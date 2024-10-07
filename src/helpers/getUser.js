const getUser = async () => {
  const url = "https://jsonplaceholder.typicode.com/users/";

  const res = await fetch(url);
  const user = await res.json();

  return user;
};

export default getUser;
