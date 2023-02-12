(function() {
  "use strict";
  console.log("reading js");

  document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#myform");
    const overlay = document.querySelector("#overlay");
    const backBtn = document.querySelector("#backBtn");
    const aTimeBlank = document.querySelector("#aTimeBlank");
    const adjBlank = document.querySelector("#adjBlank");
    const aIngredientBlank = document.querySelector("#aIngredientBlank");
    const decorationBlank = document.querySelector("#decorationBlank");
    const noteBlank = document.querySelector("#noteBlank");
    const pastryDecor = document.querySelector("#pastryDecor");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const aTime = document.querySelector("#aTime").value;
      const adj = document.querySelector("#adj").value;
      const aIngredient = document.querySelector("#aIngredient").value;
      const decoration = document.querySelector('input[name="decoration"]:checked').value;
      const note = document.querySelector("#note").value;
  
      aTimeBlank.innerHTML = aTime;
      adjBlank.innerHTML = adj;
      aIngredientBlank.innerHTML = aIngredient;
      noteBlank.innerHTML = note;
      decorationBlank.innerHTML = decoration;
  
      if (decoration === "pink") {
        pastryDecor.src = "images/pinkset.png";
      } else if (decoration === "purple") {
        pastryDecor.src = "images/purpleset.png";
      } else if (decoration === "blue") {
        pastryDecor.src = "images/blueset.png";
      } else if (decoration === "green") {
        pastryDecor.src = "images/greenset.png";
      } else if (decoration === "mystery") {
        pastryDecor.src = "images/mysteryset.png";
      }
  
      overlay.classList.remove("hidden");
    });
  
    backBtn.addEventListener("click", function() {
      overlay.classList.add("hidden");
    });
});
