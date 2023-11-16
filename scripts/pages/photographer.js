import { getPhotographerDatas } from "/scripts/utils/datas.js";
import { userPageTemplate } from "/scripts/templates/photographer.js";
import { MediaFactory } from "/scripts/factories/MediaFactory.js";
// import { mediaCard } from "/scripts/templates/mediaCard.js";
import { Lightbox } from "/scripts/templates/lightbox.js";

import { listenContact } from "/scripts/Utils/contactForm.js";

const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"));

const selectedEl = document.querySelector(".selected");
// console.log("selectedEl data", selectedEl.getDatas);

function displayMedia(media) {
  const mediaSection = document.querySelector(".media-section");
  mediaSection.innerHTML = "";

  media.forEach((med) => {
    mediaSection.append(med.domCard);
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
  const data = await getPhotographerDatas(id);
  console.log("data", data);
  const userPage = userPageTemplate(data);
  userPage.fillPhotographHeader();
  userPage.fillLikeAndPrice();
  userPage.fillModalForm();
  listenContact();

  const media = data.media.map((content) => MediaFactory.create(content));
  sortMedia(media);
  displayMedia(media);

  
  // photographModal(data.photographer);

  const observer = new MutationObserver(() => {
    sortMedia(media);
    displayMedia(media);
  });
  observer.observe(selectedEl, { childList: true });
}

init();
