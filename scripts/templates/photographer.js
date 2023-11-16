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
  return { name, picture, id, city, country, tagline, price, getUserCardDOM };
}


function photographModal(photographer) {
  const titleEl = document.querySelector(".modal header h2");
  titleEl.innerHTML = `Contactez-moi
                      <br>
                      ${photographer.name}`;
}

// function to set price and like values
function photographLikePrice(photographer) {
  // get price element and set price text content
  const priceEl = document.querySelector(".price");
  priceEl.textContent = `${photographer.price}€ / jour`;

  // get total like element and  set total like value
  const totalLikeEl = document.querySelector(".total-like");
  const totalLikeValue = document.createElement("span");
  totalLikeValue.textContent = "12 043";  //Until we get the real value from the data
  totalLikeEl.prepend(totalLikeValue);
}

// Function to display photographer details
function photographHeader(photographer) {
  // Select photograph header and define photographer's portrait picture path
  const photographHeader = document.querySelector(".photograph-header");
  const picture = `assets/photographers/profile_picture/${photographer.portrait}`;

  // Create text area and add details
  const textArea = document.createElement("div");
  textArea.classList.add("text-area");
  const nameEl = document.createElement("h1");
  nameEl.textContent = photographer.name;
  const locationEl = document.createElement("p");
  locationEl.classList.add("location");
  locationEl.textContent = `${photographer.city}, ${photographer.country}`;
  const taglineEl = document.createElement("p");
  taglineEl.textContent = photographer.tagline;
  textArea.append(nameEl, locationEl, taglineEl);

  // Create profile image box and add photographer's portrait
  const imgBoxEl = document.createElement("div");
  imgBoxEl.classList.add("profile-img-box");
  const imgEl = document.createElement("img");
  imgEl.setAttribute("src", picture);
  imgBoxEl.append(imgEl);

  // Append text area and profile image box to photograph header
  photographHeader.append(textArea, imgBoxEl);
}

export {photographerTemplate, photographHeader, photographLikePrice, photographModal};