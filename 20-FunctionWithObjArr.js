function cartValue(val1,val2,...num){
return num
}
console.log(cartValue(2,5,6,8));

let person={
    username:"Omi",
    price:"free"
}

function sell(object){
    console.log(`The name of person is ${object.username} & his price is ${object.price}`);
}
sell(person)

const arr=[20,31,45,12]

function arrayValue(arr1){
    return arr1[2]
}
console.log(arrayValue(arr));