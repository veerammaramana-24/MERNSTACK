// let arr=new Array[3,2,4,6,8];
// console.log(arr);

// let arr1=[1,2,3,4,5];
// arr1.push(6);
// arr1.unshift(0);
// arr1[1]=15;
// console.log(arr1);
// arr1.pop();  //to delete element at last
// arr1.shift();  //to delete element at start
// console.log(arr1);

let arr1=[1,2,3,4,5];
arr1.forEach((num)=>{
    console.log(num);
})
let arr2=arr1.map((num)=>{
    return num*num;
});
console.log(arr2);
console.log(arr1);

// //reduce method
// let arr3=arr1.reduce((acc,num)=>{
//     return acc+num;
// },0);
// console.log(arr3);
// console.log(arr1);