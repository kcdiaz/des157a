(function() {
    "use strict";
    console.log("reading js");

    var backgrounds = [  'images/background1.jpg',  'images/background2.jpg',  'images/background3.jpg'];

    if (document.body.classList.contains('index')) {
        var index = 0;
        setInterval(function() {
          document.body.style.backgroundImage = 'url(' + backgrounds[index] + ')';
          index++;
          if (index === backgrounds.length) {
            index = 0;
          }
        }, 5000);
      }
      
  
    const number1 = document.getElementById('number-1');
    const number2 = document.getElementById('number-2');
    const number3 = document.getElementById('number-3');
  
    number1.addEventListener('click', function() {
      document.body.style.backgroundImage = "url('images/image1.jpg')";
      updateActiveNumber();
    });
  
    number2.addEventListener('click', function() {
      document.body.style.backgroundImage = "url('images/image2.jpg')";
      updateActiveNumber();
    });
  
    number3.addEventListener('click', function() {
      document.body.style.backgroundImage = "url('images/image3.jpg')";
      updateActiveNumber();
    });
  
    // Define an array with the image URLs
    const images = [
      'url(images/image1.jpg)',
      'url(images/image2.jpg)',
      'url(images/image3.jpg)'
    ];
  
    // Get the arrow buttons and the body element
    const leftArrow = document.querySelector('.arrow-left');
    const rightArrow = document.querySelector('.arrow-right');
    const body = document.querySelector('body');
  
    // Set an initial index for the current image
    let currentImageIndex = 0;
  
    // Add click event listeners to the arrow buttons
    leftArrow.addEventListener('click', () => {
      // Subtract 1 from the current index, wrapping around if necessary
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      // Set the background image of the body
      body.style.backgroundImage = images[currentImageIndex];
      // Update the active number
      updateActiveNumber();
    });
  
    rightArrow.addEventListener('click', () => {
      // Add 1 to the current index, wrapping around if necessary
      currentImageIndex = (currentImageIndex + 1) % images.length;
      // Set the background image of the body
      body.style.backgroundImage = images[currentImageIndex];
      // Update the active number
      updateActiveNumber();
    });
  
    function updateActiveNumber() {
    // Get all the number links
    const numberLinks = document.querySelectorAll('.numbers a');
    // Loop through the number links and update the active class based on the current image index
    numberLinks.forEach((link, index) => {
        if (index === currentImageIndex) {
            link.classList.add('active');
            link.classList.remove('fade');
        } else {
            link.classList.remove('active');
            link.classList.add('fade');
        }
    });

    // Update the arrow buttons based on the current image index
    if (currentImageIndex === 0) {
        leftArrow.classList.add('disabled');
        rightArrow.classList.remove('disabled');
    } else if (currentImageIndex === images.length - 1) {
        leftArrow.classList.remove('disabled');
        rightArrow.classList.add('disabled');
    } else {
        leftArrow.classList.remove('disabled');
        rightArrow.classList.remove('disabled');
    }
}

      
 
  
  })();
  