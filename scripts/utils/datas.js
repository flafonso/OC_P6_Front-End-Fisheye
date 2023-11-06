async function getDatas() {
  const response = await fetch("./data/photographers.json");
  const datas = await response.json();
  // console.log(datas);
  return datas;
}

async function getPhotographer(datas, id) {
  const photographer = datas.photographers.find(photographer => photographer.id === id);
  // console.log(id, photographer);

  return photographer;
}

async function getMedia(datas, id) {
  const { media } = datas; // later go directly to datas.media
  const photographMedia = media.filter((content) => content.photographerId === id);
  console.log(media);
  return photographMedia;
}

export {getDatas, getPhotographer, getMedia};