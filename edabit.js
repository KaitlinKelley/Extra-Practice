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

// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.
//
//     Examples
// isLastCharacterN("Aiden") ➞ true
//
// isLastCharacterN("Piet") ➞ false
//
// isLastCharacterN("Bert") ➞ false
//
// isLastCharacterN("Dean") ➞ true


function isLastCharacterN(word) {
    return word.charAt(word.length-1) === "n";
}

// Given the radius of a circle and the area of a square, return true if the circumference of the circle is greater than the square's perimeter and false if the square's perimeter is greater than the circumference of the circle.
//
//     Examples
// circle_or_square(16, 625) ➞ True
//
// circle_or_square(5, 100) ➞ False
//
// circle_or_square(8, 144) ➞ True

function circle_or_square(rad, area){
    var circumference = 2*3.14*rad;
    var perimeter = (Math.sqrt(area))*4;
    return circumference > perimeter;
}

// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.
//
//     Examples
// hasSameBread(
//     ["white bread", "lettuce", "white bread"],
//     ["white bread", "tomato", "white bread"]
// ) ➞ true
//
// hasSameBread(
//     ["brown bread", "chicken", "brown bread"],
//     ["white bread", "chicken", "white bread"]
// ) ➞ false
//
// hasSameBread(
//     ["toast", "cheese", "toast"],
//     ["brown bread", "cheese", "toast"]
// ) ➞ false

function hasSameBread(arr1, arr2) {
    return arr1[0] === arr2[0] && arr1[2] === arr2[2];
}

// Creates a function that takes a string and returns the concatenated first and last character.
//
//     Examples
// firstLast("ganesh") ➞ "gh"
//
// firstLast("kali") ➞ "ki"
//
// firstLast("shiva") ➞ "sa"
//
// firstLast("vishnu") ➞ "vu"
//
// firstLast("durga") ➞ "da"

function firstLast(name) {
    return name[0] + name[name.length-1];
}

// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".
//
//     Examples
// isPlural("changes") ➞ true
//
// isPlural("change") ➞ false
//
// isPlural("dudes") ➞ true
//
// isPlural("magic") ➞ false

function isPlural(word) {
    return word[word.length-1] === "s";
}


// A typical car can hold four passengers and one driver, allowing five people to travel around. Given n number of people, return how many cars are needed to seat everyone comfortably.
//
//     Examples
// carsNeeded(5) ➞ 1
//
// carsNeeded(11) ➞ 3
//
// carsNeeded(0) ➞ 0
// Notes
// It's likely there will be a few people left over and some cars won't be filled to max capacity.

function carsNeeded(n) {
    if(n % 5 === 0){
        return parseInt(n/5);
    }else {
        return parseInt(n/5) + 1
    }
}

// Beans make Joker Persona 5 fart a lot. You can determine how hard he farts by how many beans he has eaten. The strength of the fart is equal to twice the square of the bean count plus 5 times the bean count, plus 3.
//
// Create a function that takes an integer beans and return the fart power.
//
//     Examples
// fart(3) ➞ 36
//
// fart(0) ➞ 3
//
// fart(6) ➞ 105

function fart(beans) {
    return 2*(beans**2) + 5*beans + 3;
}

// Many IDS (for emails or Google ID) are created using the person's name.
//
// Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.
//
// Examples
// createID("mary", "lamb") ➞ "mLam"
//
// createID("John", "SMITH") ➞ "jSmi"
//
// createID("mary", "smith") ➞ "mSmi"

function createID(firstname, lastname) {
    return firstname[0].toLowerCase() + lastname[0].toUpperCase() + lastname[1].toLowerCase() + lastname[2].toLowerCase();
}

// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.
//
//     Examples
// checkSquareAndCube([4, 8]) ➞ true
//
// checkSquareAndCube([16, 48]) ➞ false
//
// checkSquareAndCube([9, 27]) ➞ true

function checkSquareAndCube(arr) {
    return Math.sqrt(arr[0]) === Math.cbrt(arr[1]);
}

// Write a function to check if an array contains a particular number.
//
//     Examples
// check([1, 2, 3, 4, 5], 3) ➞ true
//
// check([1, 1, 2, 1, 1], 3) ➞ false
//
// check([5, 5, 5, 6], 5) ➞ true
//
// check([], 5) ➞ false

function check(arr, el) {
    return arr.includes(el);
}

// Create a function that returns the number of syllables in a simple string. The string is made up of short repeated words like "Lalalalalalala" (which would have 7 syllables).
//
// Examples
// countSyllables("Hehehehehehe") ➞ 6
//
// countSyllables("bobobobobobobobo") ➞ 8
//
// countSyllables("NANANA") ➞ 3

function countSyllables(str) {
    return str.length/2;
}

// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.
//
//     Examples
// greaterThanOne("1/2") ➞ false
//
// greaterThanOne("7/4") ➞ true
//
// greaterThanOne("10/10") ➞ false

function greaterThanOne(frac) {
    return eval(frac) > 1;
}

// Create a function which validates whether a given number exists, and could represent a real life quantity. Inputs will be given as a string.
//
//     Examples
// validStrNumber("3.2") ➞ true
//
// validStrNumber("324") ➞ true
//
// validStrNumber("54..4") ➞ false
//
// validStrNumber("number") ➞ false

function validStrNumber(n) {
    return !isNaN(n);
}

// Create a function that returns the total number of parameters passed in.
//
// Examples
// numberArgs("a", "b", "c") ➞ 3
//
// numberArgs(10, 20, 30, 40, 50) ➞ 5
//
// numberArgs(x, y) ➞ 2
//
// numberArgs() ➞ 0

function numberArgs() {
    return arguments.length;
}

// Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neutral".
//
//     Examples
// moodToday("happy") ➞ "Today, I am feeling happy"
//
// moodToday("sad") ➞ "Today, I am feeling sad"
//
// moodToday() ➞ "Today, I am feeling neutral"

function moodToday(mood) {
    if(mood === "" || mood === undefined){
        return "Today, I am feeling neutral";
    } else {
        return "Today, I am feeling " + mood;
    }
}

// You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks object sorted by price in ascending order.
//
//     Assume that the following array of drink objects needs to be sorted:
//
//     drinks = [
//         {name: "lemonade", price: 50},
//         {name: "lime", price: 10}
//     ]
// The output of the sorted drinks object will be:
//
//     Examples
// sortDrinkByPrice(drinks) ➞ [{name: "lime", price: 10}, {name: "lemonade", price: 50}]

function sortDrinkByPrice(drinks){
    drinks.sort(function(a,b) {
        return a.price - b.price
    })

    return drinks;
}

// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
//
//     Examples
// stutter("incredible") ➞ "in... in... incredible?"
//
// stutter("enthusiastic") ➞ "en... en... enthusiastic?"
//
// stutter("outstanding") ➞ "ou... ou... outstanding?"

function stutter(word) {
    var firstTwo = word.charAt(0) + word.charAt(1);
    return firstTwo + "... " + firstTwo + "... " + word + "?";
}

// The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.
//
//     The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...
//
// Examples
// getContainer("Bread") ➞ "bag"
//
// getContainer("Beer") ➞ "bottle"
//
// getContainer("Candy") ➞ "plastic"
//
// getContainer("Cheese") ➞ null

function getContainer(product) {
    let container
    switch (product) {
        case "Bread":
            container = "bag";
            break
        case "Beer":
        case "Milk":
            container = "bottle";
            break
        case "Cerials":
            container = "box";
            break
        case "Eggs":
            container = "carton"
            break
        case "Candy":
            container = "plastic";
            break
        default:
            container = null
    }

    return container;
}

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
//
//     Examples
// maxNum(3, 7) ➞ 7
//
// maxNum(-1, 0) ➞ 0
//
// maxNum(1000, 400) ➞ 1000


function maxNum(n1,n2) {
    if (n1>n2) {
        return n1
    }
    else if (n2>n1){
        return n2
    }
}

// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
//
//     Examples
// cubes(3) ➞ 27
//
// cubes(5) ➞ 125
//
// cubes(10) ➞ 1000

function cubes(a) {
    return a ** 3;
}

// Jay and Silent Bob have been given a fraction of an ounce but they only understand grams. Convert a fraction passed as a string to grams with up to two decimal places. An ounce weighs 28 grams.
//
//     Examples
// jayAndBob("half") ➞ "14 grams"
//
// jayAndBob("quarter") ➞ "7 grams"
//
// jayAndBob("eighth") ➞ "3.5 grams"

const jayAndBob = str => {
    let fraction;

    if (str === 'half') fraction = 1 / 2;
    if (str === 'quarter') fraction = 1 / 4;
    if (str === 'eighth') fraction = 1 / 8;
    if (str === 'sixteenth') fraction = 1 / 16;

    return `${fraction * 28} grams`;
};