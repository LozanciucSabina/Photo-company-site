<<<<<<< HEAD
let viewportHeight = window.innerHeight;

let hero = document.querySelector(".hero");
let welcome = document.querySelector(".welcome");
let contact = document.querySelector(".contact-form-wrapper");
let footer = document.querySelector("footer");
=======
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


>>>>>>> d2277948e2691f2152a72986ebe9f40a570656b6
let categories = document.querySelectorAll(".photo-category");

hero.style = `height: ${viewportHeight}px;`;
welcome.style = `height: ${viewportHeight}px;`;
contact.style = `height: ${viewportHeight}px;`;
footer.style = `height: ${viewportHeight}px;`;

let urls = [
  "img/gallery-photo1.jpg",
  "img/gallery-photo2.jpg",
  "img/gallery-photo3.jpg",
  "img/gallery-photo4.jpg",
];
<<<<<<< HEAD
=======


>>>>>>> d2277948e2691f2152a72986ebe9f40a570656b6
for (let i = 0; i < urls.length; i++) {
  categories[i].style = `
    background: linear-gradient( 0deg,
        rgba(31, 31, 31, 0.73),
        rgba(31, 31, 31, 0.73)
      ), url('${urls[i]}');
<<<<<<< HEAD
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: ${viewportHeight / 2}px`;
=======
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${windowH/2}px;`;
>>>>>>> d2277948e2691f2152a72986ebe9f40a570656b6
}

function hoverEffect(elem) {
   
}

categories.forEach(elem => {
  elem.addEventListener('onmouseover', hoverEffect);
});
