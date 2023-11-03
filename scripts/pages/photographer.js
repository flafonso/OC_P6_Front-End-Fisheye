async function displayData(photographer) {
  photographHeader(photographer);  // eslint-disable-line no-undef
  photographLikePrice(photographer);  // eslint-disable-line no-undef
  photographModal(photographer);  // eslint-disable-line no-undef
}

async function init() {
  const datas = await getDatas();  // eslint-disable-line no-undef
  const photographer = await getPhotographer(datas);  // eslint-disable-line no-undef
  displayData(photographer);
}

init();
