// var today = new Date()
// var expires = new Date(toda.getTime() + 365 * 24 * 60 * 1000)

// // WELCOME MESSAGE + USERNAME PROMPT
// function usernameInput() {
//     // a prompt to save user's name
//     let person = prompt('Entrez votre nom ici:', '')
//     // ask one more time for the username if user didn't provide one
//     if (person == null || person == '') 
//     {
//         let person = prompt('Si vous voulez sauvegarder votre score entrez votre nom:', '')
//     } else {
//         // save user's name as Cookie
//         document.cookie = "Name=" + person
//     }
// }

const RANDOM_WORDS_API = "../data/words.json"
const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('inputQuote')
const timerElement = document.getElementById('timer')
const usernameElement = document.getElementById('username')
const wpmLabelElement = document.getElementById('')

// SETTING THE TEST TYPE
const modeToggle = {
    mode1:1,
    mode2:2
}
// SETTING WORDS COUNT FOR "WORDS" MODE
const wordCount = {
    words20:20,
    words50:50,
    words70:70
}
// SETTING TIME LIMIT OPTION WHEN IN TIMER MODE
const timerLimit = {
    timer15:15,
    timer30:30,
    timer60:60
}
let wordsTable = []

// INITIALIZING RESULT ATTRIBUTS
let timer = 00
let wpm = 00
let acc = 00

// DEFAULT VALUES
let selectedWordCount = wordCount.words20
let selectedTime = timerLimit.timer30


// FETCHING DATA FROM JSON FILE USING FETCH.THEN PROMISE METHODE
function getRandomWords() {
    let id = Math.floor(Math.random() * 1490)
    return fetch(RANDOM_WORDS_API)
    .then((response) => response.json())
    .then((data) => {
        data.forEach(line => {
            quoteDisplayElement.innerText = line.line
        });
    })
    .catch(function(error) {
        // HANDLING ERRORS
        console.log('Request error', error)
    })
}
async function genPhrase () {
    // let words = await getRandomWords()
    // words.forEach(element => {
    //     Object.entries(element).forEach(([key, value]) => {
    //         console.log(`${key} ${value}`)
    //     })
    //     console.log('-------------------')
    // });
}
async function newQuote() {
    let word = await getRandomWords()
    quoteDisplayElement.innerHTML = ""
    
    console.log(word)

    //  PUT EACH LETTER IN A SPAN ELEMENT SO ITS EASY TO COMPRARE THEM
    // for (character of word) {
    //     const wordCharacter = document.createElement('span')
    //     wordCharacter.className = "char"
    //     wordCharacter.innerHTML = character
    //     quoteDisplayElement.appendChild(wordCharacter)
    // }
}