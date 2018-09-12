$(function() {

$('#numbers').hide();
$('#letters').hide();
$('.letters').hide();
$('.numbers').hide();


$('button').on('click', function(){
    $('#letters').slideToggle();
    $('#numbers').slideToggle();
});

$('#letters').on('click', function(){
    $('.letters').slideToggle();
});

$('#numbers').on('click', function(){
    $('.numbers').slideToggle();
});



});