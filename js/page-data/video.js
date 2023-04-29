
  // get the container element
  const container = document.querySelector('.content-container');
  
  // keep track of the current video index
  let currentVideoIndex = 1;
  
  // function to load and display the next video
  function loadNextVideo() {
    console.log(`loadNextVideo called`); // log that the function was called
  
    // check if there are more videos to load
    if (currentVideoIndex < videos.length) {
      // get the current video object
      const video = videos[currentVideoIndex];
  
      // create a new content element
      const content = document.createElement('div');
      content.classList.add('content-video');
  
      // create the thumbnail element
      const thumbnail = document.createElement('img');
      thumbnail.src = video.thumbnail; // set the thumbnail source
      thumbnail.alt = 'thumbnail';
      thumbnail.classList.add('content-image');
  
      // create the content text element
      const contentText = document.createElement('div');
      contentText.classList.add('content-text-video');
  
      // create the title element
      const title = document.createElement('p');
      title.classList.add('content-title');
      title.textContent = video.title; // set the title text
  
      // create the link element
      const link = document.createElement('a');
      link.classList.add('content-link');
      link.href = video.url; // set the link URL
      link.target = '_blank'; // open the link in a new tab
      link.innerHTML = '<i class="fa-solid fa-play"></i> Play'; // set the link text and icon
  
      // append the title and link elements to the content text element
      contentText.appendChild(title);
      contentText.appendChild(link);
  
      // append the thumbnail and content text elements to the content element
      content.appendChild(thumbnail);
      content.appendChild(contentText);
  
      // append the content element to the container
      container.appendChild(content);
  
      // increment the current video index
      currentVideoIndex++;
  
      // load the next video after this one has been added to the DOM
      loadNextVideo();
    }
  }
  
  // listen for scroll events on the window
  window.addEventListener('scroll', () => {
    // check if the user is close to the bottom of the page
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
      // load and display the next video
      loadNextVideo();
    }
  });
  
  // load the first 6 videos on page load
  loadNextVideo(6);
  