function isEmpty(value) {
  return value === "" ? true : false;
}

function getFormCheck() {  // eslint-disable-line no-unused-vars
  return {
    firstName: {
      element: document.querySelector("#first"),
      get value() {
        return this.element.value.trim();
      },
      get valid() {
        if (isEmpty(this.value) || this.value.length < 2) {
          this.message =
            "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
          return false;
        }
        return true;
      },
    },
    lastName: {
      element: document.querySelector("#last"),
      get value() {
        return this.element.value.trim();
      },
      get valid() {
        if (isEmpty(this.value) || this.value.length < 2) {
          this.message =
            "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
          return false;
        }
        return true;
      },
    },
    email: {
      element: document.querySelector("#email"),
      get value() {
        return this.element.value.trim();
      },
      get valid() {
        let regexEmail = new RegExp(
          "^(\"(?:[!#-[]-~]|\\[\t -~])*\"|[!#-'*+-/-9=?A-Z^-~](?:.?[!#-'*+-/-9=?A-Z^-~])*)@([!#-'*+-/-9=?A-Z^-~](?:.?[!#-'*+-/-9=?A-Z^-~])*|[[!-Z^-~]*])$"  // eslint-disable-line no-control-regex
        );
        if (isEmpty(this.value) || !regexEmail.test(this.value)) {
          this.message = "Veuillez entrer une adresse email valide.";
          return false;
        }
        return true;
      },
    },
    userMessage: {
      element: document.querySelector("#user-message"),
      get value() {
        return this.element.value.trim();
      },
      get valid() {
        if (isEmpty(this.value) || this.value.length < 10) {
          this.message =
            "Veuillez entrer 10 caractères ou plus pour votre message.";
          return false;
        }
        return true;
      },
    },
    // New "valid" property that depends on the "valid" properties of internal objects
    get valid() {
      let isValid = true;
  
      for (const key in this) {
        if (this.hasOwnProperty(key) && key !== "valid" && key !== "emptyAll") {  // eslint-disable-line no-prototype-builtins
          // console.log(`key = ${key}, => ${key}.valid = ${this[key].valid}`);
          const field = this[key];
  
          // Check field validity and add/delete dataset attributes
          if (!field.valid) {
            isValid = false; // If a property is invalid, "valid" is false
            // console.log(field.element.parentElement);
            field.element.parentElement.dataset.error = field.message;
            field.element.parentElement.dataset.errorVisible = "true";
          } else {
            delete field.element.parentElement.dataset.error;
            delete field.element.parentElement.dataset.errorVisible;
          }
        }
      }
      return isValid; // If all internal properties are valid, "valid" is true
    },
    emptyAll() {
      for (const key in this) {
        if (this.hasOwnProperty(key) && key !== "valid" && key !== "emptyAll") {  // eslint-disable-line no-prototype-builtins
          const field = this[key];
  
          delete field.element.parentElement.dataset.error;
          delete field.element.parentElement.dataset.errorVisible;
        }
      }
      document.forms["contact-me"].reset();
    },
  };
}