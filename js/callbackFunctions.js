
// function askForNumber(){
//     debugger;
//     let userInput = parseInt(prompt("Please enter an odd number between 1 and 50."));
//
//     if(userInput % 2 === 0){
//         parseInt(prompt("That was an even number. Please enter an odd number between 1 and 50."));
//     }
// }

// function getTotal(fn, args){
//     let total = 0;
//     total += fn(args);
//     return total;
// }
//
// let total = getTotal( (num) => num, 1, 3);
//
// console.log(total);

function getRandomNum(){
    let rand = Math.random();
    //this generates a random number between 0 and 1

    //Math.floor rounds down the number, ditches the trailing decimal values
    let randomNum = Math.floor(rand * 181) + 20;
    console.log(randomNum);
}

//generates another number between 10 and 100
function otherRandom(){
    let rand = Math.random();

    let randomNum = Math.floor(rand * 91) + 10;
    return randomNum;
}

console.log(otherRandom());

// function randomIntFromInterval(min, max) { // min and max included
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }