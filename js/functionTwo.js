// Using JavaScript, define a function named plusTwo that takes in a number or numeric string as an argument and return that argument plus 2. It should also return NaN for any arguments that don't fit the requirements.

function plusTwo(num){
    if(typeof num !== "number" && typeof parseFloat(num) !== "number"){
        return NaN;
    }else if(typeof num === "number"){
        return num + 2;
    }else{
        return parseFloat(num) + 2;
    }
}

console.log(plusTwo(4));
console.log(plusTwo("Three"));
console.log(plusTwo("6.0"));
console.log(plusTwo("Hamburger"));
