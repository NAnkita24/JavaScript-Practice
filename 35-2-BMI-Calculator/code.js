let form=document.querySelector('form');

form.addEventListener('submit', (function(e){
    e.preventDefault();

    let height=parseInt(document.querySelector('#height').value)
    console.log(height);

    let weight=parseInt(document.querySelector('#weight').value)
    console.log(weight);

    let result=document.querySelector('#result')
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //show the result
        results.innerHTML = `<span>${bmi}</span>`;

}))


