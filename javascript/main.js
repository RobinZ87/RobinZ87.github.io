$(document).ready(function() {
$(".button").hover(function () {
$(this).toggleClass("button-highlight");
}, function() {
$(this).toggleClass("button-highlight");
});
});

$(document).ready(function() {
$(".send-button").hover(function () {
$(this).toggleClass("button-highlight");
}, function() {
$(this).toggleClass("button-highlight");
});
});

$(document).ready(function() {
$("h2, h3").hover(function() {
$(this).css("color","#36CFC8");
}, function() {
$(this).css("color","#999999");
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
$(".portfolio-pic").hover(function() {
$(this).css("border","5px solid #36CFC8");
}, function() {
$(this).css("border","5px solid #b8b8b8");
});
});

$(document).ready(function() {
$(".hamburger, .cross").click(function() {
$(".hamburger, .cross").toggleClass("invis");
$(".hamburger-menu").toggleClass("invis");
});
});