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