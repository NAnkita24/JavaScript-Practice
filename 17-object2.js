// const person =new Object(name="Ankita")
// console.log(person);

const person={}
person.name="Nikita";
person.age=21;
person.surname="Phadtare";
//console.log(person);
console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person.hasOwnProperty("surname"));

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
 
const obj5={
    name:"Ankita",
    education:{
        class:"BE",
        roll:38
    }
}

//console.log(obj5.education);


const obj4=Object.assign(obj1,obj2)
//console.log(obj4);
const obj3={...obj1,...obj2}
//console.log(obj3);

