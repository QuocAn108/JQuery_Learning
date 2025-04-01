$(document).ready(function () {
  // This function runs when the DOM is fully loaded
  $("body").append("<h1>Hello World</h1>");
});

$(function () {
  $("h1 .hihi").text("Hoang Quoc An"); // Change the text of the h1 element, h1 is the selector
  //h1 is the tag name, .hihi is the class name.
  //text() is a method that sets or returns the text content of the selected elements.
  $("h1").css("color", "red");
});
