let randomNum = (min, max) => Math.floor(Math.random() * max + min)
const pcNumElements = document.querySelectorAll('.numbers-wrapper span')
const guessesElements = document.querySelectorAll('.guesses-wrapper span')
const playBtn = document.getElementById('play')
let pcNum = []

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
    let rightguess = 0
    for (let i = 0; i < array2.length; i++) {
        if (array2.includes(array1[i])) {
            rightguess++
            console.log(rightguess)
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
    for (let i = 0; i < array.length; i++) {
        if (array.includes(parseInt(arrayOfElements[i].innerHTML))) {
            arrayOfElements[i].style.backgroundColor = 'green'
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
    console.log(guesses)
    areGuessesRight(pcNum, guesses)
    printGuessesWithColors(guesses, guessesElements, pcNum)
}