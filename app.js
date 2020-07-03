let categories = document.querySelectorAll(".photo-category");
let urls = [
  "./img/gallery-photo1.jpg",
  "./img/gallery-photo2.jpg",
  "./img/gallery-photo3.jpg",
  "./img/gallery-photo4.jpg",
];
console.log(categories);
console.log(urls);
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
