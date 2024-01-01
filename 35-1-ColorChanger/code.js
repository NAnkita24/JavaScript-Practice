let button=document.querySelectorAll(".button")
let body=document.querySelector("body")

button.forEach(function(button){
    console.log(button);
    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);

        if(e.target.id === 'Orange'){
            body.style.backgroundColor=e.target.id
        }

        if(e.target.id === 'White'){
            body.style.backgroundColor=e.target.id
        }

        if(e.target.id === 'Green'){
            body.style.backgroundColor=e.target.id
        }

        if(e.target.id === 'Red'){
            body.style.backgroundColor=e.target.id
        }
    })
})