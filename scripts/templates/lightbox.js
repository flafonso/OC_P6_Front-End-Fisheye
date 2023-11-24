class Lightbox {
  static init() {
    const mediaList = Array.from(
      document.querySelectorAll(".card-thumbnail img, video")
    );
    mediaList.forEach((media) =>
      media.addEventListener(
        "click",
        (e) => new Lightbox(e.currentTarget, mediaList)
      )
    );
  }

  /**
   * @param {HTMLElement} media element
   * @param {List} list of media element
   */
  constructor(mediaEl, mediaList) {
    this.mediaList = mediaList;
    this.element = this.buildDom();
    this._onkeyUp = this.onkeyUp.bind(this);
    this.loadMedia(mediaEl);
    document.querySelector("main").ariaHidden = "true";
    document.body.append(this.element);
    document.addEventListener("keyup", this._onkeyUp);
  }

  /**
   * @param {HTMLElement} media element
   */
  loadMedia(mediaEl) {
    this.currentMedia = mediaEl.outerHTML;
    const content = this.element.querySelector(".lightbox-content");
    const loader = document.createElement("div");
    loader.classList.add("lightbox-loader");
    content.innerHTML = "";
    content.append(loader);
    this.element.querySelector(".media-title").innerText =
      mediaEl.parentElement.parentElement.querySelector(".title").innerText;
    mediaEl = mediaEl.cloneNode(true);
    if (mediaEl.tagName === "IMG") {
      mediaEl.onload = () => {
        content.removeChild(loader);
        content.appendChild(mediaEl);
      };
    } else {
      mediaEl.onloadeddata = () => {
        content.removeChild(loader);
        mediaEl.controls = true;
        content.appendChild(mediaEl);
      };
    }
  }

  /**
   * @param {KeyboardEvent} e
   */
  onkeyUp(e) {
    if (e.key === "Escape") {
      this.close(e);
    } else if (e.key === "ArrowRight") {
      this.next(e);
    } else if (e.key === "ArrowLeft") {
      this.prev(e);
    }
  }

  /**
   * @param {MouseEvent|KeyboardEvent} e
   */
  close(e) {
    e.preventDefault();
    this.element.classList.add("lightbox-fadeOut");
    window.setTimeout(() => {
      this.element.parentElement?.removeChild(this.element);
    }, 500);
    document.removeEventListener("keyup", this._onkeyUp);
    document.querySelector("main").ariaHidden = "false";
  }

  /**
   * @param {MouseEvent|KeyboardEvent} e
   */
  next(e) {
    e.preventDefault();
    let i = this.mediaList.findIndex(
      (media) => media.outerHTML === this.currentMedia
    );
    if (i === this.mediaList.length - 1) {
      i = -1;
    }
    this.loadMedia(this.mediaList[i + 1]);
  }

  /**
   * @param {MouseEvent|KeyboardEvent} e
   */
  prev(e) {
    e.preventDefault();
    let i = this.mediaList.findIndex(
      (media) => media.outerHTML === this.currentMedia
    );
    if (i === 0) {
      i = this.mediaList.length;
    }
    this.loadMedia(this.mediaList[i - 1]);
  }

  /**
   * @return {HTMLElement}
   */
  buildDom() {
    const dom = document.createElement("div");
    dom.classList.add("lightbox");
    dom.ariaLabel = "Media closeup view";
    dom.role = "dialog";
    dom.innerHTML = `
        <button class="lightbox-close" aria-label="Close dialog"></button>
        <button class="lightbox-next" aria-label="Next media"></button>
        <button class="lightbox-prev" aria-label="Previous media"></button>
        <div class="lightbox-content"></div>
        <p class="media-title">media title</p>
    `;
    dom
      .querySelector(".lightbox-close")
      .addEventListener("click", this.close.bind(this));
    dom
      .querySelector(".lightbox-next")
      .addEventListener("click", this.next.bind(this));
    dom
      .querySelector(".lightbox-prev")
      .addEventListener("click", this.prev.bind(this));
    return dom;
  }
}

export { Lightbox };
