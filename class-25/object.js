// let obj={
//     name:"aman",
//     age:20,
//     isMale:"true",
//     salary:5000.00,
// }
// console.log(obj);
// console.log(obj.age);
// console.log(obj['age']);
// console.log(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

let details=[
    {
        name:"aman",
        age:20,
        isMale:"true",
        salary:5000.00,
    },
    {
        name:"aman",
        age:20,
        isMale:"true",
        salary:5000.00,
    },
    {
        name:"aman",
        age:20,
        isMale:"true",
        salary:5000.00,
    }
    ];
    console.log(details[1].name);
    let filterdetails=details.filter((details)=details.age>22);
    console.log(filterdetails);