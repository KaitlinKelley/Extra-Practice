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
// function fullName(first : string, last : string) : string {
//     return first + " " + last;
// }

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

// printName("Kaitlin", "Muse");
//
// // **Can use js-style concatenation in ts as well**
//
// var msg : string = "Kaitlin";
//
//
// // **Can also do this!!**
// console.log(`A long message to ${msg} filled with text`);
//
//
// // **ANY valid js can be used in typescript**
//
// var names : string[] = ["Kaitlin", "John", "Foster"];
// var counter: number = 0;
//
//
// //immediately invoked function
// (function(){
//     for (let name in names){
//         counter++;
//     }
// })();
//
// console.log(counter);
//
// //Function Expression
// // var fullName : (first:string, last:string) => string;
//
// fullName = function(first:string, last:string){
//     return first + " " + last;
// }
//
// console.log(fullName("Kaitlin", "Muse"));
//
// //different version of the above function!
// //immediately invoked function arguments
// (function(first:string, last:string){
//     console.log(first + " " + last);
// })("Kaitlin", "Muse");
//
// //closures encapsulate data, behaviors, etc.
// //closures can maintain levels of state
//
// //All functions are closures
//
// //functions have access to any public variables in the outer scope
//
// // function nameFunction(name:string) : void {
// // 	var n : string = name;
//
// // 	function printName(){
// // 		console.log(n);
// // 	}
//
// // 	printName();
// // }
//
// // nameFunction("Kaitlin");
//
//
//
//
//
//
// //Inner functions maintain access to the outer scope even AFTER the values are returned!
// // function nameFunction(name:string){
// // 	var n : string = name;
//
// // 	return function(){
// // 		console.log(n);
// // 	}
// // }
//
// // var nameAgain = nameFunction("John");
// // nameAgain();
//
//
//
// function lineup(){
//     var nowBatting : number = 1;
//
//     return {
//         nextBatter(){nowBatting++},
//         currentBatter(){return nowBatting}
//     }
// }
//
//
// let batters = lineup();
//
// console.log(batters.currentBatter());
// batters.nextBatter();
// console.log(batters.currentBatter());
// batters.nextBatter();
// console.log(batters.currentBatter());
//
//
// let pitchers = lineup();
// console.log(pitchers.currentBatter());
// //This restarts at 1
//
// class Invoice {
//     companyProfile : string;
//
//     constructor(public name, public city, public state){
//         this.companyProfile = name + ", " + city + ", " + state;
//     }
// }
//
// var googleInvoice = new Invoice("Google", "Mountain View", "CA");
// var yahooInvoice = new Invoice("Yahoo", "SF", "CA");
//
// console.log(googleInvoice.companyProfile);
// console.log(yahooInvoice.companyProfile);
//
// class Report {
//     companyProfile: string;
//
//     constructor(public name:string){
//         this.companyProfile = name;
//     }
// }
//
// class Invoice extends Report {
//     constructor(public name:string, public total:number){
//         super(name);
//     }
//
//     printInvoice(){
//         return this.name + " " + this.total;
//     }
// }
//
// class BillOfLading extends Report {
//     constructor(public name:string, public city:string, public state:string){
//         super(name);
//     }
//
//     printBol(){
//         return this.name + " " + this.city + " " + this.state;
//     }
// }
//
// var invoice = new Invoice("Google", 200);
// var invoiceTwo = new Invoice("Yahoo", 2000);
// var bol = new BillOfLading("Google", "Scottsdale", "AZ");
// console.log(invoice.companyProfile);
// console.log(invoiceTwo.printInvoice());
// console.log(bol.printBol());
//
// var realUser = {
//     email: "test@test.com",
//     firstName: "Kaitlin",
//     lastName: "Muse",
//     sayHi(){
//         return "Hey there!";
//     }
// };
//
// console.log(realUser.sayHi());
//
// //class is like a blueprint, interface like a set of rules that objects/classes must follow
// //doesn't use "implements" keyword??
//
// interface User {
//     email:string;
//     firstName?:string;
//     lastName?:string;
// }
// //The "?" marks those fields as optional
//
// function profile(user:User):string{
//     return `Welcome, ${user.firstName} ${user.lastName}!`;
// }
//
// //Somehow it knows that this object is a user???
// var realUser = {
//     email: "test@test.com",
//     firstName: "John",
//     lastName: "Coker"
// };
//
// console.log(profile(realUser));


interface InvoiceFunc {
    //args and return type
    (name:string, total:number) : void;
}

let myInvoice : InvoiceFunc;
myInvoice = function(n,t){
    console.log(n);
    console.log(t);
}

myInvoice("Google", 500);

//loosely coupled interface with class
interface User {
    email:string;
    firstName?:string;
    lastName?:string;
}

class Admin {
    role:string;
    constructor(public email:string){
        this.role = "Admin";
    }
}

function profile(user:User) : string{
    return `Welcome, ${user.email}`;
}

var joe = new Admin("joe@joe.com");
console.log(joe.role);


//Direct Implementation
//Interface name should match class, with I in front
interface IPost {
    title:string;
    body:string;
}

class Post implements IPost {
    title:string;
    body:string;

    constructor(post:IPost){
        this.title = post.title;
        this.body = post.body;
    }

    printPost(){
        console.log(this.title);
        console.log(this.body);
    }
}

var post = new Post({title:"My Title", body:"Stuff"});
console.log(post.title);
console.log(post.body);
post.printPost();











