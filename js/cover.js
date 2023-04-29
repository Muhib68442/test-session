// Change Intro Cover Image (Randomly)(JS-Array)(5sec Interval)


const desktopCover = document.querySelector('.desktop-cover');
const mobileCover = document.querySelector('.mobile-cover');

function changeCover(coverElement, coverImages) {
  if (coverImages.length === 0) {
    
    
  }
  
  const randomIndex = Math.floor(Math.random() * coverImages.length);
  const randomImage = coverImages[randomIndex];
  
  // Remove the used image from the array
  coverImages.splice(randomIndex, 1);
  
  coverElement.style.backgroundImage = `url(${randomImage})`;
}

changeCover(desktopCover, desktopCoverImages);
changeCover(mobileCover, mobileCoverImages);

// Change desktop and mobile cover images every 10 seconds
setInterval(() => {
  changeCover(desktopCover, desktopCoverImages);
  changeCover(mobileCover, mobileCoverImages);
}, 10000);
