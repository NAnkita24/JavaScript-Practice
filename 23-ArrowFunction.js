let user={
    username:"Ankita",
    price:99,

    WelcomeMessage:function(){
        console.log(`${this.username},Welcome to website`);

    }

}
// user.WelcomeMessage()
// user.username="sam"
// user.WelcomeMessage()
// console.log(this);


function abc(){
    username="omkar"
    console.log(this.username);
}
//abc();


const user1=()=>{
username="hitesh"
console.log(this.username);
}
console.log(user1())

const add=(num1,num2)=>{
return num1+num2
}
console.log(add(5,6));


const add2=(num1,num2)=>num1+num2
console.log(add2(7,6));

const add3=(num1,num2)=>({username:"Niki"})
console.log(add3());