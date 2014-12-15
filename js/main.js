/*note, this requires jQuery to work. It could be written without jQuery */
$(document).ready(function(){

  //this is the code to slide the main navigation up and down.
  $('#menu_button').click(function(evt){
    console.log('evt',evt);
    evt.preventDefault();
    $('#main_nav').slideToggle();
  });//end menu_button
  
});


    