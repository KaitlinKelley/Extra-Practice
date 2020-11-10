"use strict";

var square = $(".square-small");
var userClicks = 0;

$(square).mousedown(function(){
    $(this).css("opacity", "100%");
    userClicks += 1;
});

$(square).mouseup(function(){
    $(this).css("opacity", "45%");
});

var randomNumber = Math.floor(Math.random() * 4) + 1;
var counterContainer = $(".round-tracker");

function renderRoundTracker(){
    var html = '<div class="round-tracker-inner">';
    html += '<div>' + "<p>" + "Round Number: " + randomNumber + '</div>';
    html += '</div>'
    return html;
}