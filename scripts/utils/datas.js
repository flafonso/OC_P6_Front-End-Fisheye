async function getDatas() {
  const response = await fetch("./data/photographers.json");
  const datas = await response.json();
  // console.log(datas);
  return datas;
}

async function getPhotographerDatas(id) {
  const datas = await getDatas();
  const photographer = datas.photographers.find(photographer => photographer.id === id);
  const media = datas.media.filter((content) => content.photographerId === id);
  // console.log("photographer", photographer);
  // console.log("photographMedia", media);

  // console.log("fusion", {photographer, media});
  return {photographer, media};
}

export {getDatas, getPhotographerDatas};