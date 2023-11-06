import { Media } from "/scripts/models/Media.js";

class Image extends Media {
  constructor(id, title, likes, date, price, image) {
    super(id, title, likes, date, price);
    this.image = image;
  }
}

export { Image };