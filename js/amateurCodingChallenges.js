// 1. Write a function that returns the SUM of a sequence of numbers. This sequence is determined by three variables: start, finish, and step. The sequence begins at start, ends at finish, and goes up by step until it reaches finish or a number that when increased by step would go past finish.
//
//     Examples:
//
//
// Input: start: 1 finish: 4 step: 1 | Output: 10
// Input: start: 4 finish: 10 step: | Output: 13

// function sumOfSeq(start, finish, step){
//     var array = [];
//     array.push(start);
//     for(var i = start + step; i <= finish; i+=step){
//         array.push(i);
//     }
//     var sum = 0;
//
//     function addAll(arr){
//         for(var i = 0; i < arr.length; i++){
//             sum+=array[i];
//         }
//     }
//     addAll(array);
//     return sum;
// }
//
// console.log (sumOfSeq(1,4,1));

// 2. Given a string of any length with any characters in it, write a function to determine whether or not the string contains the whole word "english". The order of characters/spelling is important, a string "agkjnenglishsad" would return true while "asdneglihsth" would return false. Upper and lower case does not matter. Return values should be booleans (true/false).
//
//     Examples:
//
//
// Input: "FaagdnglishAGG" | Output: false
// Input: "SMFENgliSHasnD" | Output: true

// function includesEnglish(string){
//     var cleanString = string.toLowerCase();
//     return cleanString.includes("english");
// }
//
// console.log(includesEnglish("FaagdnglishAGG"));
// console.log(includesEnglish("SMFENgliSHasnD"));

// 3. Given an array of integers, write a function that returns an array of 2 integers. The first integer will be the count of the positive integers, and the second integer will be the sum of the negative integers. If the input is empty or null, return an empty array.
//
//     Examples:
//
//
// Input: [1, -6, 5, 4, 3, -7, -10, 201, -3] | Output: [5, -26]
// Input: null | Output: []

// function whateverName(array){
//     var numOfPositives = 0;
//     var sumOfNegatives = 0;
//     array.forEach(function(element){
//         if(element > 0){
//             numOfPositives++;
//         } else {
//             sumOfNegatives += element;
//         }
//
//     })
//     return [numOfPositives, sumOfNegatives];
// }
//
// console.log(whateverName([1, -6, 5, 4, 3, -7, -10, 201, -3]));


//THIS ONE IS NOT DONE!!!!
// 4. Write a function that translates an input string by replacing each character with a number representing the amount of times that character appears in the string. Then separate each individual number with a different character.
//
//     Examples:
//
//
// Input: "hello world", "-" | Output: "1-1-3-3-2-1-1-2-1-3-1"
// Input: "challenge", "/" | Output: "1/1/1/2/2/2/1/1/2"

// function countChars(string, char){
//     var stringArray = string.split("");
//     for(var i = 0; i < stringArray.length; i++){
//         var currentLetter = stringArray[i];
//
//     }
// }

// 7. Write a function to convert a string into an array of words.
//
//     Example:
//
//
// Input: "Trick or Treat"
// Output: [‘Trick’, ‘or’, ‘Treat’]

// function convertToArray(string){
//     var arrayOfWords = string.split(" ");
//     return arrayOfWords;
// }
//
// console.log(convertToArray("Trick or Treat"));

// 8. Write a function to count the number of occurrences of a substring in a given string.
//
//     Example:
//
//
// Input: "The pumpkin rolled down the hill and under someone’s car.", "the"
// Output: 2

// function countSubstring(string, substring){
//     var count = 0;
//     var stringAsArray = string.split(" ");
//     stringAsArray.forEach(function(word){
//         if(word.toLowerCase() === substring){
//             count++;
//         }
//     })
//     return count;
// }


//THIS DOESN'T WORK YET!!!!!!
// 9. Write a function to remove these special characters from a string: ~,!,$,&,%, ,#,@,-,_,^,? (yes, "space" is a character in that list)
//
// Examples:
//
//
//     Input: "Happy ~!&$%#@- Halloween" | Output: "HappyHalloween"
// Input: "I’ll bet living in a nudist-colony takes all the fun out of Halloween!!" | Output: "IllbetlivinginanudistcolonytakesallthefunoutofHalloween"

// function removeSpecChars(string){
//     for(var i = 0; i < string.length; i++){
//         if(string[i] === "~" || string[i] === "!" || string[i] === "$" || string[i] === "&" || string[i] === "%" || string[i] === " " || string[i] === "#" || string[i] === "@" || string[i] === "-" || string[i] === "_" || string[i] === "^" || string[i] === "?" || string[i] === "'"){
//             var newString = string.replace(string[i], "");
//         }
//     }
//     return newString;
// }
