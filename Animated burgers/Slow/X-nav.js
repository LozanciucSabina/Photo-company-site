const burgerAnim = () => {
  const burger = document.querySelector(".burger");
  const lines = document.querySelectorAll(".bar");
  burger.addEventListener("click", () => {
    if (burger.style.animation) {
      burger.style.animation = "";
    } else {
      burger.style.animation = `underscored-x 0.5s ease-out forwards`;
    }

    burger.classList.toggle("lineAnimation");
  });
};

burgerAnim();
