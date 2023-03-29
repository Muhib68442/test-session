var sectionsToWatch = document.querySelectorAll('.section-to-watch');
var sidebarLinks = document.querySelectorAll('.sidebar-link');

window.addEventListener('scroll', function() {
  for (var i = 0; i < sectionsToWatch.length; i++) {
    var sectionBounds = sectionsToWatch[i].getBoundingClientRect();
    if (sectionBounds.top < window.innerHeight && sectionBounds.bottom > 0) {
      sidebarLinks[i].classList.add('sidebar-link-active');
    } else {
      sidebarLinks[i].classList.remove('sidebar-link-active');
    }
  }
});
