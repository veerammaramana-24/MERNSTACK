// let arr3=["apple","orange","mango","grapes"];
// let{first,second,...others}=arr3;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(others);


// let emp={
//     id:101,
//     name:"likki",
//     age:20,
//     salary:40000,
//     depatment:"CSE",
// };
// let{id,name,...rest}=emp;
// console.log(id);
// console.log(name);
// console.log(rest);


let details={
    fname:"likku",
};
let{fname,lname="koyyana"}=details;
console.log(fname);
console.log(lname);