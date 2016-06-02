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