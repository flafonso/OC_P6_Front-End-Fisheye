//Mettre le code JavaScript lié à la page photographer.html
async function getPhotographer() {
  const params = new URL(document.location).searchParams;
  const id = parseInt(params.get("id"));

  const response = await fetch("./data/photographers.json");
  const datas = await response.json();

  const photographer = datas.photographers.find(photographer => photographer.id === id);
  console.log(id, photographer);

  return photographer;
}

async function displayData(photographer) {
  const photographHeader = document.querySelector(".photograph-header");

  const picture = `assets/photographers/profile_picture/${photographer.portrait}`;

  const textArea = document.createElement("div");
  textArea.classList.add("text-area");

  const nameEl = document.createElement("h1");
  nameEl.textContent = photographer.name;

  const locationEl = document.createElement("p");
  locationEl.classList.add("location");
  locationEl.textContent = `${photographer.city}, ${photographer.country}`;

  const taglineEl = document.createElement("p");
  taglineEl.textContent = photographer.tagline;

  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", picture);

  textArea.append(nameEl, locationEl, taglineEl);
  photographHeader.append(textArea, imgEl);
}

async function init() {
  const photographer = await getPhotographer();
  displayData(photographer);
}

init();
