// what is promises?
// promises are used to handle asynchronous in javascript
// they are having  three response of promises 1.pending 2.resolved 3.rejected
// promises take two arguments in function parameter 1.resolve 2.reject


// const myPromise=new Promise((resolve,reject) => {
//     let success=false;
//     if(success){
//         resolve("success");
//     }
//     else{
//         reject("falied");
//     }
// });
// myPromise
// .then((message) =>{
//     console.log("success:",message);
// })
// .catch((error) => {
//     console.log("error:",error);
// })
// .finally(() => {
//     console.log("operation finished");
// });

//promise chaining
// function fetchData(){
//     return new Promise((resolve) => {
//         setTimeout(()=>resolve("data fetched"),2000);
//     });
// }
// fetchData()

// .then((data)=>{
//     console.log(data);
//     return "processing the data......";
// })
// .then((message)=>{
//     console.log(message);
//     return "Data processed successfully.....";
// })
// .then(console.log)
// .catch(console.error)



//handling of errors in promises....
// const fetchData=()=>{
//     return new Promise((resolve,reject) => {
//         setTimeout(() => reject("❌data not feteched"),2000);
//     });
// };
// fetchData()
// .then((data)=>console.log(data))
// .catch((error)=> console.error(error))
// .finally(()=> console.log(" 👍👍  ✅✅  operation finished"));


