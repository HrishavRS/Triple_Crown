const wrapper = document.querySelector(".sliderWrapper");
const people = document.querySelectorAll(".people");

people.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
  });
});
