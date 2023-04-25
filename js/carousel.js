const carouselItems = document.querySelector('.carousel-items');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');


// Choose one of the arrays randomly
const arrays = [aes, city, nature, flower, game];
const randomIndex = Math.floor(Math.random() * arrays.length);
const items = arrays[randomIndex];

let currentItem = Math.floor(Math.random() * items.length);

function showItem(index) {
  carouselItems.style.transform = `translateX(-${index * 100}%)`;
}

showItem(currentItem);

prevButton.addEventListener('click', () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = items.length - 1;
  }
  showItem(currentItem);
});

nextButton.addEventListener('click', () => {
  currentItem++;
  if (currentItem >= items.length) {
    currentItem = 0;
  }
  showItem(currentItem);
});

function loadImages() {
  items.forEach((item, index) => {
    const element = document.createElement('div');
    element.classList.add('carousel-item');
    element.style.backgroundImage = `url(${item})`;
    carouselItems.appendChild(element);
  });
}

loadImages();
