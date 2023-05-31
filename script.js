// Add your custom JavaScript code here
// This is just a sample code snippet

// Example of adding a click event listener to a button
var button = document.getElementById("myButton");
button.addEventListener("click", function() {
  alert("Button clicked!");
});
// Add your custom JavaScript code here

// Example of adding a click event listener to the hotel name
var hotelName = document.querySelector("h1");
hotelName.addEventListener("click", function() {
  alert("Welcome to our hotel!");
});
// Add your custom JavaScript code here

// Example of adding a click event listener to the "Home" link
var homeLink = document.querySelector('.navbar-nav .nav-link[href="#"]');
homeLink.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the default link behavior
  alert("You clicked on Home!");
});
