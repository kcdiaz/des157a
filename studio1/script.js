(function() {
  "use strict";
  console.log("reading js");
  
  const myForm = document.querySelector("#myform");
  const overlay = document.querySelector("#overlay");
  const submitBtn = document.querySelector("#submitBtn");
  const backBtn = document.querySelector("#backBtn");
  const aTimeBlank = document.querySelector("#aTimeBlank");
  const adjBlank = document.querySelector("#adjBlank");
  const aIngredientBlank = document.querySelector("#aIngredientBlank");
  const decorationBlank = document.querySelector("#decorationBlank");
  const noteBlank = document.querySelector("#noteBlank");
  const pastryDecor = document.querySelector("#pastryDecor");
  
  myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const aTime = document.querySelector("#aTime").value;
  const adj = document.querySelector("#adj").value;
  const aIngredient = document.querySelector("#aIngredient").value;
  const dislike = document.querySelector("#dislike").value;
  const note = document.querySelector("#note").value;
  const decoration = document.querySelector('input[name="decoration"]:checked').value;
  
  aTimeBlank.textContent = aTime;
  adjBlank.textContent = adj;
  aIngredientBlank.textContent = aIngredient;
  decorationBlank.textContent = decoration;
  noteBlank.textContent = note;
  pastryDecor.src = `images/${decoration}set.png`;
  
  overlay.classList.remove("hidden");

});

backBtn.addEventListener("click", () => {
overlay.classList.add("hidden");
});
})();
