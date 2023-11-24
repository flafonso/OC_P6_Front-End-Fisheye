/* eslint-disable no-prototype-builtins */
import { Image } from "../models/Image.js";
import { Video } from "../models/Video.js";
class MediaFactory {
  static create(content) {
    if (content.hasOwnProperty("image")) {
      return new Image(
        content.id,
        content.title,
        content.likes,
        content.date,
        content.price,
        content.image
      );
    } else if (content.hasOwnProperty("video")) {
      return new Video(
        content.id,
        content.title,
        content.likes,
        content.date,
        content.price,
        content.video
      );
    }
  }
}

export { MediaFactory };