export const getAlbums = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/albums?userId=${id}`;
  const res = await fetch(url);
  const album = res.json();

  return album;
};
