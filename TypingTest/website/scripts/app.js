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

const RANDOM_WORDS_API = "https://raw.githubusercontent.com/nmondon/mots-frequents/master/data/frequence.json"
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
// SETTING TIME LIMIT OPTION WHEN IN TIMER MODE
const timerLimit = {
    timer15:15,
    timer30:30,
    timer60:60
}
// INITIALIZING RESULT ATTRIBUTS
let timer = 00
let wpm = 00
let acc = 00


// FETCHING DATA FROM JSON FILE USING FETCH.THEN PROMISE METHODE
function getRandomWords() {
    let id = Math.floor(Math.random() * 1490)
    fetch(RANDOM_WORDS_API)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let word = data[id].label
    })
    .catch(error => {
        // HANDLING ERRORS
    })
}
// 
async function newQuote() {
    let word = await getRandomWords()
    quoteDisplayElement.innerHTML = ""

    console.log(word)
    
    for (character of word) {
        const wordCharacter = document.createElement('span')
        wordCharacter.className = "char"
        wordCharacter.innerHTML = character
        quoteDisplayElement.appendChild(wordCharacter)
    }
}