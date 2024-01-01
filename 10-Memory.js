//Stack(Primitive), Heap(Non-Primitive)

let account="ankitajagtap.com"
let acc=account;
acc="omkarjagtap.com"
console.log(acc);
console.log(account);

let person={
    fname:"Ankita",
    age:21
}

let person1=person;

person1.fname="Omkar"

console.log(person);
console.log(person1);