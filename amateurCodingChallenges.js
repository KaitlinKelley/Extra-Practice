// 1. Write a function that returns the SUM of a sequence of numbers. This sequence is determined by three variables: start, finish, and step. The sequence begins at start, ends at finish, and goes up by step until it reaches finish or a number that when increased by step would go past finish.
//
//     Examples:
//
//
// Input: start: 1 finish: 4 step: 1 | Output: 10
// Input: start: 4 finish: 10 step: | Output: 13

function sumOfSeq(start, finish, step){
    var array = [];
    array.push(start);
    for(var i = start + step; i <= finish; i+=step){
        array.push(i);
    }
    var sum = 0;

    function addAll(arr){
        for(var i = 0; i < arr.length; i++){
            sum+=array[i];
        }
    }
    addAll(array);
    return sum;
}

console.log (sumOfSeq(1,4,1));