$(document).ready(function() {
$(".button").hover(function () {
$(this).toggleClass("button-highlight");
}, function() {
$(this).toggleClass("button-highlight");
});
});

$(document).ready(function() {
$("h2").hover(function() {
$(this).css("color","#36CFC8");
}, function() {
$(this).css("color","#b8b8b8");
});
});

$(document).ready(function() {
$(".nav-item").hover(function() {
$(this).css("background-color","#36CFC8");
}, function() {
$(this).css("background-color","#b8b8b8");
});
});

$(document).ready(function() {
$("h1").hover(function() {
$(this).css("color","#36CFC8");
}, function() {
$(this).css("color","#ffffff");
});
});

$(document).ready(function() {
	$(".msg-box").resizable();
});