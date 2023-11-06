import { getDatas, getPhotographer, getMedia } from "/scripts/utils/datas.js";
import { photographHeader, photographLikePrice, photographModal } from "/scripts/templates/photographer.js";
import { MediaFactory } from "/scripts/factories/MediaFactory.js";
import { mediaCard } from "/scripts/templates/mediaCard.js";

const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"));

async function displayData(photographer) {
  photographHeader(photographer);
  photographLikePrice(photographer);
  photographModal(photographer);
}

function displayMedia(mediaApi) {
  console.log("mediaApi: ", mediaApi);
  const mediaSection = document.querySelector(".media-section");

  const media = mediaApi.map(content => MediaFactory.create(content));
  console.log("media : ", media);

  media.forEach(content => {
    mediaSection.append(mediaCard(content));
  });
}

async function init() {
  const datas = await getDatas();
  const photographer = await getPhotographer(datas, id);
  const mediaApi = await getMedia(datas, id);
  // console.log(mediaApi);
  displayData(photographer);
  displayMedia(mediaApi);
}

init();
