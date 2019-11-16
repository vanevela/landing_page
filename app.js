const navSlite = () => {
  const init = document.querySelector(".init");
  const nav = document.querySelector(".top-nav");
  const toplinks = document.querySelectorAll(".top-nav li");

  init.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");
    //Animate links
    toplinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = " ";
      } else {
        link.style.animation = `topnavFade 0.5s ease forwards ${index / 7 +
          1.2}s`;
      }
    });
    //init animation
    init.classList.toggle("toggle");
  });
};
navSlite();
