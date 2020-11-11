"use strict";


var randomNumber = Math.floor(Math.random() * 4) + 1;

var compOrder = [];
var playerOrder = [];
var numOfFlashes = 0;
var userClicks = 0;
var wonRound;
var wonGame = false;
var gameStarted = false;
var roundNumber = 0;
var compTurn = false;
var playerTurn = false;

var intervalId;

var square = $(".square-small");
var counterContainer = $(".round-tracker");
var yellowSquare = $(".square-1");
var blueSquare = $(".square-2");
var redSquare = $(".square-3");
var greenSquare = $(".square-4");
var startBtn = $(".start-btn");


//Keeps track of whether the play won a round or not
//If player sequence is wrong, alerts them and turns off the game
function didPlayerWinRound(){
    if(compOrder === playerOrder){
        wonRound = true;
        roundNumber++;
    } else {
        wonRound = false;
        alert("You lost! Click Start to start over.");
        gameStarted = false;
    }
}




function compFlash(){
    if (numOfFlashes === roundNumber){
        clearInterval(intervalId);
        compTurn = false;
        playerTurn = true;

    }

    if (compTurn){
        setTimeout()
    }
}



function renderRoundTracker(){
    var html = '<div class="round-tracker-inner">';
    html += '<div>' + "<p>" + "Round Number: " + roundNumber + '</div>';
    html += '</div>'
    return html;
}


//These functions are what the computer uses to flash the colors, and then "unflash" them
function flashYellow(){
    $(yellowSquare).css("opacity", "100%");
}

function flashBlue(){
    $(blueSquare).css("opacity", "100%");
}

function flashRed(){
    $(redSquare).css("opacity", "100%");
}

function flashGreen(){
    $(greenSquare).css("opacity", "100%");
}

function returnColors(){
    $(yellowSquare).css("opacity", "50%");
    $(blueSquare).css("opacity", "50%");
    $(redSquare).css("opacity", "50%");
    $(greenSquare).css("opacity", "50%");
}
//=====================================================


function startGame(){
    wonGame = false;
    compOrder = [];
    playerOrder = [];
    numOfFlashes = 0;
    intervalId = 0;
    roundNumber = 1;
    wonRound = false;
    for(var i = 0; i < 20; i++){
        var randomNumber = Math.floor(Math.random() * 4) + 1;
        compOrder.push(randomNumber);

    }
    compTurn = true;
    intervalId = setInterval(compFlash, 800);
}






//Flashes the color when the user clicks each button, goes back when mouse lifts
$(square).mousedown(function(){
    if(gameStarted) {
        $(this).css("opacity", "100%");
        userClicks += 1;
    }
});

$(square).mouseup(function(){
    $(this).css("opacity", "45%");
});
//=========================================================

//pushes the corresponding number of each square into the playerOrder array
$(yellowSquare).click(function(){
    if(gameStarted){
        playerOrder.push(1);
    }
});

$(blueSquare).click(function(){
    if(gameStarted){
    playerOrder.push(2);
    }
});

$(redSquare).click(function(){
    if(gameStarted && playerTurn){
        playerOrder.push(3);
    }
});

$(greenSquare).click(function(){
    if(gameStarted && playerTurn) {
        playerOrder.push(4);
        console.log(playerOrder);
    }
});
//==================================================


$(startBtn).click(function(){
    gameStarted = true;
    if(gameStarted || wonGame){
        startGame();
    }
});
