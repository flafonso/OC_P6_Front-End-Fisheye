import {getDatas} from "./scripts/utils/datas.js";
import {photographerTemplate} from "./scripts/templates/photographer.js";

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  const { photographers } = await getDatas();
  displayData(photographers);
}

init();
