var today = new Date()
var expires = new Date(toda.getTime() + 365 * 24 * 60 * 1000)

function getCookie() {
    
}

// WELCOME MESSAGE + USERNAME PROMPT
function usernameInput() {
    // a prompt to save user's name
    let person = prompt('Entrez votre nom ici:', '')
    // ask one more time for the username if user didn't provide one
    if (person == null || person == '') 
    {
        let person = prompt('Si vous voulez sauvegarder votre score entrez votre nom:', '')
    } else {
        // save user's name as Cookie
        document.cookie = "Name=" + person
    }
}
usernameInput()