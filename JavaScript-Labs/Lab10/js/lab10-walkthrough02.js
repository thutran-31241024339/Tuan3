/* Lab 10 - Exercise 10.2: Basic Selectors */
var msg = $('#msgArea');
msg.val("here is some new text");

// Bước 3: đổi tiêu đề (giữ lại #msgArea để minh họa đầy đủ Bước 4)
// $('#first').html("new Title");
$('#pageTitle').html("new Title");

$('#msgArea').val("My class is " + $('#msgArea').attr("class"));

var buttons = $('button');
buttons.css('background-color', 'red');

var temp = $('body');
temp.css("background-color", "ivory");

$('.center-icons').addClass('selected');
