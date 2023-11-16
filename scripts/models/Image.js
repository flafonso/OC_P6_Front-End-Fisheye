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
}

export { Image };