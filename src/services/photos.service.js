export const getPhotos = async (userId) => {
  const url = `https://jsonplaceholder.typicode.com/albums/${userId}/photos`;
  const res = await fetch(url);
  const photos = res.json();

  return photos;
};
