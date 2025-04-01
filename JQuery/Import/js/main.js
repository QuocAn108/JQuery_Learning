// $(function () {
//   $("h1 .hihi").text("Hoang Quoc An"); // Change the text of the h1 element, h1 is the selector
//   //h1 is the tag name, .hihi is the class name.
//   //text() is a method that sets or returns the text content of the selected elements.
//   $("h1").css("color", "red");
// });

$(function () {
  $(".btn-red").click(function () {
    $("p.name").css("color", "red");
  });
  $(".btn-blue").click(function () {
    $("p.name").css("color", "blue");
  });
});

$(function () {
  $("p").css("color", "red");
  $(".box").css({
    width: "200px",
    height: "100px",
    border: "1px solid #333",
    margin: "20px",
  });
  $("#box1").css("background-color", "black");
  $("#box2, #box3").css("background-color", "gold");
});
