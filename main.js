// change style on navbar
document.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0); //when we scroll value of y on window is more than 0 them it will trigger
});
//show /hide faq answer
let faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");
    //chnage icon to -
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className == "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

// SharedWorker.hide nav menu
const menu = document.querySelector(".nav__menu"),
  menuBtn = document.querySelector("#open-menu-btn"),
  closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
});

for (let i = 1; i <= 18; i++) {
  $(".courses__container").append(`<article class="course">
<div class="course__image">
  <img src="/school website/images/course${i}.jpg" alt="" />
</div>
<div class="course__info">
  <h4>Example ${i}</h4>
  <p>The Button wont work (Space FOr course Info)</p>
  <a href="courses.html" class="btn btn-primary">Learn more</a>
</div>
</article>`);
}
