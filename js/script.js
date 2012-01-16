/* 
Author: FelixSchlatter.com 

*/
$(document).ready(function(){
	
var inn = 1.00;
var out = 0.00;
var speeder = 600;

$('#unternehmen, #standort, #kontakt').fadeTo(0, out);

$('#nav1').click(function() {
	$('#produkte').fadeTo('slow', inn);$('#unternehmen').fadeTo('slow', out);$('#standort').fadeTo('slow', out);$('#kontakt').fadeTo('slow', out);
  $('#insideholder').animate({
	left: '200'
  }, speeder, function() {
    // finito!
  });
});
$('#nav2').click(function() {
$('#produkte').fadeTo('slow', out);$('#unternehmen').fadeTo('slow', inn);$('#standort').fadeTo('slow', out);$('#kontakt').fadeTo('slow', out);
  $('#insideholder').animate({
    left: '-545'
  }, speeder, function() {
    // finito!
  });
});
$('#nav3').click(function() {
$('#produkte').fadeTo('slow', out);$('#unternehmen').fadeTo('slow', out);$('#standort').fadeTo('slow', inn);$('#kontakt').fadeTo('slow', out);
  $('#insideholder').animate({
    left: '-1290'
  }, speeder, function() {
    // finito!
  });
});
$('#nav4').click(function() {
$('#produkte').fadeTo('slow', out);$('#unternehmen').fadeTo('slow', out);$('#standort').fadeTo('slow', out);$('#kontakt').fadeTo('slow', inn);
  $('#insideholder').animate({
    left: '-2035'
  }, speeder, function() {
    // finito!
  });
});

})

            

