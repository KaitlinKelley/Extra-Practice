"use strict";


var randomNumber = Math.floor(Math.random() * 4) + 1;

var compOrder = [];
var playerOrder = [];
var numOfFlashes;
var wonRound;
var wonGame = false;
var gameStarted = false;
var roundNumber = 0;
var compTurn = false;
var playerTurn = false;

var intervalId;

var square = $(".square-small");
var roundCounter = $(".round-tracker");
var yellowSquare = $(".square-1");
var blueSquare = $(".square-2");
var redSquare = $(".square-3");
var greenSquare = $(".square-4");
var startBtn = $(".start-btn");


//Keeps track of whether the play won a round or not
//If player sequence is wrong, alerts them and turns off the game
// function didPlayerWinRound(){
//     if(compOrder === playerOrder){
//         wonRound = true;
//         roundNumber++;
//         roundCounter.innerHTML = roundNumber;
//     } else {
//         wonRound = false;
//         alert("You lost! Click Start to start over.");
//         gameStarted = false;
//     }
// }


function renderRoundTracker(){
    var html = '<div class="round-tracker-inner">';
    html += '<div>' + "<p>" + "Round Number: " + roundNumber + '</div>';
    html += '</div>'
    return html;
}


function playGame(){
    wonGame = false;
    compOrder = [];
    playerOrder = [];
    numOfFlashes = 0;
    intervalId = 0;
    roundNumber = 1;
    wonRound = false;
    renderRoundTracker();
    // roundCounter.html = roundNumber;
    for(var i = 0; i < 20; i++){
        var randomNumber = Math.floor(Math.random() * 4) + 1;
        compOrder.push(randomNumber);
    }
    compTurn = true;
    intervalId = setInterval(compFlash, 800);
}



function compFlash(){
    gameStarted = false;
    if (numOfFlashes === roundNumber){
        clearInterval(intervalId);
        compTurn = false;
        returnColors();
        playerTurn = true;
        gameStarted = true;

    }
    if (compTurn){
        returnColors();
        setTimeout(function(){
            if (compOrder[numOfFlashes] === 1){
                flashYellow();
            } else if (compOrder[numOfFlashes] === 2){
                flashBlue();
            } else if (compOrder[numOfFlashes] === 3){
                flashRed();
            } else if (compOrder[numOfFlashes] === 4){
                flashGreen();
            }
            numOfFlashes++;
        }, 200);
    }
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
    $(yellowSquare).css("opacity", "45%");
    $(blueSquare).css("opacity", "45%");
    $(redSquare).css("opacity", "45%");
    $(greenSquare).css("opacity", "45%");
}
//=====================================================

function checkIfCorrect(){
    if(playerOrder[playerOrder.length - 1] !== compOrder[playerOrder.length - 1]){
        wonRound = false;
        // gameOver();
    } else if(playerOrder.length === 20 && wonRound){
        wonGame = true;
        winGame();
    } else if(roundNumber === playerOrder.length && wonRound && !wonGame){
        roundNumber++;
        playerOrder = [];
        playerTurn = false;
        compTurn = true;
        numOfFlashes = 0;
        roundCounter.html = roundNumber;
        intervalId = setInterval(compFlash, 800);
    }
}



//Flashes the color when the user clicks each button, goes back when mouse lifts
$(square).mousedown(function(){
    if(gameStarted) {
        $(this).css("opacity", "100%");
    }
});

$(square).mouseup(function(){
    $(this).css("opacity", "45%");
});
//=========================================================

//pushes the corresponding number of each square into the playerOrder array
$(yellowSquare).click(function(){
    if(gameStarted && playerTurn){
        playerOrder.push(1);
        checkIfCorrect();
        if(!wonGame){
            setTimeout(function(){
                returnColors();
            }, 300);
        }
    }
});

$(blueSquare).click(function(){
    if(gameStarted && playerTurn){
    playerOrder.push(2);
        checkIfCorrect();
        if(!wonGame){
            setTimeout(function(){
                returnColors();
            }, 300);
        }
    }
});

$(redSquare).click(function(){
    if(gameStarted && playerTurn){
        playerOrder.push(3);
        checkIfCorrect();
        if(!wonGame){
            setTimeout(function(){
                returnColors();
            }, 300);
        }
    }
});

$(greenSquare).click(function(){
    if(gameStarted && playerTurn) {
        playerOrder.push(4);
        console.log(playerOrder);
        checkIfCorrect();
        if(!wonGame){
            setTimeout(function(){
                returnColors();
            }, 300);
        }
    }
});
//==================================================


$(startBtn).click(function(){
    gameStarted = true;
    if(gameStarted){
        roundNumber = 0;
        roundCounter.html = roundNumber;
    } else {
        gameStarted = false;
        roundCounter.html = "";
        returnColors();
        clearInterval();
    }
    if(gameStarted || wonGame){
        playGame();
    }
});

function winGame(){
    wonGame = true;
    roundCounter.html = "Yay!";
    gameStarted = true;
}
