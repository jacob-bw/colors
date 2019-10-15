import c from './helpers/data/colors';

const colors = c.getColors();

const forEachFunc = () => {
  for (let i = 0; i < colors.length; i += 1) {
    console.log('for', colors[i].name);
  }
};

colors.forEach((color) => console.log('forEach', color.name));

const filterFunc = () => {
  const fColors = [];
  for (let j = 0; j < colors.length; j += 1) {
    if (colors[j].hexValue[0] === 'F') {
      fColors.push(colors[j]);
    }
  }
  console.log('for', fColors);
  const filterColors = colors.filter((x) => x.hexValue[0] === 'F');
  console.log('filter', filterColors);
};

const findFunc = () => {
  let colorToFind = {};
  for (let k = 0; k < colors.length; k += 1) {
    if (colors[k].name === 'green') {
      colorToFind = colors[k];
    }
  }
  console.log('for find', colorToFind.hexValue);
  const colorFind = colors.find((x) => x.name === 'green');
  console.log('find', colorFind.hexValue);
};
// 'find' returns one result, 'filter' returns everything within the parameters and creates a new array

const mapFunc = () => {
  // creating an array of h1 tags for each color name
  const h1Tags = [];
  for (let l = 0; l < colors.length; l += 1) {
    h1Tags.push(`<h1>${colors[l].name}</h1>`);
  }
  console.log('for', h1Tags);
  const colorMap = colors.map((color) => `<h1>${color.name}</h1>`);
  console.log('map', colorMap);
};

const reduceFunc = () => {
// get total number of upvotes
  let total = 0;
  for (let m = 0; m < colors.length; m += 1) {
    total += colors[m].upVotes;
  }
  console.log('for', total);
  const upVoteTotal = colors.reduce((prev, curr) => prev + curr.upVotes, 0);
  console.log('reduce', upVoteTotal);
};

const init = () => {
  forEachFunc();
  filterFunc();
  findFunc();
  mapFunc();
  reduceFunc();
};

export default { init };
