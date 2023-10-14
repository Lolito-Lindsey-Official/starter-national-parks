/*

const submitHandler = (event) => {
    // prevent the form from reloading automatically
    event.preventDefault();
    console.log("The form was submitted!");
}

const main = () => {
    // Get the form element
    const form = document.querySelector("#park-form");

    //Attach the submit handler
    form.addEventListener("submit", submitHandler);
};

//Add an event listener
window.addEventListener("DOMContentLoaded", main);

*/

// FormData object

// Get the name input
const parkName = document.querySelector("#name-input").value;

console.log(parkName);

// FormData object can be populated with a form's data as a set of key-value pairs

const submitHandler = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    const errors = validateForm(formData);

    // Clear all previous errors
    const errorElements = document.querySelectorAll(".error");
    for(let element of errorElements) {
        element.style.display = "none";
    }

    // Display any new errors
    Object.keys(errors).forEach((key) => {
        // Find the specific error element
        const errorElement = document.querySelector(`#${key}-form .error`);
        errorElement.innerHTML = errors[key];
        errorElement.style.display = "block";
    });
};

// accepts a single string value and returns true if the value isn't null and the string contains at least one non-space character.

function validateExists(value) {
    return value && value.trim();
  }
