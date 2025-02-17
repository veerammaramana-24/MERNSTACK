// let arr1=[1,2,3,4,5,6];
// let arr2=arr1; //reference type:it is directly changing original one
// arr2.push(4);
// console.log(arr2);
// console.log(arr1);

//spread operator
// // ... three dots represent the spread operator means the original array doesnot change
// let arr1=[1,2,3,4,5,6];
// let arr2=[...arr1];
// arr2.push(7);
// console.log(arr2);
// console.log(arr1);



//merge two arrays
// let arr1=[1,2,3,4,6,5];
// let arr2=[7,8,9,6];
// let obj1={
//     name:"Aman",
//     age:20
// };
// let obj2={...obj1};
// obj2.name="aitam";
// console.log(obj2);
// console.log(obj1);


//merging two objects
// let obj1={name:"aman",age:20};
// let obj2={name:"amar",age:16};
// let result={...obj1,...obj2};
// console.log(result);


// let numbers=[10,30,50];
// function sum(a,b,c){
//     return a+b+c;
// }
// console.log(sum(...numbers));


// let arr=[30,50,70,90,86];
// let[first,second,...rest]=[30,50,70,90,86];
// console.log(first);
// console.log(second);
// console.log(rest);


// let user={
//     name:"aman",
//     age:20,
//     address:"srikakulam"
// };
// let{name,age,...location}=user;
// console.log(name);
// console.log(age);
// console.log(location);

//shallow  vs deep copy
// let obj1={
//     name:"aman",
//     age:20,
//     address:{
//         city:"srikakulam",
//         state:"andhra pradesh"
//     }
// };

// let obj2={...obj1};  //shallow copy
// obj2.name="aitam";
// obj2.address.city="delhi"
// console.log(obj2);


// let obj1={
//     name:"aman",
//     age:20,
//     address:{
//         city:"srikakulam",
//         state:"andhra pradesh"
//     }
// };
// // let obj2=JSON.parse(JSON.stringify(obj1));
// let obj2=structuredClone(obj1);
// obj2.address.city="delhi";
// obj2.name="vijay";
// console.log(obj2);
// console.log(obj1);


// let obj3={
//     name:"aman",
//     age:20,
//     salary:50000,
//     address:{
//                 city:"srikakulam",
//                 state:"andhra pradesh"
//             }
// };
// let obj4={...obj3};
// obj4.name="vijjulu";
// obj4.address.city="delhi";
// console.log(obj4);
// console.log(obj3);

// let str1="vijay";
// let str2="devarakonda";
// let result=My name is ${str1} and my surname is ${str2};
// console.log(result);


// const paragraph=`this is line one
// this is line two
// this is line three`;
// console.log(paragraph);


// let a=6;
// let b=10;
// console.log(the sum og ${a} ans ${b} is ${a+b});

function hello(name){
    return hello${name}
}
console.log(${hello("Aman")},welcome to aitam training center);