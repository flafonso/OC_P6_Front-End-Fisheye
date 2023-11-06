function mediaCard(content) {
  const mediaCard = document.createElement("div");
  mediaCard.className = "media-card";

  mediaCard.innerHTML = `
      <img
        alt="${content.title}"
        src="${content.thumbnail}"
      />
      <div>
        <h2 class="title">${content.title}</h2>
        <div>
          <p>${content.likes}</p>
          <img src="/assets/icons/heart.svg"/>
        </div>
      </div>
  `;
  return mediaCard;
}

export { mediaCard };