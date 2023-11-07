import { getDatas, getPhotographer, getMedia } from "/scripts/utils/datas.js";
import { photographHeader, photographLikePrice, photographModal } from "/scripts/templates/photographer.js";
import { MediaFactory } from "/scripts/factories/MediaFactory.js";
import { mediaCard } from "/scripts/templates/mediaCard.js";

const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"));

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
  photographHeader(photographer);
  displayMedia(mediaApi);
  photographLikePrice(photographer);
  photographModal(photographer);
}

init();
