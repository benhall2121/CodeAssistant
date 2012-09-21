$(document).ready(function() {
  
  alert("hello");

  $('.hide_images_with_jquery').click(function(){
    $('img').slideToggle('fast');
  });

});