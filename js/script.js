/* Author: Jack Flintermann
*/
var title_index = 0;
var titles = ['has a giant forehead', 'iOS Developer at eHarmony'];
$("#main-photo").on("click", function() {
  $(".info-tagline").text(titles[title_index]);
  title_index = (title_index + 1) % titles.length;
});