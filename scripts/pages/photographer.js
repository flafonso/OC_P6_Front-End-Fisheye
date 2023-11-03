function photographModal(photographer) {
  const titleEl = document.querySelector(".modal header h2");
  titleEl.innerHTML = `Contactez-moi
                      <br>
                      ${photographer.name}`;
}

function photographLikePrice(photographer) {
  const priceEl = document.querySelector(".price");
  priceEl.textContent = `${photographer.price} / jour`;

  const totalLikeEl = document.querySelector(".total-like");
  const totalLikeValue = document.createElement("span");
  totalLikeValue.textContent = "12 043";  //Until we get the real value from the data
  totalLikeEl.prepend(totalLikeValue);
}

function photographHeader(photographer) {
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

async function displayData(photographer) {
  photographHeader(photographer);
  photographLikePrice(photographer);
  photographModal(photographer);
}

async function init() {
  const datas = await getDatas();  // eslint-disable-line no-undef
  const photographer = await getPhotographer(datas);  // eslint-disable-line no-undef
  displayData(photographer);
}

init();
