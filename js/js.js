$(function() {
 $('.Koch').hover(function() {
   $('.Kochlush').show();
   $('.Hohenluft').hide();
  });
});


$(function() {
 $('.Hohen').hover(function() {
   $('.Hohenluft').show();
   $('.Kochlush').hide();
  });
});


$( ".close" ).click(function() {
  $('.Kochlush').hide();
  $('.Hohenluft').hide();
});

$( ".trash" ).click(function() {
  $('.trashclick').show();
});