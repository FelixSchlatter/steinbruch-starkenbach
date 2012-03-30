/* 
Author: FelixSchlatter.com 

*/





$(document).ready(function(){
	
var inn = 1.00;
var out = 0.00;
var speeder = 600;

var images = ['bg_1.jpg', 'bg_2.jpg', 'bg_3.jpg', 'bg_4.jpg', 'bg_5.jpg'];
$('header').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});

$(window).resize(function() {
	//$('header').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});
});

$('body').click(function() {
	//$('header').css({'background-image': 'url(img/' + images[Math.floor(Math.random() * images.length)] + ')'});

 
});

//$('.content').width($(window).width() - $('.left').width());

$('#produkte').width($(window).width() - $('.left').width() - 200);
$('#unternehmen').width($(window).width() - $('.left').width() - 200);
$('#standort').width($(window).width() - $('.left').width() - 200);
$('#kontakt').width($(window).width() - $('.left').width() - 200);

$('#unternehmen, #standort, #kontakt').fadeTo(0, out);

$('#nav1').click(function() {
	$('#produkte').fadeTo('slow', inn);$('#unternehmen').fadeTo('slow', out);$('#standort').fadeTo('slow', out);$('#kontakt').fadeTo('slow', out);$('#produkte').height('100%');
	$('#unternehmen').height('100%');
	//$('#kurve').animate({backgroundPosition: '-400px 138px'});
	$('header').animate({backgroundPosition: '0px 0px'});
  $('#insideholder').animate({
	left: $(window).width() -  $('#produkte').width() - 200
  }, speeder, function() {
    // finito!
  });
});
$('#nav2').click(function() {
$('#produkte').fadeTo('slow', out);$('#unternehmen').fadeTo('slow', inn);$('#standort').fadeTo('slow', out);$('#kontakt').fadeTo('slow', out);$('#produkte').height(50);
	$('#unternehmen').height('100%');
//$('#kurve').animate({backgroundPosition: '-800px 138px'});
$('header').animate({backgroundPosition: '-200px 0px'});
  $('#insideholder').animate({
    left: $(window).width() - $('#unternehmen').width() - $('#unternehmen').width() - 200
  }, speeder, function() {
    // finito!
  });
});
$('#nav3').click(function() {
$('#produkte').fadeTo('slow', out);$('#unternehmen').fadeTo('slow', out);$('#standort').fadeTo('slow', inn);$('#kontakt').fadeTo('slow', out);$('#produkte').height(10);
	$('#unternehmen').height(10);
//$('#kurve').animate({backgroundPosition: '-1200px 138px'});
$('header').animate({backgroundPosition: '-400px 0px'});
  $('#insideholder').animate({
    left: $(window).width() - $('#standort').width() - $('#standort').width() - $('#standort').width() - 200
  }, speeder, function() {
    // finito!
  });
});

/* vierter navpunkt => unbenötigt!

$('#nav4').click(function() {
$('#produkte').fadeTo('slow', out);$('#unternehmen').fadeTo('slow', out);$('#standort').fadeTo('slow', out);$('#kontakt').fadeTo('slow', inn);$('#produkte').height(50);
////$('#kurve').animate({backgroundPosition: '-1600px 138px'});
$('header').animate({backgroundPosition: '-600px 0px'});
  $('#insideholder').animate({
    left: $(window).width() - $('#kontakt').width()  - $('#kontakt').width()  - $('#kontakt').width()  - $('#kontakt').width()  -200
  }, speeder, function() {
    // finito!
  });
});
*/


})

            

