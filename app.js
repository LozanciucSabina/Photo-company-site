let viewportHeight = window.innerHeight;

let hero = document.querySelector(".hero");
let welcome = document.querySelector(".welcome");
let contact = document.querySelector(".contact-form-wrapper");
let footer = document.querySelector("footer");
let categories = document.querySelectorAll(".photo-category");

hero.style = `height: ${viewportHeight}px;`;
welcome.style = `height: ${viewportHeight}px;`;
contact.style = `height: ${viewportHeight + 50}px;`;
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

let formButton = contact.querySelector("input[type = 'button']");

class Customer {
  constructor(name, surname, phone, message) {
    this.name = name;
    this.surname = surname;
    this.phone = phone;
    this.message = message;
  }
}

formButton.addEventListener("click", () => {
  let form = contact.querySelector("form");
  let name = form.querySelector("#name").value;
  let surname = form.querySelector("#surname").value;
  let phone = form.querySelector("#phone").value;
  let message = form.querySelector("#message").value;

  let customer = new Customer(name, surname, phone, message);
  console.log(customer);

  form.reset();
});

categories.forEach((category) => {
  let firstChild = category.firstElementChild;
  let lastChild = category.lastElementChild;

  category.onmouseover = () => {
    firstChild.style.left = "1rem";
    lastChild.style.right = "1rem";
  };

  category.onmouseout = () => {
    firstChild.style.left = "0rem";
    lastChild.style.right = "0rem";
  };
});
