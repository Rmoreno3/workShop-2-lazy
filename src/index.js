const URL = "https://randomfox.ca";
const app = document.querySelector('#images');

const random = (min,max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const createImageNode = () => {
  const imageContainer = document.createElement('div');
  imageContainer.className = 'p-4';
  
  const image = document.createElement('img');
  image.className = 'mx-auto';
  image.width = '320';
  image.src = `${URL}/images/${random(1,122)}.jpg`;

  imageContainer.append(image);

  return imageContainer;
}

const addImage = () => {
  const newImage = createImageNode();
  app.appendChild(newImage);
}

const addButton = document.querySelector('#addImage');
addButton.addEventListener('click', addImage);