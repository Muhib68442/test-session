// $(window).on('load',function(){
//     $(".loader").fadeOut(1000);
//     $(".muhib").fadeIn(3000);
// });

window.addEventListener('load', function() {
    var loader = document.querySelector('.loader');
    var main = document.querySelector('main');
  
    loader.style.transition = 'opacity 1s ease-in-out';
    loader.style.opacity = 0;
  
    setTimeout(function() {
      main.style.transition = 'opacity 1s ease-in-out';
      main.style.opacity = 1;
    }, 1000);
  });

