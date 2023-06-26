// Click Text To Copy
const copyTextElements = document.querySelectorAll('.copy-text');

copyTextElements.forEach(function (element) {
  element.addEventListener('click', function () {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand('copy');
    alert('Command copied to clipboard!');
  });
});


// SEARCH 

function searchFunction() {
  let input = document.querySelector('.search-input').value;

  let cards = document.querySelectorAll('.card');
  let categoryTitles = document.querySelectorAll('.card-category-title');
  let cardWrappers = document.querySelectorAll('.card-wrapper');

  for (let title of categoryTitles) {
    title.style.display = 'none';
  }
  for (let wrapper of cardWrappers) {
    wrapper.style.display = 'none';
  }

  // loop through the cards and check if the app name matches the search input
  for (let card of cards) {
    let appName = card.querySelector('.card-name').textContent;
    if (appName.toLowerCase().includes(input.toLowerCase())) {

      card.style.display = 'block';
      card.parentNode.style.display = 'flex';
      card.parentNode.style.justifyContent = 'center';
    } else {

      card.style.display = 'none';
    }
  }
}

function closeFunction() {
  // clear the search input
  document.querySelector('.search-input').value = '';

  // show all the cards, category titles and card wrappers
  let cards = document.querySelectorAll('.card');
  let categoryTitles = document.querySelectorAll('.card-category-title');
  let cardWrappers = document.querySelectorAll('.card-wrapper');

  for (let title of categoryTitles) {
    title.style.display = 'block';
  }
  for (let wrapper of cardWrappers) {
    wrapper.style.display = 'flex';
    wrapper.style.justifyContent = 'space-between';
  }
  for (let card of cards) {
    card.style.display = 'block';
  }
}

function handleEnterKey(event) {
  if (event.keyCode === 13) {
    // user pressed the Enter key
    // call the searchFunction
    searchFunction();
  }
}



/* Click to show Wallpaper or Icon (Switcher) */

// function showContent(section) {
//   document.querySelectorAll('.content-section').forEach(function(el) {
//       el.style.display = 'none';
//   });
//   document.getElementById(section).style.display = 'block';

//   document.querySelector('.personalize-show-default').style.display = 'none';
// }

function showContent(section, link) {
  document.querySelectorAll('.content-section').forEach(function(el) {
      el.style.display = 'none';
  });
  document.getElementById(section).style.display = 'block';

  document.querySelector('.personalize-show-default').style.display = 'none';

  document.querySelectorAll('.switcher-div a').forEach(function(el) {
      el.classList.remove('active');
  });
  link.classList.add('active');
}



// FEATURES : 

//Light & Dark Mode Switch

document.addEventListener('DOMContentLoaded', function() {
  const toggleSwitch = document.querySelector('.toggle');
  const coverImage = document.querySelector('.pc-cover');

  // Apply the saved theme on page load
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    coverImage.src = `res/intro/pc-cover-${currentTheme}.jpg`;

    if (currentTheme === 'light') {
      toggleSwitch.checked = true;
    }
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'light');
      coverImage.src = 'res/intro/pc-cover-light.jpg';
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      coverImage.src = 'res/intro/pc-cover-dark.jpg';
      localStorage.setItem('theme', 'dark');
    }
  }

  toggleSwitch.addEventListener('change', switchTheme, false);
});
