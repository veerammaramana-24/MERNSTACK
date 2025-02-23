// function greet(name,callback){
//     console.log(`Hello ${name}`);
//     callback();
// }
// function msg(){
//     console.log("welcome to Aitam University");
// }
// greet("VEERA",msg);


function calculate(a,b,callbackl){
    const result=a+b;
    callbackl(result);
}

function showresult(result){
    console.log(`result is:${result}`);
}
console.log("loading data....")

setTimeout(()=>{
    console.log("data loaded...after delay");

},100);
console.log("process ended");

function step1(callback){
    console.log("Step 1 called");
}
function step2(callback){
    console.log("Step 2 called");
}
function step3(callback){
    console.log("Step 3 called");
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("All steps are completed");
        });
    });
});
