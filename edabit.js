// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

function intToString(num) {
    return ""+num;
}

function stringToInt(num) {
    return +num;
}

//Given two arguments, return an array which contains these two arguments.

function makePair(num1, num2) {
    return [num1, num2];
}

//Write a function that accepts base (decimal), height (decimal) and shape ("triangle", "parallelogram") as input and calculates the area of that shape.
//Area of a triangle is 0.5 * b * h
// Area of a parallelogram is b * h
// Assume triangle and parallelogram are the only inputs for shape.

function areaShape(base, height, shape) {
    if(shape === "triangle"){
        return (base*height)/2;
    } else if(shape === "parallelogram"){
        return base*height;
    }
}

//Create a function that finds the index of a given item.

function search(arr, item) {
    return arr.indexOf(item);
}

//Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

const helloName = name => "Hello " + name + "!";




// A strong Scottish accent makes every vowel similar to an "e", so you should replace every vowel with an "e". Additionally, it is being screamed, so it should be in block capitals.
//
//     Create a function that takes a string and returns a string.
//
//     Examples
// toScottishScreaming("hello world") ➞ "HELLE WERLD"
//
// toScottishScreaming("Mr. Fox was very naughty") ➞ "MR. FEX WES VERY NEEGHTY"
//
// toScottishScreaming("Butterflies are beautiful!") ➞ "BETTERFLEES ERE BEE

function toScottishScreaming(str) {
    return str.replace(/[aeoui]/ig,"e").toUpperCase()
}



// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

function search(arr, item) {
    return arr.indexOf(item);
}





// Create a function that evaluates an equation.
//
//     Examples
// eq("1+2") ➞ 3
//
// eq("6/(9-7)") ➞ 3
//
// eq("3+2-4") ➞ 1

function eq(evaluate) {
    return eval(evaluate);
}

//Create a function that calculates the chance of being an imposter. The formula for the chances of being an imposter is 100 × (i / p) where i is the imposter count and p is the player count. Make sure to round the value to the nearest integer and return the value as a percentage.
//
// Examples
// imposterFormula(1, 10) ➞ "10%"
//
// imposterFormula(2, 5) ➞ "40%"
//
// imposterFormula(1, 8) ➞ "13%"

function imposterFormula(i, p) {
    return Math.round(100 * (i/p)) + "%";
}


// Create a function that takes the age and return the age in days.
//
//     Examples
// calcAge(65) ➞ 23725
//
// calcAge(0) ➞ 0
//
// calcAge(20) ➞ 7300

function calcAge(age) {
    return age*365;
}

// Create a function which returns the length of a string, WITHOUT using String.length property.
//
//     Examples
// length("Hello World") ➞ 11
//
// length("Edabit") ➞ 6
//
// length("wash your hands!") ➞ 16

function length(s) {
    var array = s.split("");
    return array.length;
}



// Here's an image of four models. Some of the cubes are hidden behind other cubes. Model one consists of one cube. Model two consists of four cubes, and so on...
//
// Stack the Boxes
//
// Write a function that takes a number n and returns the number of stacked boxes in a model n levels high, visible and invisible.

function stackBoxes(n) {
    return n**2;
}

// Create a function that accepts a measurement value in inches and returns the equivalent of the measurement value in feet.
//
//     Examples
// inchesToFeet(324) ➞ 27
//
// inchesToFeet(12) ➞ 1
//
// inchesToFeet(36) ➞ 3
// Notes
// If inches are under 12, return 0.

function inchesToFeet(inches) {
    if (inches < 12){
        return 0;
    } else {
        return inches/12;
    }
}

// Kinetic energy can be calculated with the following formula:
//
//     KE = 1/2mv²
//
// m is mass in kg
// v is velocity in m/s
// KE is kinetic energy in J
// Return the Kinetic Energy in Joules, given the mass and velocity. For the purposes of this challenge, round answers to the nearest integer.
//
//     Examples
// kineticEnergy(60, 3) ➞ 270
//
// kineticEnergy(45, 10) ➞ 2250
//
// kineticEnergy(63.5, 7.35) ➞ 1715

function kineticEnergy(m, v) {
    return Math.round((m*v*v)/2);
}

// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.
//
//     Examples
// arrBetween(3, 8, [1, 5, 95, 0, 4, 7]) ➞ [5, 4, 7]
//
// arrBetween(1, 10, [1, 10, 25, 8, 11, 6]) ➞ [8, 6]
//
// arrBetween(7, 32, [1, 2, 3, 78]) ➞ []

function arrBetween(num1, num2, arr) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if ((arr[i] > num1)&&(arr[i] < num2)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

// Create a function to concatenate two integer arrays.
//
//     Examples
// concat([1, 3, 5], [2, 6, 8]) ➞ [1, 3, 5, 2, 6, 8]
//
// concat([7, 8], [10, 9, 1, 1, 2]) ➞ [7, 8, 10, 9, 1, 1, 2]
//
// concat([4, 5, 1], [3, 3, 3, 3, 3]) ➞ [4, 5, 1, 3, 3, 3, 3, 3]

function concat(arr1, arr2) {
    return arr1.concat(arr2);
}

// Create a function that returns true if a string contains any spaces.
//
//     Examples
// hasSpaces("hello") ➞ false
//
// hasSpaces("hello, world") ➞ true
//
// hasSpaces(" ") ➞ true
//
// hasSpaces("") ➞ false
//
// hasSpaces(",./!@#") ➞ false

function hasSpaces(str) {
    return str.includes(" ");
}

// Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.
//
//     Examples
// volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10
//
// volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16
//
// volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30

function volumeOfBox(sizes) {
    return sizes.width*sizes.length*sizes.height;
}

// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.
//
//     Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid
// Examples
// relationToLuke("Darth Vader") ➞ "Luke, I am your father."
//
// relationToLuke("Leia") ➞ "Luke, I am your sister."
//
// relationToLuke("Han") ➞ "Luke, I am your brother in law."

function relationToLuke(name) {
    if(name === "Darth Vader"){
        return "Luke, I am your father.";
    } else if(name === "Leia"){
        return "Luke, I am your sister.";
    } else if(name === "Han"){
        return "Luke, I am your brother in law.";
    } else if(name === "R2D2"){
        return "Luke, I am your droid.";
    }
}

// Given a Rubik's Cube with a side length of n, return the number of individual stickers that are needed to cover the whole cube.
//
// Pictures of Rubik's Cubes
//
// The Rubik's cube of side length 1 has 6 stickers.
// The Rubik's cube of side length 2 has 24 stickers.
// The Rubik's cube of side length 3 has 54 stickers.
// Examples
// howManyStickers(1) ➞ 6
//
// howManyStickers(2) ➞ 24
//
// howManyStickers(3) ➞ 54

function howManyStickers(n) {
    return (n**2)*6;
}

// Create a function that takes in an array of numbers and returns the sum of its cubes.
//
//     Examples
// sumOfCubes([1, 5, 9]) ➞ 855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
//
// sumOfCubes([3, 4, 5]) ➞ 216
//
// sumOfCubes([2]) ➞ 8
//
// sumOfCubes([]) ➞ 0
// Notes
// If given an empty array, return 0.

function sumOfCubes(nums) {
    var sum = 0;
    nums.forEach(function(num){
        sum += num**3;
    })
    return sum;
}

// Create a function that returns the number of arguments it was called with.
//
// Examples
// numArgs() ➞ 0
//
// numArgs("foo") ➞ 1
//
// numArgs("foo", "bar") ➞ 2
//
// numArgs(true, false) ➞ 2
//
// numArgs({}) ➞ 1

function numArgs() {
    return arguments.length;
}

// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:
//
// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).
//
// Examples
// cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"
//
// cityFacts({
//     name: "Tokyo",
//     population: "13,929,286",
//     continent: "Asia"
// }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

function cityFacts(city) {
    return city.name + " has a population of " + city.population + " and is situated in " + city.continent;
}


