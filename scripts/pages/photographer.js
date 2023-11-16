import { getDatas, getPhotographer, getMedia } from "/scripts/utils/datas.js";
import {
  photographHeader,
  photographLikePrice,
  photographModal,
} from "/scripts/templates/photographer.js";
import { MediaFactory } from "/scripts/factories/MediaFactory.js";
import { mediaCard } from "/scripts/templates/mediaCard.js";
import { Lightbox } from "/scripts/templates/lightbox.js";

const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"));

const selectedEl = document.querySelector(".selected");
// console.log("selectedEl data", selectedEl.getDatas);

function displayMedia(media) {
  const mediaSection = document.querySelector(".media-section");
  mediaSection.innerHTML = "";

  media.forEach((content) => {
    mediaSection.append(mediaCard(content));
  });
  Lightbox.init();
}

function sortMedia(media) {
  switch (selectedEl.innerHTML) {
  case "Date":
    media.sort((a, b) => new Date(a.date) - new Date(b.date));
    break;
  case "Titre":
    media.sort((a, b) => a.title.localeCompare(b.title));
    break;
  default:
    media.sort((a, b) => a.likes - b.likes);
  }
  console.log("sortMedia", media);
}

async function init() {
  const datas = await getDatas();

  const photographer = await getPhotographer(datas, id);
  photographHeader(photographer);

  const mediaApi = await getMedia(datas, id);
  // console.log("mediaApi: ", mediaApi);

  const media = mediaApi.map((content) => MediaFactory.create(content));
  // console.log("media : ", media);
  sortMedia(media);
  displayMedia(media);

  photographLikePrice(photographer);
  photographModal(photographer);

  const observer = new MutationObserver(() => {
    sortMedia(media);
    displayMedia(media);
  });
  observer.observe(selectedEl, { childList: true });
}

init();
