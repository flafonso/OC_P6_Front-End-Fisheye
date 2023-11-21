import {form} from "/scripts/utils/form.js";

const modal = document.getElementById("contact_modal");

function displayModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
  form.emptyAll();
  document.querySelector("main").ariaHidden = "false";
  modal.ariaHidden = "true";
}

const closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", closeModal);

/**
 * DOM Elements
 */
const formEl = document.querySelector("form");
const formData = document.querySelectorAll(".form-data");
const textLabel = document.querySelector(".success-text");
const formTitle = document.querySelector(".modal header h2");

const submitBtn = document.querySelector("form .contact_button");
submitBtn.addEventListener("click", submission);

const finishBtn = document.querySelector(".btn-finish");
finishBtn.addEventListener("click", (event) => {
  event.preventDefault();
  closeModal();
  switchToForm();
});

/**
 * Hides all .formData elements if status === true and displays them if === false
 * @param { Boolean } status
 */
function displayFormData(status) {
  const displayValue = status ? "none" : "block";
  for (let i = 0; i < formData.length; i++) {
    formData[i].style.display = displayValue;
  }
}

/**
 * Modifies the style of the form and changes the content of textLabel to display the thank-you message
 */
function showMessage() {
  formEl.style.minHeight = "550px";
  formTitle.style.display = "none";
  textLabel.style.display = "block";
}

/**
 * Restores default form style and default textLabel content
 */
function hideMessage() {
  formEl.style.removeProperty("min-height");
  formTitle.style.display = "block";
  textLabel.style.display = "none";
}

/**
 * Changes the style and behavior of the modal's buttons, to match its state
 */
function btnsInMessage() {
  submitBtn.style.display = "none";
  finishBtn.style.display = "block";
  closeBtn.style.marginLeft = "auto";
  closeBtn.addEventListener("click", switchToForm);
  textLabel.style.marginTop = "auto";
}

/**
 * Resets the style and behavior of modal buttons to default
 */
function btnsInForm() {
  submitBtn.style.display = "block";
  finishBtn.style.display = "none";
  closeBtn.style.removeProperty("margin-left");
  closeBtn.removeEventListener("click", switchToForm);
}

/**
 * Calls the functions that will display the form in the modal
 */
function switchToForm() {
  displayFormData(false); // true for hide, false for show
  hideMessage();
  btnsInForm();
}

/**
 * Calls up the functions that will display the thank-you message
 */
function switchToMessage() {
  displayFormData(true); // true for hide, false for show
  showMessage();
  btnsInMessage();
}

function submission(event) {
  event.preventDefault();
  if (form.valid) {
    switchToMessage();
    console.log("valide");
  }
  return console.log("validate fini");
}


function listenContact() {
  const headerContactBtn = document.querySelector(".contact_button.contact--header");
  // console.log(headerContactBtn);
  headerContactBtn.addEventListener("click", () => {
    displayModal();
    document.querySelector("main").ariaHidden = "true";
    modal.ariaHidden = "false";
  });
}

export { listenContact };