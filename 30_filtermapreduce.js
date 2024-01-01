let arr = [12, 23, 34, 45, 56, 67, 78, 89, 99]

// let abc=arr.filter(function(a){
//     return a>40
// })

let abc = arr.filter(function (a) {
    if (a >= 89) {
        return a
    }
})

//let abc=arr.filter((a) => a>40 )


// let abc=arr.map(function(a){
//     return a+2
// })

//console.log(abc);

// let a1 = [1, 2, 3, 4, 5]

// a1.forEach(function (a) {
//     console.log(a + 10);
// })

// let ab = a1.map((a) => a + 10)
// //console.log(ab);
let a1 = [1, 2, 3, 4, 5]

//for each cant return value hence o/p is undefined
// let a2 = a1.forEach( (a)=> (
//      a + 10
// ))
// console.log(a2);

let a3=a1.map((n) => n*10).map((n) => n+1).filter( (n) => n>30 )

//console.log(a3);

 let om=a1.reduce(function(acc,initial){
    console.log(`acc : ${acc} and initial is ${initial}`);
    return acc +initial
},1)
