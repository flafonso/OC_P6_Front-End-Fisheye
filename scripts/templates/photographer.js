import { MediaFactory } from "./scripts/factories/MediaFactory.js";
import { Lightbox } from "./scripts/templates/lightbox.js";

function photographerTemplate(data) {
  const { name, portrait, id, city, country, tagline, price } = data;

  const picturePath = `assets/photographers/profile_picture/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.classList.add("photographer-card");
    article.innerHTML = `
        <a href="photographer.html?id=${id}" alt="">
          <div class="profile-img-box">
            <img src="${picturePath}" alt="${name}"/>
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

  let totalLike = 0;
  userMedia.forEach(media => totalLike += media.likes);

  const picturePath = `assets/photographers/profile_picture/${portrait}`;
  const selectedEl = document.querySelector(".selected");

  // Function to display photographer's info in the header
  function fillPhotographHeader() {
    const photographHeader = document.querySelector(".photograph-header");
    photographHeader.innerHTML = `
      <div class="text-area">
        <h1>${name}</h1>
        <p class="location">${city}, ${country}</p>
        <p>${tagline}</p>
      </div>
      <button class="contact_button contact--header" name="Contact Me">Contactez-moi</button>
      <div class="profile-img-box">
        <img src="${picturePath}" alt="${name}"/>
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
        <span>${totalLike}</span>
        <img src="assets/icons/heart.svg" alt="Total likes from all the photographer's media">
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
  function fillMedia() {
    const mediaSection = document.querySelector(".media-section");
    mediaSection.innerHTML = "";

    userMedia.forEach((media) => {
      mediaSection.append(media.domCard);
    });
    Lightbox.init();
  }
  function sortMedia() {
    switch (selectedEl.innerHTML) {
    case "Date":
      userMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
      break;
    case "Titre":
      userMedia.sort((a, b) => a.title.localeCompare(b.title));
      break;
    default:
      userMedia.sort((a, b) => b.likes - a.likes);
    }
  }
  return { fillPhotographHeader, fillLikeAndPrice, fillModalForm, fillMedia, sortMedia};
}


export {photographerTemplate, userPageTemplate};