export const catalog = (harvesterArray) => {
    let htmlforHarvest=""
  for (let outerArray of harvesterArray) {
    htmlforHarvest += `<section class="plant">${outerArray.type}</section>`;
  }
  return htmlforHarvest
};
