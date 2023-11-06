import { getDatas, getPhotographer, getMedia } from "/scripts/utils/datas.js";
import { photographHeader, photographLikePrice, photographModal } from "/scripts/templates/photographer.js";
import { MediaFactory } from "/scripts/factories/MediaFactory.js";

const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"));

async function displayData(photographer) {
  photographHeader(photographer);
  photographLikePrice(photographer);
  photographModal(photographer);
}

function displayMedia(mediaApi) {
  console.log("mediaApi: ", mediaApi);
  // const mediaSection = document.querySelector(".media-section");

  const media = mediaApi.map(content => MediaFactory.create(content));
  console.log("media : ", media);

  // for(let i = 0; i < mediaApi.length; i++) {
  //   const divEl = document.createElement("div");
  //   const imgEl = document.createElement("img");
  //   imgEl.setAttribute("src", `/assets/media/${mediaApi[i].image}`);

  //   divEl.append(imgEl);
  //   mediaSection.append(divEl);
  // }
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
