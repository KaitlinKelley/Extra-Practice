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

//namespaces formerly known as modules

namespace Blog {
    //export makes these items available outside the namespace??
    export interface IPost {
        title:string;
        body:string;
    }

    export class Post implements IPost {
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
}




namespace Content {
    export interface IPost {
        title:string;
        body:string;
        slug:string;
        seoKeywords:string;
    }

    export class Post implements IPost {
        title:string;
        body:string;
        slug:string;
        seoKeywords:string;

        constructor(post:IPost){
            this.title = post.title;
            this.body = post.body;
            this.slug = post.slug;
            this.seoKeywords = post.seoKeywords;
        }

        printPost(){
            console.log(this.title);
            console.log(this.body);
        }
    }
}


var blogPost = new Blog.Post({
    title:"My Title",
    body:"Stuff"
});

blogPost.printPost();

var contentPost = new Content.Post({
    title:"My Title",
    body:"Stuff",
    slug: "Slug",
    seoKeywords: "seo"
});

contentPost.printPost();



class Invoice {
    total:number;


    constructor(total:number){
        this.total = total;
    }

    printTotal(){
        console.log(this.total);
    }

    printLater(time:number){
        setTimeout(function(){
            console.log(this.total);
        }, time)
    }

//by using the arrow function, "this" will reference the class properly, instead of referencing the callback function that it's nexted inside
//Do this instead!!!!
    printLaterTwo(time:number){
        setTimeout(() => {
            console.log(this.total);
        }, time)
    }
}

var invoice = new Invoice(400);

//results in undefined! "this" is nested inside multiple functions
//"this" can only be used one layer deep inside a function
// invoice.printLater(3000);



invoice.printLaterTwo(3000);


//Callback Function
//a function that is passed inside of another function
var dbQuery = function() : void {
    setTimeout(() => {
        console.log("Query!");
    }, 3000)
}

//method that takes a callback function as an arg
//Higher Order Function
function loadPage(q: () => void){
    console.log("Header loaded");
    q();
    console.log("Sidebar loaded");
    console.log("Footer loaded");
    //Asynchronous stuff!!!
}

loadPage(dbQuery);


//****Typescript has a non-blocking nature******


"use strict";

//Promise statuses: Pending, Resolved, Rejected

// let performUpload = function(imgStatus:string):Promise<{imgStatus:string}> {
//     return new Promise((resolve) => {
//         console.log(`Status: ${imgStatus}`);
//         setTimeout(() => {
//             resolve({imgStatus:imgStatus});
//         }, 1000);
//     });
// }
//
// var upload;
// var compress;
// var transfer;
//
// performUpload("Uploading...")
//     .then((res) => {
//         upload = res;
//         return performUpload("Compressing...");
//     })
//     .then((res) => {
//         compress = res;
//         return performUpload("Transferring...");
//     })
//     .then((res) => {
//         transfer = res;
//         return performUpload("Image upload completed.");
//     });


// class Post {
//     @processOne()
//     @processTwo()
//     //someFunction has been decorated
//     // someFunction(){}
// }

//decorator must return a function
function processOne(){
    console.log("Process One has run.");
    //typescript compiler requires these args
    return function(target, propertyKey:string, descriptor:PropertyDescriptor){
        console.log("Process One has been called.")
    }
}

function processTwo(){
    console.log("Process Two has run.");
    //typescript compiler requires these args
    return function(target, propertyKey:string, descriptor:PropertyDescriptor){
        console.log("Process Two has been called.")
    }
}

// Output:
// Process One has run.
// Process Two has run.
// Process Two has been called.
// Process One has been called.




//Decorators are called at runtime, NOT at object instantiation
//Notice that Post is never instantiated!
//Decorators are popular when building permissions structures
//Decorators help write cleaner code

//
// @detailedLog("billing")
// class AccountsPayable {
//     constructor(){}
// }
//
// @detailedLog("warehouse")
// class ProductManager {
//     constructor(){}
// }
//
// //can be layered on top of any class that we want to add a logging functionality to
// function detailedLog(dashboard:string){
//     if(dashboard == "billing"){
//         console.log("Working in billing.");
//         return function(target:Object){};
//     }else{
//         return function(target:Object){};
//     }
// }
//
// //class decorator needs target
//
// var post = new AccountsPayable;
// var pm = new ProductManager;

//class decorators allowed for shared behavior w/o inheritance

// @detailedLog("billing")
// class AccountsPayable {
//     constructor(){}
//
//     @admin
//     deleteAccount(){
//         console.log("Deleting account.");
//     }
// }

function detailedLog(dashboard:string){
    if(dashboard == "billing"){
        console.log("Working in billing.");
        return function(target:Object){};
    }else{
        return function(target:Object){};
    }
}

function admin(target:Object, propertyKey:string, descriptor:TypedPropertyDescriptor<any>):any{
    console.log("Doing admin check");
    return descriptor;
}
//
// var post = new AccountsPayable;
// post.deleteAccount();

// Output:
// Doing admin check
// Working in billing.
// Deleting account.




type EmployeeType = {
    email:string;
    roles?:string[];
}

let data: {employees?: EmployeeType[]};

data = {
    employees: [
        {email: "test@example.com", roles: ["admin", "superAdmin"]},
        {email: "test2@example.com"},
        {email: "test3@example.com"}
    ]
}

//Done without optional chaining!
// if (data && data.employees){
//     formattedEmployees = data.employees.map((employee:EmployeeType) => {
//         let roles;
//         if (employee.roles){
//             roles = employee.roles.join(", ");
//         }
//         return `${employee.email.toUpperCase()} ${roles}`;
//     })
// }

//Done with optional chaining, much more concise!!
//Using the "?" allows us to check if something exists
//Can help prevent errors, esp with API calls
//Will check first if data returns anything, then checks to see if employees exists, etc.
const formattedEmployees = data?.employees?.map((employee:EmployeeType) => {
    const roles = employee.roles?.join(", ");
    return `${employee.email.toUpperCase()} ${roles}`;
})

// Output:
// ["TEST@EXAMPLE.COM admin, superAdmin", "TEST2@EXAMPLE.COM undefined", "TEST3@EXAMPLE.COM undefined"]

console.log(formattedEmployees);




















