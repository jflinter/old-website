/* Author: Jack Flintermann
*/
var title_index = 0;
var titles = ['iOS Developer at eHarmony', 'Brown University \'10 MS \'11', 'has a giant forehead', ];

$("tbody td").on("mouseenter", function() {
  var row = $(this).parent().parent().children().index($(this).parent());
  $(".info-tagline").text(titles[(row + 1) % titles.length]);
});

$("tbody td").on("mouseleave", function() {
  var row = $(this).parent().parent().children().index($(this).parent());
  $(".info-tagline").text(titles[0]);
});