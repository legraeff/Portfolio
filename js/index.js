$( ".ice-cream" ).mouseenter(function() {
  $(this).children(".ice-cream__ball").addClass( "ball-animation" );
  $(this).children(".ice-cream__ball-drip").first(".ice-cream__ball-drip").addClass( "ice-cream__ball-drip_big" );
  $(this).children(".ice-cream__ball-drip").last(".ice-cream__ball-drip").addClass( "ice-cream__ball-drip_small" );

});
