// get the container element
const container = document.querySelector('.content-container');

// keep track of the current image index
let currentImageIndex = 1;

// function to load and display the next image
function loadNextImage() {
  console.log(`loadNextImage called`); // log that the function was called

  // check if there are more images to load
  if (currentImageIndex < nature.length) { // ARRAY_NAME
    // get the current image object
    const image = nature[currentImageIndex]; // ARRAY_NAME

    // create a new content element
    const content = document.createElement('div');
    content.classList.add('content');

    // create the thumbnail element
    const thumbnail = document.createElement('img');
    thumbnail.src = '../../res/img-thumbnail.png'; // set the thumbnail source
    thumbnail.alt = 'thumbnail';
    thumbnail.classList.add('content-thumbnail');

    // append the thumbnail element to the content element
    content.appendChild(thumbnail);

    // create the image element
    const img = document.createElement('img');
    img.src = image.src; // set the image source
    img.alt = 'content-image';
    img.classList.add('content-image');
    img.style.display = 'none'; // hide the image initially

    // listen for the load event on the image element
    img.addEventListener('load', () => {
      console.log('image loaded'); // log that the image has loaded

      // remove the thumbnail element
      content.removeChild(thumbnail);

      // show the image element
      img.style.display = 'block';

      // load the next image after this one has loaded
      currentImageIndex++;
      loadNextImage();
    });

    // append the elements to the content element
    content.appendChild(img);

    // append the content element to the container
    container.appendChild(content);
  }
}
  
  // listen for scroll events on the window
  window.addEventListener('scroll', () => {
    // check if the user is close to the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      // load and display the next image
      loadNextImage();
    }
  });
  
  // load the first 6 images on page load
  loadNextImage(6);
