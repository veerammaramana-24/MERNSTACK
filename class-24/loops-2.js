//loop in js
// for loop
//while loop
//do-whilw loop

//for loop:
console.log("for loop:");
for(let i=0;i<10;i++){
        console.log(i);
}
//while loop
console.log("while loop:");
let j=1;
while(j<=10){
    console.log(j);
    j++;
}
// do while loop
console.log("do-while loop:");
let k=1;
do{
    console.log(k);
    k++;
}while(k<=10);

//for in loop(used for objects)
console.log("forin loop:");
let college={
    name:"AITAM",
    address:"Srikakulam",
    students:163,
    status:"Good"
};
// console.log(college.status);
// console.log(college.students);
for(let key in college){
    console.log(key,college.key);
}

//for of loop(we use them to loop over string and array)
console.log("forof loop:");
let arr=[1,2,3,4,5,6];
for(let num of arr){
    console.log(num);
}


//for each loop(we use them to loop over an array)
console.log("foreach loop:");
let array=[1,2,3,4,5,6];
array.forEach((num)=>{
    console.log(num);
});
