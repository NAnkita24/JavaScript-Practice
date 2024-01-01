const mysym=Symbol("key1")

const person={
    name:"Ankita",
    age:21,
    "full name":"Ankita Jagtap",
    [mysym]:"mykey1"
}

// console.log(person.age);
// console.log(person["full name"]);
// console.log(person[mysym]);

person.email="apjagtap24@gmail.com"
console.log(person.email);
// Object.freeze(person)
person.email="omijagtap24@gmail.com"
console.log(person.email);

person.greeting=function(){
    console.log("Hello");
}
console.log(person.greeting);  //undefine
console.log(person.greeting());