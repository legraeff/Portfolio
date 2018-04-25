var $iceCreamList = $('.ice-cream-card');

var positionIceCreams = function() {
  var $iceCreamList = $('.ice-cream-card');
  var numberOfIceCreams = $iceCreamList.length;
  $iceCreamList.each(function(i) {
    var spacingX = -50 + 35 * i;
    var spacingY = -50 + 5 * i;
    $(this).css("z-index", numberOfIceCreams - i);
    $(this).css("transform", "translate(" + spacingX + "%," + spacingY + "%)");
  });
}
positionIceCreams($iceCreamList);

$iceCreamList.click(function() {
  $(this).detach().insertBefore(".ice-cream-card:first");
  positionIceCreams();
});
