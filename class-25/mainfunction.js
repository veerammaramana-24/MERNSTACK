// task-1
// function print(){
//     let a=5;
//     var b=10;
//     console.log(a);
//     console.log(b);
// }
// print();
// console.log(a);
// console.log(b);

// task-2
// var c=10;
// {
//     console.log(c);
//     let d=5;
//     console.log(d);
//     let c=93;
// }
// console.log(c);


// function outer(){
//     let a=10;
//     function inner(){
//         console.log(a);
//     }
//     inner();
// }
// outer();

// function outer(){
//     let count=0;
//     return function(){
//         count++;
//         console.log(count);
//     };
// }
// let counter=outer();
// counter();
// counter();


function outerfunction(){
    var a=10;
    function innerfunction(){
        console.log(a);
    }
    a+99;
    return innerfunction;
}
var output=outerfunction();
console.log(output);
output();