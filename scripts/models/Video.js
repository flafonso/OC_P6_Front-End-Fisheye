import { Media } from "/scripts/models/Media.js";

class Video extends Media {
  constructor(id, title, likes, date, price, video) {
    super(id, title, likes, date, price);
    this.video = video;
  }

  get src() {
    return `/assets/media/${this.video}`;
  }

  get thumbnail() {
    return `
        <video>
          <source src="${this.src}" type="video/mp4" />
        </video>
    `;
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
            <svg viewBox="0 0 22 21">
              <use xlink:href="/assets/icons/heart.svg#heart"></use>
            </svg>
          </div>
        </div>
    `;
    return domCard;
  }
}

export { Video };
