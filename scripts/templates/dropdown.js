const dropdownEl = document.querySelector(".dropdown");

const selectEl = document.querySelector(".select");
const selectedEl = document.querySelector(".selected");
const arrowEl = document.querySelector(".arrow");
const optionsMenuEl = document.querySelector(".options-menu");
const optionsEl = document.querySelectorAll(".options-menu p");

function dropdownClic() {
  // Little change of dropdown style when it's open
  dropdownEl.classList.toggle("dropdown--open");
  // Show or hide options menu
  optionsMenuEl.classList.toggle("options-menu--visible");
  arrowEl.classList.toggle("arrow--rotate");
}

selectEl.addEventListener("click", dropdownClic);

// Click event handler for options
optionsEl.forEach((option) => {
  option.addEventListener("click", () => {
    selectedEl.innerHTML = option.innerHTML;
    dropdownClic();

    // Re-displays the option that is no longer selected and removes the separator bars
    optionsEl.forEach((option) => {
      if (option.classList.contains("hide-option")) {
        option.classList.remove("hide-option");
      }
      if (option.classList.contains("middle-separation")) {
        option.classList.remove("middle-separation");
      }
    });

    // Hide the option you have just clicked from the list of options
    option.classList.add("hide-option");
    /**
     * By default, Date (optionsEl[1]) has the separators because it
     * is in the middle of the list at the start, but if Popularity
     * (optionsEl[0]) is not selected, it ends up in the middle, so it takes the separators.
     */
    optionsEl[0] === option
      ? optionsEl[1].classList.add("middle-separation")
      : optionsEl[0].classList.add("middle-separation");
  });
});