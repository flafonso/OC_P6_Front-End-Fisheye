/* eslint-disable*/

const dropdownEl = document.querySelector(".dropdown");

const selectEl = document.querySelector(".select");
const selectedEl = document.querySelector(".selected");
const arrowEl = document.querySelector(".arrow");
const optionsMenuEl = document.querySelector(".options-menu");
const optionsEl = document.querySelectorAll(".options-menu p");

console.log("selectEl", selectEl);
console.log("selectedEl", selectedEl);
console.log("arrowEl", arrowEl);
console.log("optionsMenuEl", optionsMenuEl);

selectEl.addEventListener("click", () => {
  dropdownEl.classList.toggle("dropdown--open");
  optionsMenuEl.classList.toggle("options-menu--visible");
});

optionsEl.forEach((option) => {
  option.addEventListener("click", () => {
    console.log("option", option);
    selectedEl.innerHTML = option.innerHTML;
    optionsMenuEl.classList.remove("options-menu--visible");
    dropdownEl.classList.remove("dropdown--open");
    optionsEl.forEach((option) => {
      if (option.classList.contains("active")) {
        option.classList.remove("active");
      }
      if (option.classList.contains("middle-separation")) {
        option.classList.remove("middle-separation");
      }
    });
    optionsEl[0] === option
      ? optionsEl[1].classList.add("middle-separation")
      : optionsEl[0].classList.add("middle-separation");
    option.classList.add("active");
  });
});
