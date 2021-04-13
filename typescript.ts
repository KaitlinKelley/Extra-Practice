// {
//     "compilerOptions": {
//     "sourceMap": true
// },
//     "files": [
//     "functions.ts"
// ]
// }

// function fullName(first, last){
// 	return first + " " +  last;
// }

// console.log(fullName("Kaitlin", "Muse"));

//==================================================================
//This one specifies arg type and return type

// function gradeGenerator(grade : number) : string{
// 	if(grade < 60){
// 		return "F";
// 	}else if(grade >= 60 && grade < 70){
// 		return "D";
// 	}else if(grade >= 70 && grade < 80){
// 		return "C";
// 	}else if(grade >= 80 && grade < 90){
// 		return "B";
// 	}else {
// 		return "A";
// 	}
// }

// console.log(gradeGenerator(45));
// console.log(gradeGenerator(100));
// console.log(gradeGenerator(88));


//==================================================================
//Second argument is optional!
//"AZ" is the default value for state, can be overwritten if an arg is passed in
//All required values must be written before any optional values, they canNOT be written after
//Good practice: place optional values at the end
//Args with a default value can be placed anywhere in terms of arg order
// function printAddress(street: string, streetTwo?: string, state = "AZ"){
// 	console.log(street);
// 	if(streetTwo){
// 		console.log(streetTwo);
// 	}
// 	console.log(state);
// }

// printAddress("123 First St");
// printAddress("Main St", "Ste 14");
// printAddress("Fourth St", "Ste 251", "UT");


//==================================================================
//"Rest Argument" (kinda like spread operator)
//The Rest Arg will take all args after the team name and convert it to an array
// function lineupCard(team: string, ...players: string[]){
// 	console.log("Team: " + team);
// 	for (let player of players){
// 		console.log(player);
// 	}
// }

// lineupCard("Astros", "Altuve", "Correra", "Bregman");


//=================================================================
//Arrow Functions

var fullName = (first, last) => {
    return first + " " +  last;
}

console.log(fullName("Kaitlin", "Muse"));



var gradeGenerator = (grade : number) : string => {
    if(grade < 60){
        return "F";
    }else if(grade >= 60 && grade < 70){
        return "D";
    }else if(grade >= 70 && grade < 80){
        return "C";
    }else if(grade >= 80 && grade < 90){
        return "B";
    }else {
        return "A";
    }
}

console.log(gradeGenerator(45));
console.log(gradeGenerator(100));
console.log(gradeGenerator(88));

//Function Declaration
//Declared functions get hoisted to the top
function fullName(first : string, last : string) : string {
    return first + " " + last;
}

//=====================================================================
//Function Expression
//Handy when you don't want a function to get called at run-time
//Has to be defined before it is called

//variable           arguments                      return type
var otherFullName : (first : string, last : string) => string;



otherFullName = function (first : string, last : string){
    return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string){
    return first + " " + last;
}

console.log(fullName("Kaitlin", "Muse"));
console.log(otherFullName("Kaitlin", "Muse"));
console.log(thirdFullName("Kaitlin", "Muse"));

// var fullName : string = "Kaitlin Muse";
// let paidAccount : boolean = true;
// const versionNumber : number = 1.3;

// fullName = "John Coker";
// paidAccount = false;

// console.log(fullName);
// console.log(paidAccount);
// console.log(versionNumber);

function printName(f,l){
    let greeting : string = "Hi there, ";
    console.log(greeting + f + " " + l)
}

// **Cannot reassign a "let", but you CAN give it a different value**
// **"var" can be reassigned, as long as it's the same type**

printName("Kaitlin", "Muse");

// **Can use js-style concatenation in ts as well**

var msg : string = "Kaitlin";


// **Can also do this!!**
console.log(`A long message to ${msg} filled with text`);


// **ANY valid js can be used in typescript**















