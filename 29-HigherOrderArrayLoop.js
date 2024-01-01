const greeting="Hello World"

for (const greet of greeting) {
//   console.log(greet);
}

const a=new Map();
a.set("IN","India");
a.set("USA","United States of America")

//console.log(a);

for (const i of a) {
   console.log(i);
}

const obj={
    "game1":"snake",
    "game2":"arrow",
    "game3":"candyCrush"
}

// for (const [key,value] of obj) {
//  //   console.log(key,value);     
// }

// for (const key in obj) {
//     console.log(key);
// }


 let coding=["js","ruby","java","cpp"]

//  coding.forEach(function (item){
//     console.log(item);
//  })


// coding.forEach((item)=>{
//     console.log(item);
// })
 
// function printMe(val){
//     console.log(val);
// }
// coding.forEach(printMe)


// coding.forEach((val,index,array)=>{
//     console.log(val,index,array);
// })

const language=[
    {
        mylan:"java",
        fileName:"java"
    },
    {
        mylan:"javascript",
        fileName:"js"
    }


]

language.forEach((item)=>{
console.log(item);
})
