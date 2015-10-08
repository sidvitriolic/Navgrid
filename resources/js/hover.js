// hover
$('.hov').mouseover(function() {
	$(this).css('background-color', '#FF0037');
});
$('.hov').mouseout(function() {
	$(this).css('background-color', '#353535');
});

var $height1 = $('.grid-wrap').height();
var $height2 = $('p').height();
var a = $height1 / 2;
var b = $height2 / 2;

var $padding = (a - b) + "px";

$('.hov').css('padding-top', $padding);