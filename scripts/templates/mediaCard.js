function mediaCard(content) {
  const mediaCard = document.createElement("div");
  mediaCard.className = "media-card";

  mediaCard.innerHTML = `
      <div class="card-thumbnail">
        ${content.thumbnail}
      </div>
      <div class="card-content">
        <h2 class="title">${content.title}</h2>
        <div class="like">
          <p>${content.likes}</p>
          <img src="/assets/icons/heart.svg"/>
        </div>
      </div>
  `;
  return mediaCard;
}

export { mediaCard };