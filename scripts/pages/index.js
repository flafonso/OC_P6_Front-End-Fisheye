async function getPhotographers() {
  const response = await fetch("./data/photographers.json");
  const datas = await response.json();
  console.log(datas);
  return datas;
}

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
  const { photographers } = await getPhotographers();
  // console.log(photographers);
  displayData(photographers);
}

init();
