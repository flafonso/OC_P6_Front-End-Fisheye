async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerTemplate(photographer);  // eslint-disable-line no-undef
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getDatas();  // eslint-disable-line no-undef
  // console.log(photographers);
  displayData(photographers);
}

init();
