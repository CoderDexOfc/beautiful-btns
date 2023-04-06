// Get a reference to all the buttons with the custom classes
const buttons = document.querySelectorAll('.custom-btn');

// Loop through the buttons and attach a click event listener to each one
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Update the button's text content
    button.textContent = 'Clicked';

    // Set a timeout to change the text back to "Read More" after 3 seconds
    setTimeout(() => {
      button.textContent = 'Read More';
    }, 3000);
  });
});
