// const person = {
//     name: "Ankita",
//     roll: 183,
//     friend: "Omkar",

//     abc : function(){
//         console.log(this.name);
//     }
// }

// //console.log(person.name);
// console.log(person.abc());

// console.log(this);

// function abc(a, b){
//    this.a = a;
//     this.b = b;

//     console.log(a);
//     console.log(b);
// }

// console.log(abc(3 , 4));

let person = function (name , age){
    this.name = name;
    this.age = age; 

    return this
}

// in absence of new keywords usertwo overwites userone values
// let userOne = person("ankita" , 21)
// let userTwo = person("omkar" , 20)

let userOne = new person("ankita" , 21)
let userTwo = new person("omkar" , 20)

console.log(userOne);
