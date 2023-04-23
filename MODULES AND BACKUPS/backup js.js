// 




// get the container element
const container = document.querySelector('.content-container');

// keep track of the current image index
let currentImageIndex = 0;

// function to load and display multiple images
function loadNextImages(count) {
    console.log(`loadNextImages called with count = ${count}`); // log that the function was called

    // load the specified number of images
    for (let i = 0; i < count; i++) {
        // check if there are more images to load   
        if (currentImageIndex < parallel.length) {  // ARRAY_NAME
            // get the current image object
            const image = parallel[currentImageIndex];  // ARRAY_NAME

            // create a new content element
            const content = document.createElement('div');
            content.classList.add('content');

            // create the thumbnail element
            const thumbnail = document.createElement('img');
            thumbnail.src = 'thumbnail.jpg'; // set the thumbnail source
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
            });

            // create the caption element
            const caption = document.createElement('p');
            caption.classList.add('content-caption');
            caption.textContent = image.caption; // set the caption text

            // create the details element
            const detailsElement = document.createElement('p');
            detailsElement.classList.add('content-details');
            detailsElement.textContent = image.details; // set the details text
//
            // append the elements to the content element
            content.appendChild(img);
            content.appendChild(caption);
            content.appendChild(detailsElement);

            // append the content element to the container
            container.appendChild(content);

            // increment the current image index
            currentImageIndex++;
        }
    }
}

// listen for scroll events on the window
window.addEventListener('scroll', () => {
    // check if the user is close to the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
        // load and display 5 new images
        loadNextImages(5);
    }
});

// load the first 5 images on page load
loadNextImages(5);
