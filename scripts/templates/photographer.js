function photographerTemplate(data) {  // eslint-disable-line no-unused-vars
  console.log("Data : ", data);
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `assets/photographers/profile_picture/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const cardLink = document.createElement("a");
    cardLink.setAttribute("href", `photographer.html?id=${id}`);

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;

    const locationEl = document.createElement("p");
    locationEl.classList.add("location");
    locationEl.textContent = `${city}, ${country}`;

    const taglineEl = document.createElement("p");
    taglineEl.textContent = tagline;

    const priceEl = document.createElement("p");
    priceEl.classList.add("price");
    priceEl.textContent = price;

    cardLink.append(img, h2);
    article.append(cardLink, locationEl, taglineEl, priceEl);
    return article;
  }
  return { name, picture, id, city, country, tagline, price, getUserCardDOM };
}
