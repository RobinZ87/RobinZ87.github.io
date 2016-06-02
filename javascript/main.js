$(document).ready(function() {
$(".button").hover(function () {
$(this).toggleClass("button-highlight");
}, function() {
$(this).toggleClass("button-highlight");
});
});

$(document).ready(function() {
$("img").click(function() {
$(this).remove();
});
});

$(document).ready(function() {
$("h2").hover(function() {
$(this).css("font-color","#36CFC8");
}, function() {
$(this).css("font-color","#b8b8b8");
});
});

$(document).ready(function() {
$(".nav-item").hover(function() {
$(this).css("background-color","#36CFC8");
}, function() {
$(this).css("background-color","#b8b8b8");
});
});