export const getPhotos = async (albumId) => {
  const count = 50; // Cantidad de imágenes a obtener
  //const random = Math.random() * 10;
  try {
    const res = await fetch(
      `https://picsum.photos/v2/list?page=${albumId}&limit=${count}`
    );

    if (!res.ok) {
      throw new Error(`Error al obtener las imágenes: ${res.status}`);
    }

    const photos = await res.json();

    return photos.map((photo) => ({
      id: photo.id,
      url: photo.download_url,
      //url: `https://picsum.photos/200/300?random=${photo.id + random}`, opcion a album con imagenes aleatorias
      author: photo.author,
    }));
  } catch (error) {
    console.error("Error en getPhotos:", error);
    return [];
  }
};
