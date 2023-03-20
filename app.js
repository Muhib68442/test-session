const searchBar = document.querySelector('#searchBox')
const searchWrap = document.querySelector('.searchBar')
const classList = document.querySelector('.classList')
const searchInput = document.querySelector('.searchBar form')
const map=document.querySelector('.mapImgWrap img')
const classSingle=document.querySelectorAll('.classSingle')
const classSingleUl=document.querySelectorAll('.dropList')


const allValues = document.querySelectorAll('[data-search]')

document.addEventListener('click', (e) => {
    if (e.target.matches(['#searchBox', '.classList', '.classWrap', '.ulList', '.searchOptions'])) {
        searchWrap.style.cssText = `
            // bottom:'';
            // top:80px;
            // border-radius:20px;
            // transition: 0.3s;
            // background-color:aliceblue;
            // padding : 20px;
            // left: 50%;
            // transform: translateX(-50%);
        `

        classList.style.display = 'block'

    } else {
        searchWrap.style.cssText = `
            // top:'';
        `
        classList.style.display = 'none'

    }
})


searchBar.addEventListener('keydown', (e) => {

    allValues.forEach((v) => {
        const value = searchBar.value.toUpperCase().trim()
        let searchValue=v.getElementsByTagName('a')[0].textContent.toUpperCase()

        if (searchValue.includes(value.trim())) {

            v.style.display = ''

        } else {
            v.style.display = 'none'

        }
    })


})

classSingle.forEach((v,i)=>{
  v.addEventListener('click',(e)=>{
    if(classSingleUl[i].classList.contains('display')){
      classSingleUl[i].classList.remove('display')
    }else{
      classSingleUl[i].classList.add('display')

    }
  })
})


const pinchZoom = (imageElement) => {
    let imageElementScale = 1;
  
    let start = {};
  
    // Calculate distance between two fingers
    const distance = (event) => {
      return Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY);
    };
  
    imageElement.addEventListener('touchstart', (event) => {
      console.log('touchstart', event);
      if (event.touches.length === 2) {
        event.preventDefault(); // Prevent page scroll
  
        // Calculate where the fingers have started on the X and Y axis
        start.x = (event.touches[0].pageX + event.touches[1].pageX) / 2;
        start.y = (event.touches[0].pageY + event.touches[1].pageY) / 2;
        start.distance = distance(event);
      }
    });
  
    imageElement.addEventListener('touchmove', (event) => {
      console.log('touchmove', event);
      if (event.touches.length === 2) {
        event.preventDefault(); // Prevent page scroll
        let scale;
  
        // Safari provides event.scale as two fingers move on the screen
        // For other browsers just calculate the scale manually
        if (event.scale) {
          scale = event.scale;
        } else {
          const deltaDistance = distance(event);
          scale = deltaDistance / start.distance;
        }
  
        imageElementScale = Math.min(Math.max(1, scale), 4);
  
        // Calculate how much the fingers have moved on the X and Y axis
        const deltaX = (((event.touches[0].pageX + event.touches[1].pageX) / 2) - start.x) * 2; // x2 for accelarated movement
        const deltaY = (((event.touches[0].pageY + event.touches[1].pageY) / 2) - start.y) * 2; // x2 for accelarated movement
  
        // Transform the image to make it grow and move with fingers
        const transform = `translate3d(${deltaX}px, ${deltaY}px, 0) scale(${imageElementScale})`;
        imageElement.style.transform = transform;
        imageElement.style.WebkitTransform = transform;
        imageElement.style.zIndex = "9999";
      }
    });
}

pinchZoom(map)
  
  