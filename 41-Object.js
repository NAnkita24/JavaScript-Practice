//  const abc=Object.getOwnPropertyDescriptor(Math,"PI")
//  console.log(Math.PI);
// console.log(abc);

const person = {
    name: "Ankita",
    roll: 183,
    friend: "Niral"

}
// console.log(Object.getOwnPropertyDescriptor(person, 'friend'));
// person.friend = "Omkar"

// Object.defineProperty(person, 'friend', {
//     writable : false,
//     enumerable:false
// })

// person.friend = "Niral"
// console.log(Object.getOwnPropertyDescriptor(person, 'friend'));

// for (let key in person ) {
//     console.log(key+" "+person[key]);  //person.name is equivalent to person[name]
// }

// enumerable uniterable means they are excluded from loopinf
for (const [key , value] of Object.entries(person)) {
    console.log(key+" : "+value);
}

Object.defineProperty(person, 'friend', {
    writable : false,
    enumerable:false
})

for (const [key , value] of Object.entries(person)) {
    console.log(key+" : "+value);
}
