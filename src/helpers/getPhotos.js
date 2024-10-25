export const getPhotos = async (id) => {
  const url = `https://jsonplaceholder.typicode.com/albums/${id}/photos`;
  const res = await fetch(url);
  const photos = res.json();

  return photos;
};
