let randomNum = (min, max) => Math.floor(Math.random() * max + min)
const pcNumElements = document.querySelectorAll('.numbers-wrapper span')
const guessesElements = document.querySelectorAll('.guesses-wrapper span')
const playBtn = document.getElementById('play')
let pcNum = []
let rightGuesses = []

playBtn.addEventListener('click', function() {
    guessesElements.innerHTML = ""
    pcNum = []
    guesses = []
    while (pcNum.length < 5) {
        let currentNumber = randomNum(1, 100)
        if (!pcNum.includes(currentNumber)) {
            pcNum.push(currentNumber)
        }
    }
    
    
    for (let i = 0; i < pcNum.length; i++) {
        pcNumElements[i].innerHTML = pcNum[i]
        pcNumElements[i].classList.add('pc-number')
    }
    
    setTimeout(hideNumbers, 3000)
    setTimeout(timeIsUp, 3100)
    clearTimeout(hideNumbers)
    clearTimeout(timeIsUp)
})



//////////// FUNCTIONS ////////////

function hideNumbers() {
    for (let i = 0; i < pcNum.length; i++) {
        pcNumElements[i].innerHTML = '?'
    }
}

function revealNumbers() {
    for (let i = 0; i < pcNum.length; i++) {
        pcNumElements[i].innerHTML = pcNum[i]
    }
}

function areGuessesRight(array1, array2) {
    let rightGuess = 0
    for (let i = 0; i < array1.length; i++) {
        if (array2.includes(array1[i])) {
            rightGuess++
            rightGuesses.push(array1[i])
            let guessedIndex = array2.indexOf(parseInt(array1[i]))
            console.log('guessed', guessedIndex)
            console.log(array1)
            array2.splice(guessedIndex, 1)
            console.log('array2', array2, 'array1', array1)
            console.log(rightGuess)
        }
    }
}

function printGuessesWithColors(array, arrayOfElements, array2) {
    for (let i = 0; i < array.length; i++) {
        arrayOfElements[i].innerHTML = array[i]
        arrayOfElements[i].classList.add('guess-number')
    }
    greenRightRedWrong(arrayOfElements, array2)
}

function greenRightRedWrong(arrayOfElements, array) {
    for (let i = 0; i < arrayOfElements.length; i++) {
        if (array.includes(parseInt(arrayOfElements[i].innerHTML))) {
            arrayOfElements[i].style.backgroundColor = 'green'
            array.splice(array.indexOf(parseInt(arrayOfElements[i].innerHTML)), 1)
        } else {
            arrayOfElements[i].style.backgroundColor = 'red'
        }
    }   

}

function timeIsUp() {
    alert('Ti ricordi tutti i 5 numeri? Clicca ok e vediamo')
    let guesses = []
    while (guesses.length < 5) {
        let guess = parseInt(prompt('Inserisci un numero che ricordi'))
        guesses.push(guess)
    }
    revealNumbers()
    areGuessesRight(guesses, pcNum)
    printGuessesWithColors(guesses, guessesElements, rightGuesses)
}