import { getPhotographerDatas } from "../utils/datas.js";
import { userPageTemplate } from "../templates/photographer.js";

import { listenContact } from "../templates/contactForm.js";

const params = new URL(document.location).searchParams;
const id = parseInt(params.get("id"));

const selectedEl = document.querySelector(".selected");

async function init() {
  const data = await getPhotographerDatas(id);
  const userPage = userPageTemplate(data);

  userPage.fillPhotographHeader();
  userPage.fillLikeAndPrice();
  userPage.fillModalForm();
  userPage.sortMedia();
  userPage.fillMedia();

  listenContact();

  const observer = new MutationObserver(() => {
    userPage.sortMedia();
    userPage.fillMedia();
  });
  observer.observe(selectedEl, { childList: true });
}

init();
