let viewportHeight = window.innerHeight;

let hero = document.querySelector(".hero");
let welcome = document.querySelector(".welcome");
let contact = document.querySelector(".contact-form-wrapper");
let footer = document.querySelector("footer");
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
for (let i = 0; i < urls.length; i++) {
  categories[i].style = `
    background: linear-gradient( 0deg,
        rgba(31, 31, 31, 0.73),
        rgba(31, 31, 31, 0.73)
      ), url('${urls[i]}');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: ${viewportHeight / 2}px`;
}
