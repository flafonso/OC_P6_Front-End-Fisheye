function photographerTemplate(data) {
  // console.log("Data : ", data);
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/profile_picture/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.classList.add("photographer-card");

    const cardLink = document.createElement("a");
    cardLink.setAttribute("href", `photographer.html?id=${id}`);

    const imgBoxEl = document.createElement("div");
    imgBoxEl.classList.add("profile-img-box");
    const imgEl = document.createElement("img");
    imgEl.setAttribute("src", picture);
    imgBoxEl.append(imgEl);

    const nameEl = document.createElement("h2");
    nameEl.textContent = name;

    const locationEl = document.createElement("p");
    locationEl.classList.add("location");
    locationEl.textContent = `${city}, ${country}`;

    const taglineEl = document.createElement("p");
    taglineEl.textContent = tagline;

    const priceEl = document.createElement("p");
    priceEl.classList.add("price");
    priceEl.textContent = `${price}€/jour`;

    cardLink.append(imgBoxEl, nameEl);
    article.append(cardLink, locationEl, taglineEl, priceEl);
    return article;
  }
  return { name, picture, id, city, country, tagline, price, getUserCardDOM };
}


function photographModal(photographer) {
  const titleEl = document.querySelector(".modal header h2");
  titleEl.innerHTML = `Contactez-moi
                      <br>
                      ${photographer.name}`;
}

function photographLikePrice(photographer) {
  const priceEl = document.querySelector(".price");
  priceEl.textContent = `${photographer.price}€ / jour`;

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

  const imgBoxEl = document.createElement("div");
  imgBoxEl.classList.add("profile-img-box");
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", picture);
  imgBoxEl.append(imgEl);

  textArea.append(nameEl, locationEl, taglineEl);
  photographHeader.append(textArea, imgBoxEl);
}

export {photographerTemplate, photographHeader, photographLikePrice, photographModal};