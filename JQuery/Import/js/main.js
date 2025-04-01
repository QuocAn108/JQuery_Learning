// $(function () {
//   $("h1 .hihi").text("Hoang Quoc An"); // Change the text of the h1 element, h1 is the selector
//   //h1 is the tag name, .hihi is the class name.
//   //text() is a method that sets or returns the text content of the selected elements.
//   $("h1").css("color", "red");
// });

// $(function () {
//   $(".btn-red").click(function () {
//     $("p.name").css("color", "red");
//   });
//   $(".btn-blue").click(function () {
//     $("p.name").css("color", "blue");
//   });
// });

// $(function () {
//   $("p").css("color", "red");
//   $(".box").css({
//     width: "200px",
//     height: "100px",
//     border: "1px solid #333",
//     margin: "20px",
//   });
//   $("#box1").css("background-color", "black");
//   $("#box2, #box3").css("background-color", "gold");
// });
// $(function () {
//   $("a[href ='home.html']").css("color", "red"); // Selects the link with href 'home.html' and changes its color to red
//   $("a[href != 'home.html']").css("color", "#333");
//   // Selects all links except the one with href 'home.html' and changes their color to #333
//   $("a[href *= 'product']").css("color", "red");
//   // Selects all links with href containing 'Product' and changes their color to red
//   $("a[href |= 'product']").css("color", "blue"); // Selects all links with href starting and follow by - with 'Product' and changes their color to blue
//   $("a[href ^= 'product']").css("color", "green"); // Selects all links with href starting with 'Product' and changes their color to green
//   $("a[href $= 't.html']").css("color", "wheat"); // Selects all links with href ending with 'Product' and changes their color to yellow
//   $("a[title ~= 'About']").css("color", "black"); // Selects all links with title containing 'About' and around have space and changes their color to black
//   $("a[href]").css("color", "blue"); // Selects all links with href and changes their color to blue
//   $("a[href *= 'product'][title *= ' ']").css("color", "gray"); // Selects all links with href containing 'Product' and title containing ' ' and changes their color to gray , selector multi attribute
// });
// $(function () {
//   $("p:first").css("color", "red"); // selector mount to index first
//   $("p:last").css("color", "blue"); // selector mount to index last
//   $("p:eq(2)").css("color", "green"); // selector mount to index 2
//   $("p:lt(3)").css("color", "darkBlue"); // selector mount to index less than 3
//   $("p:gt(3)").css("color", "darkRed"); // selector mount to index greater than 3
//   $("p:even").css("color", "purple"); // selector mount to index even
//   $("p:odd").css("color", "orange"); // selector mount to index odd
//   $("p:contains('1')").css("color", "yellow"); // selector mount to index contains 1
//   $("p:not('p.p2')").css("color", "blue"); // selector mount to index not 1
//   //   $("p:has(span)").css("color", "pink"); // selector mount to index has span
//   //   $("p:parent").css("color", "pink"); // selector mount to index parent
//   //   $("p:empty").css("color", "pink"); // selector mount to index empty
// });
// $(function () {
//   $("li:first-child").css("color", "red"); //select first child
//   $("li:last-child").css("color", "blue"); //select last child
//   $("li:nth-child(2)").css("color", "green"); //select nth child
//   $("li:nth-child(3n+1)").css("color", "darkBlue"); //select nth with operation child
//   $("li:only-child").css("color", "darkRed"); //select only child
//   $("li").css("color", "gray"); //select nth child
// });
