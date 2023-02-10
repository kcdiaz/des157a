(function() {
    "use strict";
    console.log("reading js");

    // Selecting the form and submit button
const form = document.querySelector("#myform");
const submitBtn = document.querySelector("#submitBtn");

// Selecting the overlay
const overlay = document.querySelector("#overlay");
const backBtn = document.querySelector("#backBtn");
const aTimeBlank = document.querySelector("#aTimeBlank");
const adjBlank = document.querySelector("#adjBlank");
const aIngredientBlank = document.querySelector("#aIngredientBlank");
const colorBlank1 = document.querySelector("#colorBlank1");
const decorBlank1 = document.querySelector("#decorBlank1");
const pastryDecor = document.querySelector("#pastryDecor");

// Adding a submit event listener to the form
form.addEventListener("submit", function(event) {
    // Preventing the default behavior of the form submit
    event.preventDefault();

    // Getting the values from the form
    const aTime = document.querySelector("#aTime").value;
    const adj = document.querySelector("#adj").value;
    const aIngredient = document.querySelector("#aIngredient").value;
    const decoration = document.querySelector('input[name="decoration"]:checked').value;

    // Updating the content in the overlay
    aTimeBlank.innerHTML = aTime;
    adjBlank.innerHTML = adj;
    aIngredientBlank.innerHTML = aIngredient;
    switch (decoration) {
        case "pink":
            colorBlank1.innerHTML = "Pink";
            decorBlank1.innerHTML = "Pink";
            pastryDecor.src = "images/pinkset.png";
            break;
        case "purple":
            colorBlank1.innerHTML = "Purple";
            decorBlank1.innerHTML = "Purple";
            pastryDecor.src = "images/purpleset.png";
            break;
        case "blue":
            colorBlank1.innerHTML = "Blue";
            decorBlank1.innerHTML = "Blue";
            pastryDecor.src = "images/blueset.png";
            break;
        case "green":
            colorBlank1.innerHTML = "Green";
            decorBlank1.innerHTML = "Green";
            pastryDecor.src = "images/greenset.png";
            break;
        case "mystery":
            colorBlank1.innerHTML = "Mystery";
            decorBlank1.innerHTML = "Mystery";
            pastryDecor.src = "images/mysteryset.png";
            break;
    }

    // Showing the overlay
    overlay.classList.remove("hidden");
});

// Adding a click event listener to the back button in the overlay
backBtn.addEventListener("click", function() {
    // Hiding the overlay
    overlay.classList.add("hidden");
});
