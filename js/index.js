$( ".ice-cream" ).mouseenter(function() {
  $(this).children(".ball").addClass( "ball-animation" );
  $(this).children(".ball-drip").first(".ball-drip").addClass( "big-drip" );
  $(this).children(".ball-drip").last(".ball-drip").addClass( "small-drip" );

});
