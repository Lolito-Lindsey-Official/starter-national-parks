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