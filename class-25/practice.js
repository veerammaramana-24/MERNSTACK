// console.log(a);
// console.log(b);
// console.log(c);

// let a = 23; //tdz
// const b = 34; //tdz
// c = 45; //

// {
// console.log(a);
// console.log(b);
// console.log(c);
// }

// function a(){
//     const a = 45;
//     console.log(a);

//     function b(){
//         const a = 23;
//         console.log(a);

//         function c(){
//             const a = 34;
//             console.log(a);
//         }
//         c();
//     }
//     b();
// }
// a();

// var fun = ()=>{
//     console.log(a);

//     var a = 45;

//     var b = ()=> {
//         console.log(a);
//         console.log(z);
//     };
//     let z = 45;
//     b();
// };
// let result = fun();
// console.log(result);


// function scope(){
//     if(true){
//         var x=45;
//         let y=10;
//         const z=15;
//     }
//     console.log(x);
//     console.log(y);
//     console.log(z);
// }
// scope();

// function example(){
//     var a=10;
//     function inner(){
//         var b=23;
//         console.log(a);
//         console.log(b);
//     }
//     inner();
//     console.log(b);
// }
// example();

// let arr=[1,2,3,4,5];
// for(i in arr){
//     console.log(i);
// }   // to print indexes of array


// function fun(a){
//     if(a<0)
//     {
//         console.log("negative");
//     }
//     else if(a==0)
//     {
//         console.log("zero");
//     }
//     else
//     {
//         console.log("positive")
//     }};
// fun(null); //whether number is +ve,-ve or 0;

// function fun(n){
//     let sum=0;
//     for(let i=0;i<n;i++){
//         sum=sum+i;
//     }
//     console.log(sum);
// }
// fun(10); //sum of numbers

// function sum(arr){
//     return arr.reduce((acc,curr)=> acc+curr,0)
// }
// console.log(sum([1,2,3,4,5]));   //sum of elments in array

// function max(arr){
//     return Math.max(...arr);
// }
// console.log(max([100,29,388,401,5]));  //max element of array

// let obj1={
//         name:"vijay",
//         age:32,
//         address:{
//             city:"Paris",
//             state:"France"
//         }
// };   
// let obj2={...obj1};
// console.log(obj1);  
// obj2.name="Vijjulu";
// console.log(obj2);
// obj2.address.city="USA"
// console.log(obj2);

// function inner(){
//     var a=20;
//     function outer(){
//         console.log(a);
//     }
//    outer();
// }
// inner();

// const items=["apple","orange","mango"];
// for(let i=items.length-1;i>=0;i--){
//     console.log(${i}. ${items[i]});
// }
const items = ["apple", "orange", "mango"];
for (let i = 0; i<items.length; i++) {
    console.log(${i}. ${items[i]});
}