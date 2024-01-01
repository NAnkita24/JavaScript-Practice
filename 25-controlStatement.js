const marks=21;

// if(marks>20){
//     console.log("marks is greater than 20");
// }
// else{
//     console.log("marks is less than 20");
// }


// let age=18;

// if(age<18){
//     console.log("not eligible for voting ");
 
// }
// else if(age>18){
//     console.log("eligible for voting");
// }

// else if(age=18){
//     console.log("you are eligible ");
// }

// let a=6;
// if(a==6 && a>5 ){
//     console.log(a);
// }

// if(a==7 || a>4){
//     console.log("an");
// }

/*-------------------null---------------------------------------------------------------*/

let val1;
val1=5??10
console.log(val1);

val1=null??10
console.log(val1);

val1=undefined ?? 15
console.log(val1);

val1=null ?? undefined
console.log(val1);

//Tertiary Operator

const price=45;
price>50 ? console.log("greater than 50") :console.log("less than 50");;