import { MediaFactory } from "/scripts/factories/MediaFactory.js";

function photographerTemplate(data) {
  // console.log("Data : ", data);
  const { name, portrait, id, city, country, tagline, price } = data;

  const picture = `/assets/photographers/profile_picture/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.classList.add("photographer-card");
    article.innerHTML = `
        <a href="photographer.html?id=${id}">
          <div class="profile-img-box">
            <img src="${picture}" />
          </div>
          <h2>${name}</h2>
        </a>
        <p class="location">${city}, ${country}</p>
        <p>${tagline}</p>
        <p class="price">${price}€/jour</p>
    `;
    return article;
  }
  return { getUserCardDOM };
}



function userPageTemplate(data) {
  const { name, portrait, city, country, tagline, price } = data.photographer;

  const userMedia = data.media.map((content) => MediaFactory.create(content));
  console.log("yyyy userMedia", userMedia);

  const picture = `/assets/photographers/profile_picture/${portrait}`;

  // Function to display photographer's info in the header
  function fillPhotographHeader() {
    const photographHeader = document.querySelector(".photograph-header");
    photographHeader.innerHTML = `
      <div class="text-area">
        <h1>${name}</h1>
        <p class="location">${city}, ${country}</p>
        <p>${tagline}</p>
      </div>
      <button class="contact_button contact--header">Contactez-moi</button>
      <div class="profile-img-box">
        <img src="${picture}" />
      </div>
  `;
  }

  // function to set price and like values
  function fillLikeAndPrice() {
    const priceEl = document.querySelector(".price");
    priceEl.textContent = `${price}€ / jour`;

    // get total like element and  set total like value
    const totalLikeEl = document.querySelector(".total-like");
    totalLikeEl.innerHTML = `
        <span>12 043</span>
        <img src="/assets/icons/heart.svg">
    `;
  }

  function fillModalForm() {
    const titleEl = document.querySelector(".modal header h2");
    titleEl.innerHTML = `
        Contactez-moi
        <br>
        ${name}
    `;
  }

  return { fillPhotographHeader, fillLikeAndPrice, fillModalForm };
}


export {photographerTemplate, userPageTemplate};