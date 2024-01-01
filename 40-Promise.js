// let promiseCheck=new Promise(function(abc,def){
//     setTimeout(function(){
//         console.log("Task Completed");
//         abc()
//     },1000)
// })

// promiseCheck.then(function(){
//     console.log("resolve");
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("completed");
//         resolve()
//     },1000)

// }).then(function(){
//     console.log("Task Consume");
// })

// let promiseCheck3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Ankita",roll:183})
//     },1000)
// })

// promiseCheck3.then(function(user){
//     console.log(user);
// })

// let promiseCheck4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error =false;
//         if(!error){
//             resolve({username:"Anku",pwd:123})
//         }
//         else{
//             reject("Error Occur");
//         }
//     },1000)
// })
// promiseCheck4.then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=>{
//     console.log("Promise is either resolve or reject");
// })

// let promiseCheck5 = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ username: "Javascript", pwd: 123 })
//         }
//         else {
//             reject("Error Occur");
//         }
//     }, 1000)
// })

// async function conPromiseCheck5() {
//     try {
//         const output = await promiseCheck5
//         console.log(output);
//     }
//     catch (error) {
//         console.log(error);
//     }

// } 
// conPromiseCheck5()

async function getAllUser(){
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:",error);
    } 
}
getAllUser()