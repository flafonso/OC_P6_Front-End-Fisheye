import { Media } from "/scripts/models/Media.js";

class Image extends Media {
  constructor(id, title, likes, date, price, image) {
    super(id, title, likes, date, price);
    this.image = image;
  }

  get src() {
    return `/assets/media/${this.image}`;
  }

  get thumbnail() {
    return `<img src="${this.src}" alt="${this.title}" />`;
  }

  get domCard() {
    const domCard = document.createElement("div");
    domCard.className = "media-card";

    domCard.innerHTML = `
        <div class="card-thumbnail">
          ${this.thumbnail}
        </div>
        <div class="card-content">
          <h2 class="title">${this.title}</h2>
          <div class="like">
            <p>${this.likes}</p>
            <img src="/assets/icons/heart.svg"/>
          </div>
        </div>
    `;
    return domCard;
  }
}

export { Image };