const carousel = document.querySelector('.carousel');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');
const carouselImages = carousel.querySelector('.carousel-images');
let currentImage = 0;

// Add images from your arrays to the carousel
const imageArrays = [carouselArray]; // replace with the names of your arrays
imageArrays.forEach(imageArray => {
  imageArray.forEach(imageObject => {
    const image = document.createElement('img');
    image.src = imageObject.src;
    carouselImages.appendChild(image);
  });
});

const images = carousel.querySelectorAll('img');

prevButton.addEventListener('click', () => {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentImage * 100;
  images.forEach(image => {
    image.style.transform = `translateX(${offset}%)`;
  });
}


let interval = setInterval(() => {
  nextButton.click();
}, 5000);

nextButton.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(() => {
    nextButton.click();
  }, 5000);
});

prevButton.addEventListener('click', () => {
  clearInterval(interval);
  interval = setInterval(() => {
    nextButton.click();
  }, 5000);
});