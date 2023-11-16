class Lightbox {
  static init() {
    const links = document.querySelectorAll(".card-thumbnail img, video");
    console.log("links", links);
    links.forEach((link) =>
      link.addEventListener(
        "click",
        (e) => new Lightbox(e.currentTarget.cloneNode(true))
      )
    );
  }

  /**
   * @param {HTMLElement} Media element
   */
  constructor(mediaEl) {
    console.log("media", mediaEl);
    this.element = this.buildDom();
    console.log("element", this.element);
    this.loadMedia(mediaEl);
    document.body.append(this.element);
  }

  /**
   * @param {HTMLElement} Media element
   */
  loadMedia(mediaEl) {
    const content = this.element.querySelector(".lightbox-content");
    const loader = document.createElement("div");
    loader.classList.add("lightbox-loader");
    // content.innerHTML = "";
    content.append(loader);

    if (mediaEl.tagName === "IMG") {
      mediaEl.onload = () => {
        console.log("Média IMG charger");
        content.removeChild(loader);
        content.appendChild(mediaEl);
      };
    } else {
      mediaEl.onloadeddata = () => {
        console.log("Média VIDEO charger");
        content.removeChild(loader);
        mediaEl.controls = true;
        content.appendChild(mediaEl);
      };
    }
  }

  /**
   * @return {HTMLElement}
   */
  buildDom() {
    const dom = document.createElement("div");
    dom.classList.add("lightbox");
    dom.innerHTML = `
        <button class="lightbox-close">Fermer</button>
        <button class="lightbox-next">Suivant</button>
        <button class="lightbox-prev">Précédent</button>
        <div class="lightbox-content"></div>
    `;
    return dom;
  }
}

/**
 * 
      <div class="lightbox">
        <button class="lightbox-close">Fermer</button>
        <button class="lightbox-next">Suivant</button>
        <button class="lightbox-prev">Précédent</button>
        <div class="lightbox-content">
          <img src="/assets/photographers/account.png" alt="photo de la série Fisheye" />
        </div>
      </div>
 */

export { Lightbox };
