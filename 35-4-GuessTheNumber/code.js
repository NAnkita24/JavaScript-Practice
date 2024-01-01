const randomNumber = parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#sub')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.Guess')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playgame = true;

if (playgame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        displayMessage('Please enter valid number')
    }
    else if (guess < 1) {
        displayMessage('Please enter number more than 1')
    }
    else if (guess > 100) {
        displayMessage('Please enter number less than 100')
    }
    else {
        prevGuess.push(guess)
        if (numGuess === 10) {
            displayGuess(guess)
            displayMessage(`Game Over. Random number was${randomNumber}`)
            endGame();
        }
        else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage('You guess right number')
        endGame();
    }
    else if (guess < randomNumber) {
        displayMessage(`Number is too low`)
    }
    else if (guess > randomNumber) {
        displayMessage('Number is too high')
    }

}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}  `
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2> ${message}</h2>`;

}

function endGame() {
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playgame = false
    newGame();
}

function newGame(guess) {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1)
        prevGuess = []
        numGuess = 1
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playgame = true
    })

}


