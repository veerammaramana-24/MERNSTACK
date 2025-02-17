/*what is hoisting in javascript?==> hoisting is a mechanism in javascript that moves the declaration of the variable to the top of the scope before the code execution.
*/
//console.log(studentName); //error ==> studentName is not defined.
// const studentName= "Aman";
// console.log(studentName);

//console.log(studentName); //error ==> studentName is not defined.
// let studentName= "Aman";
// console.log(studentName); //Aman

// console.log(studentName);  //undefined
// var studentName= "Aman";
// console.log(studentName); //Aman





/*what is temporal dead zone in javascript?==> temporal dead zone is a phase in javascript where the variable is declared but not initialized.
*/
// console.log(studentName); //error ==> studentName is not defined.
// const studentName; //error ==> missing initializer in const declaration.
// console.log(studentName); //error ==> studentName is not defined.

// console.log(studentName); //error ==> studentName is not defined.
// let studentName; //error ==> missing initializer in let declaration.
// console.log(studentName); //error ==> studentName is not defined.

// console.log(studentName); //undefined
// var studentName; //undefined
// console.log(studentName); //undefined