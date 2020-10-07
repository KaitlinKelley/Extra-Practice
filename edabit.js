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

