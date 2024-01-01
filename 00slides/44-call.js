function abc(username){
this.username=username
}

function bc(username,email){
    abc.call(this,username);
    this.email=email;
}

let ab= new bc("Ankita","apjagtap24@gmail.com");
console.log(ab);