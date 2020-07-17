let categories = document.querySelectorAll(".photo-category");
let urls = [
  "img/gallery-photo1.jpg",
  "img/gallery-photo2.jpg",
  "img/gallery-photo3.jpg",
  "img/gallery-photo4.jpg",
];

for (let i = 0; i < urls.length; i++) {
  categories[i].style = `
    background: linear-gradient( 0deg,
        rgba(31, 31, 31, 0.73),
        rgba(31, 31, 31, 0.73)
      ), url('${urls[i]}');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;`;
}

let viewportHeight = window.innerHeight;
let hero = document.querySelector(".hero");
let heroHeightVH =
  100 - (2 /* 2rem -> nav height*/ * 16 * 100) / viewportHeight;
let heroHeightPX = viewportHeight - 2 /* 2rem -> nav height*/ * 16;
hero.style = `height: ${viewportHeight}px;`;
console.log(window.innerHeight);
