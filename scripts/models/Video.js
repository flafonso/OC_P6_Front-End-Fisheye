import { Media } from "/scripts/models/Media.js";

class Video extends Media {
  constructor(id, title, likes, date, price, video) {
    super(id, title, likes, date, price);
    this.video = video;
  }

  get thumbnail() {
    return `
        <video>
          <source src="/assets/media/${this.video}" type="video/mp4" />
        </video>
    `;
  }
}

export { Video };
