async function getDatas() {  // eslint-disable-line no-unused-vars
  const response = await fetch("./data/photographers.json");
  const datas = await response.json();
  console.log(datas);
  return datas;
}

async function getPhotographer(datas) {  // eslint-disable-line no-unused-vars
  const params = new URL(document.location).searchParams;
  const id = parseInt(params.get("id"));

  const photographer = datas.photographers.find(photographer => photographer.id === id);
  console.log(id, photographer);

  return photographer;
}