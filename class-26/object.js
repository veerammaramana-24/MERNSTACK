let obj ={
    name :"roihth",
    age: 20,
    address:{
        state:"andhra",
        district:"srikakulam",
        pincode:532201
    }
}
let obj1=obj;
obj1.name="babu"
console.log(obj);
console.log(obj1);
//if we want to print just the keys
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

//using constructor method

const obj2 =new Object();
obj2.name="Rohith";
console.log(obj2);


//using functon constructor

function details(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;
}
let details1= new details("babu",23,239090);
console.log(details1);

//merge of arrays
const arr1 = ["likki", 20, "AITAM"];
const arr2 = ["vijay", 20, "AITAM"];
const arr3 = arr1.concat(arr2);
console.log(arr3);