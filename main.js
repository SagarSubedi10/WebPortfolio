$(document).ready(function() {
    $('.menu-toggler').on('click', function() {
      $(this).toggleClass('open');
      $('.top-nav').toggleClass('open');
    });
  
    $('.nav-link').on('click', function() {
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
    });
  
    // Get the element where you want to display the view count
const viewCountElement = document.querySelector('.landing-text h6');

// Make a GET request to your API endpoint
fetch('https://laz9kkqvca.execute-api.us-east-1.amazonaws.com/views')
  .then(response => response.json())
  .then(data => {
    // Extract the view count from the response
    const viewCount = data.views;

    // Update the HTML content with the view count
    viewCountElement.textContent = viewCount + ' Views';
  })
  .catch(error => {
    console.error('Error:', error);
  });
  