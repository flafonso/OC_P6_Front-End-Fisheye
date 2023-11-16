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
}

export { Video };
