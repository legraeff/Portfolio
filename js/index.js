// Dropdown Toggle


$("#toggle").click(function() {
  $("#glyph-caret").toggleClass("fa-caret-up");
});

// Night/Day Toggle

$("#togglesun").click(function() {
  $("#glyph-sun").toggleClass("fa-moon-o");
  $('body').toggleClass("night");
  $('nav').toggleClass("navbar-inverse");

});

// Portfolio Slider 

var currentIndex = 0,
  items = $('.container div'),
  total_items = items.length;

function cycleItems() {
  var item = $('.container div').eq(currentIndex);
  items.hide();
  item.css('display', 'inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > total_items - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > total_items - 1) {
    currentIndex = 0;
  }
  cycleItems();
});
