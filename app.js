let windowH = window.innerHeight;
let pageElements = document.querySelectorAll('.element');
let nav = document.querySelector('nav');
let navH = parseInt(nav.style.height);


pageElements.forEach( elem => {
  if (elem.tagName === 'footer' || elem.tagName === 'FOOTER') {
    elem.style=`height: ${windowH * 3/4}px;`;
  } else {
    elem.style = `height: ${windowH}px`;
  }
});


let categories = document.querySelectorAll(".photo-category");
let urls = [
  "./img/gallery-photo1.jpg",
  "./img/gallery-photo2.jpg",
  "./img/gallery-photo3.jpg",
  "./img/gallery-photo4.jpg",
];


for (let i = 0; i < urls.length; i++) {
  categories[i].style = `
    background: linear-gradient( 0deg,
        rgba(31, 31, 31, 0.73),
        rgba(31, 31, 31, 0.73)
      ), url('${urls[i]}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${windowH/2}px;`;
}

function hoverEffect(elem) {
   
}

categories.forEach(elem => {
  elem.addEventListener('onmouseover', hoverEffect);
});
