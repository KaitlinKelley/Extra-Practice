"use strict"

// Write a function called isNegative that accepts either a number or numeric string
// and return true if the number is negative and false if it is positive or not a number.

// function isNegative(input){
//     if(isNaN(input) || parseFloat(input) > 0){
//         return false;
//     } else if(parseFloat(input) < 0){
//         return true;
//     }
// }

//OR---------------------------
// function isNegative(input){
//     return !(isNaN(input) || parseFloat(input) > 0);
// }
//

// //OR------------------------
// function isNegative(input){
//     return Number(input) < 0;
// }




// console.log(isNegative(42)) //expect false
// console.log(isNegative(-38.4)) //expect true
// console.log(isNegative("2.22")) // expect false
// console.log(isNegative("-53")) // expect true
// console.log(isNegative("-.23")) // expect true
// console.log(isNegative("four"))//expect false





// Write a function called portmanteau that accepts an array of strings
// and returns a string that is a combination of all words

// function portmanteau(array){
//     return array.join("");
// }
//This wouldn't account for white spaces in the middle, though....

// //OR---------------------------
// function portmanteau(array){
//     var superString = "";
//     for(var i = 0; i < array.length; i++){
//         superString += array[i].trim();
//     }
//     return superString;
// }

// console.log(portmanteau(["Row ", "row ", "fight", "the", "power"]))
// console.log(portmanteau(["Hello", "world"]))
// console.log(portmanteau(["one ", "two", "three", " four"]))






// Write a function called noRoberts that accepts an array of strings and
// returns an array that removes all forms of Robert: Robert, Rob, Bob, Bobby, Bobert, Robby


// function noRoberts(arrayOfNames){
//     var boblessArray = [];
//     arrayOfNames.forEach(function(name){
//         name = name.toLowerCase();
//         if(stuff in here does not equal bob etc){
//             bobless.Array.push(name);
//         }
//     })
//             return boblessArray;
// }

// function noRoberts(arrayOfNames){
//     var varietiesOfRobert = ["robert", "rob", "bob", "bobby", "bobert", "robby"];
//     var boblessBucket = [];
//     arrayOfNames.forEach(function(name){
//         if(!(varietiesOfRobert.includes(name.toLowerCase()))){
//             boblessBucket.push(name);
//         }
//     })
//     return boblessBucket;
// }
//
//
// console.log(noRoberts(["Jim", "Bob", "Martha", "Robert", "Lucille"]));
// console.log(noRoberts(["Hank", "bob", "Robby", "Gertrude", "larry"]));
// console.log(noRoberts(["rob", "sally", "Susan", "Roberto", "roger"]));
// console.log(noRoberts(["Joebob", "roBert", "samantha", "Niel", "rboert"]));



// Write a function called rectangleConstructor that accepts 3 parameters and returns a rectangle object
// The parameters will be 2 numbers for the width and height and a string for rectangleColor.
// return object should be:
// {
//     height: 42,
//     width: 42,
//     rectangleColor: "pink"
// }

// function rectangleConstructor(heightNum, widthNum, colorString){
//     var rectangleObj = {};
//
//     rectangleObj.height = parseFloat(heightNum);
//     rectangleObj.width = parseFloat(widthNum);
//     rectangleObj.rectangleColor = colorString;
//
//     console.log(rectangleObj);
//     return rectangleObj;
// }
//OR-------------------------------------------------------

// function rectangleConstructor(ht, wd, colorInput){
//     var newRectangle = {
//         height: ht,
//         weight: wd,
//         color: colorInput
//     }
//
//     return newRectangle;
// }


// makeRectangle(rectangleConstructor(4, 8, "green"));
// makeRectangle(rectangleConstructor(10, 10, "orange"));
// makeRectangle(rectangleConstructor(20, 5, "pink"));



// Write a function called findLargest that accepts an array of rectangle objects
// and returns the rectangle object that has the largest area

var rectanglesOne = [{height: 3, width: 7, color: "blue"}, {height: 13, width: 4, color: "pink"}, {height: 40, width: 18, color: "purple"}]
var rectanglesTwo = [{height: 10, width: 10, color: "yellow"}, {height: 88, width: 7, color: "red"}, {height: 5, width: 6, color: "green"}]

// function findLargest(arrayOfObjects){
//     var currentObject = {
//         height: 0,
//         width: 0
//     }
//     arrayOfObjects.forEach(function(object){
//         if(object.width*object.height > currentObject.width*currentObject.height){
//             currentObject = object;
//         }
//     })
//     return currentObject;
// }


//OR---------------------------------------
// function findLargest(arrayOfRectangles){
//     var areaWinner;
//     var largestArea = 0;
//
//     arrayOfRectangles.forEach(function(rectangle){
//         if(rectangle.height * rectangle.width > largestArea){
//             areaWinner = rectangle;
//             largestArea = rectangle.height * rectangle.width;
//         }
//     })
//     return areaWinner;
// }
// console.log(findLargest(rectanglesOne))
// console.log(findLargest(rectanglesTwo))

// Write a function called orderDigits that accepts a number
// and returns a number with the digits ordered from smallest to largest

// function orderDigits(num){
//     var numArray = num.split(",");
//     var sortedArray = numArray.sort()
//     var sortedDigits = sortedArray.join("");
//     return sortedDigits;
// }


// console.log(orderDigits(847293))
// console.log(orderDigits(6463))
// console.log(orderDigits(29865))
// console.log(orderDigits(3876042))
// console.log(orderDigits(4367))





// Write a function called findWeapon that accepts a D&D character object and
// returns a string of the name of their weapon

var playerOne = {
    name: "Murder Hobo",
    class: "Barbarian",
    inventory: [
        {
            itemName: "Health Potion",
            itemType: "Potion"
        },
        {
            itemName: "Deck of many things",
            itemType: "Bad idea"
        },
        {
            itemName: "Great Axe",
            itemType: "Weapon"
        }
    ]
}

var playerTwo = {
    name: "Min Max",
    class: "Fighter",
    inventory: [
        {
            itemName: "Long sword",
            itemType: "Weapon"
        },
        {
            itemName: "Ration",
            itemType: "Annoying thing to track"
        },
        {
            itemName: "Elephant",
            itemType: "Mount"
        }
    ]
}

var playerThree = {
    name: "Rules Lawyer",
    class: "Wizard",
    inventory: [
        {
            itemName: "Rat",
            itemType: "Friend"
        },
        {
            itemName: "Peasant rail gun",
            itemType: "Weapon"
        },
        {
            itemName: "Pointy Hat",
            itemType: "Clothing"
        }
    ]
}

function findWeapon(playerObject){
    var weaponName;
    for(var i = 0; i < playerObject.inventory.length; i++){
        if(playerObject.inventory[i].itemType === "Weapon"){
            weaponName = playerObject.inventory[i].itemName;
        }
    }

    return weaponName;
}

console.log(findWeapon(playerOne));
console.log(findWeapon(playerTwo));
console.log(findWeapon(playerThree));