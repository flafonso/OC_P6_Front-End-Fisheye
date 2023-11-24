import { Media } from "./scripts/models/Media.js";

class Image extends Media {
  constructor(id, title, likes, date, price, image) {
    super(id, title, likes, date, price);
    this.image = image;
  }

  get src() {
    return `/assets/media/${this.image}`;
  }

  get thumbnail() {
    return `<img src="${this.src}" alt="${this.title}"/>`;
  }

  xxxx() {}

  get domCard() {
    const domCard = document.createElement("article");
    domCard.className = "media-card";

    domCard.innerHTML = `
        <div class="card-thumbnail" aria-label="Lilac breasted roller, closeup view">
          ${this.thumbnail}
        </div>
        <div class="card-content">
          <h2 class="title">${this.title}</h2>
          <div class="like">
            <p>${this.likes}</p>
            <svg viewBox="0 0 22 21" role="img">
              <use xlink:href="/assets/icons/heart.svg#heart"></use>
            </svg>
          </div>
        </div>
    `;
    domCard.querySelector(".like").addEventListener("click", (e) => {
      const likeEl = e.currentTarget;
      const totalLikeEl = document.querySelector(".total-like").firstElementChild;
      let totalLikeValue = parseInt(totalLikeEl.textContent);
      if (likeEl.classList.contains("is-liked")) {
        this.likes--;
        totalLikeEl.innerText = totalLikeValue - 1;
      } else {
        this.likes++;
        totalLikeEl.innerText = totalLikeValue + 1;
      }
      likeEl.firstElementChild.innerText = `${this.likes}`;
      likeEl.classList.toggle("is-liked");
    });
    return domCard;
  }
}

export { Image };
