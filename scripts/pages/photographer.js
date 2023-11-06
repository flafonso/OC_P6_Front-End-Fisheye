import {getDatas, getPhotographer, getMedia} from "/scripts/utils/datas.js";
import {photographHeader, photographLikePrice, photographModal} from "/scripts/templates/photographer.js";

const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"));

async function displayData(photographer) {
  photographHeader(photographer);
  photographLikePrice(photographer);
  photographModal(photographer);
}

function displayMedia(media) {
  console.log("in display media", media);
  const mediaSection = document.querySelector(".media-section");

  for(let i = 0; i < media.length; i++) {

    const divEl = document.createElement("div");
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", `/assets/media/${media[i].image}`);

    divEl.append(imgEl);
    mediaSection.append(divEl);
  }
}

async function init() {
  const datas = await getDatas();
  const photographer = await getPhotographer(datas, id);
  const media = await getMedia(datas, id);
  console.log(media);
  displayData(photographer);
  displayMedia(media);
}

init();
