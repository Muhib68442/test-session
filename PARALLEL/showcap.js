const images = document.querySelectorAll('.content-image');
const detailsDivs = document.querySelectorAll('.content-text');

images.forEach((img, index) => {
  img.addEventListener('click', () => {
    detailsDivs[index].classList.toggle('show');
  });
});