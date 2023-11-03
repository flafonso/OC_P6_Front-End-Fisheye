import {getDatas, getPhotographer} from "/scripts/utils/datas.js";
import {photographHeader, photographLikePrice, photographModal} from "/scripts/templates/photographer.js";


async function displayData(photographer) {
  photographHeader(photographer);
  photographLikePrice(photographer);
  photographModal(photographer);
}

async function init() {
  const datas = await getDatas();
  const photographer = await getPhotographer(datas);
  displayData(photographer);
}

init();
