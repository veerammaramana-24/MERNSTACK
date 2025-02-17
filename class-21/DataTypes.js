// DataTypes in Javascript
// 1.primitiveDatatypes==>Number,string,boolean,undefined,null,Symbol
// 2.No-primitive data types ==> Object,array and function

// 1.Number: it is used to represent both integer and floating point numbers. range of this number is 2^53.if your number is greater than that you can use BigInt.

// 2.string: It is used to represent a sequence of characters it is enclosed in single quotes(''),double quotes("") or backticks('').

// 3.boolean : it is used to represent a logical Value.it can have two values true or false.

// 4.undefined:it is used to represent an undefined value.

// 5.null: it is used to represent an empty value.

// 6.symbol:it is used to represent an unique value.


// let studentName="likki";
// let studentAge=20;
// let studentIsMale=false;
// let salary=5000.00;
// let studentMarks=null;
// let studentAddress;
// console.log(studentName);
// console.log(studentAge);
// console.log(studentIsMale);
// console.log(salary);
// console.log(studentMarks);
// console.log(studentAddress);

// typeof function()in javascript==> it is used to check the datatype of the variable
// let studentNAme="likki";
// let studentAge=20;
// let studentIsMale=false;
// let salary=5000.00;
// let studentMarks=null;
// let studentAddress;
// console.log(typeof studentName);
// console.log(typeof studentAge);
// console.log(typeof studentIsMale);
// console.log(typeof salary);
// console.log(typeof studentMarks);
// console.log(typeof studentAddress);

//Non-Premitive DataTypes
//object==>it is used to represent a collection of key-value pairs.
//how to create object
// let person={
//     name:"Veera",
//     age:22,
//     isMale:false,
//     fees:5000.00,
//     marks:null,
//     address:undefined,
//     college:{
//         name:'AITAM College',
//         location:'TEKKALI',
//         courses:['Computer Science','Mathematics','Physics'],
//     }
// }
// console.log(person);
// console.log(typeof person);
// console.log(person.age);

//Array==>It is used  to represent a collection of elements.
//let cars=["BMW","Audi","Mercedes","Toyoto","TATA"];
//console.log(cars);


//Function in javascript==>function is a block of code that performs a specific task.function is only execute when it is called or invoked.and function is used to avoid code duplication.
//how to create function
// function add(a,b)
// {
//     return a+b;
// }
// console.log(add(5,5));
// console.log(add(89,58));
// console.log(add(100,200));
// console.log(add(89.96,58.0));