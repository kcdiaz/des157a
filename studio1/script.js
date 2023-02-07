const form = document.querySelector("#bakery-form");

form.addEventListener("submit", function(event) {
  // Prevent the form from submitting and reloading the page
  event.preventDefault();

  // Get an array of all checked items
  const checkedItems = Array.from(document.querySelectorAll("input:checked"));

  // Extract the value of each checked item and store it in an array
  const selectedItems = checkedItems.map(item => item.value);

  // Store the selected items in local storage to access it on the next page
  localStorage.setItem("selectedItems", JSON.stringify(selectedItems));

  // Redirect to the next page
  window.location.href = "box-of-pastries.html";
});
