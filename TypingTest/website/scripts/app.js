//--DATA
//--french words database
const wordsLib = [
"de","un","et","être","il","avoir","ne","je","son","que","se","qui","en","ce","dans","du","elle","au","de","ce","le","pour","pas","que","vous","par","sur","faire","plus","dire","me","on","mon","lui","nous","comme","mais","pouvoir","avec","tout","y","aller","voir","en","bien","où","sans","tu","ou","leur","homme","si","deux","mari","moi","vouloir","te","femme","venir","quand","grand","celui","si","notre","devoir","là","jour","prendre","même","votre","tout","rien","encore","petit","aussi","quelque","dont","tout","mer","trouver","donner","temps","ça","peu","même","falloir","sous","parler","alors","main","chose","ton","mettre","savoir","yeux","passer","autre","après","regarder","toujours","puis","jamais","cela","aimer","non","heure","croire","cent","monde","entre","donc","enfant","fois","seul","autre","vers","chez","demander","jeune","jusque","très","moment","rester","répondre","tout","entendre","tête","père","fille","mille","premier","car","ni","bon","trois","coeur","ainsi","an","quatre","un","terre","contre","dieu","monsieur","voix",
"penser","quel","arriver","maison","devant","coup","beau","connaître","devenir","air","mot","nuit","eau",
"sentir","vieux","sembler","moins","tenir","ici","comprendre","oui","rendre","toi","vingt","depuis",
"attendre","sortir","ami","trop","porte","lequel","chaque","amour","pendant","déjà","pied","tant","gens",
"parce que","nom","vivre","entrer,","8","porter","pays.","ciel","avant","frère","regard","chercher","âme",
"côté","mort","enfin","revenir","noir","esprit","9","nouveau","ville","rue","appeler","soir",
"?","mourir","pas","partir","cinq","soleil","dernier","jeter","dix","roi","état","corps","beaucoup","suivre","bras",
"écrire","?","montrer","7","place","ouvrir","ah","parti","assez","leur","cher","voilà","année","loin","point",
"visage","bruit","lettre","franc","fond","force","effet","arrêter","perdre","commencer","paraître","aucun","marcher",
"milieu","saint","idée.","presque","ailleurs","travail","lumière","long","seulement","mois","fils","neuf","tel",
"lever","raison","gouvernement","permettre","pauvre","asseoir","point","plein","personne","vrai","peuple",
"fait","parole","guerre","toute","63","pensée","23","quoi","matin","pierre","monter","bas","vent",
"doute","front","8","part","maître","aujourd'hui","besoin","question","apercevoir","recevoir","mieux","peine",
"tour","?","$","autour","près","finir","famille","pourquoi.","souvent","rire","dessus","madame","sorte",
"figure","droit","eh","peur",".","lieu","silence","gros","chef","six","bois","mari","histoire","crier",
"jouer","feu...","6","doux","longtemps","fort","heureux","comme","garder","partie","face","mouvement","fin",
"reconnaître","quitter","personne","21","route","dès","manger","livre","arbre","courir","cas","huit",
"lorsque","mur","55","continuer","est",",","oublier",";","haut","intérêt","cacher","l'un",
"chacun","profond","argent","cause","poser","autant","travers","grand","instant","façon","oeil","d'abord",
"tirer","forme","présenter","ajouter","agir","retrouver","chemin","cheveu","offrir","surtout","certain","plaisir","suite","apprendre","malgré","tuer","rouge","sang","retourner","rencontrer",
"sentiment","fleur","cependant","service","envoyer","plusieurs","table","vite","paix","moyen","dormir","pousser","lit","humain","voiture","rappeler","être","lire","général","nature","or","pouvoir","nouveau","français","joie","sept","tard","président","pourtant","bouche","changer",
"petit","essayer","froid","compter",";","sens","cri","expliquer","espèce","cheval","loi","sombre","ci","sûr","voici",
"ancien","tandis que","frapper","ministre","puisque,","selon","travailler","propre","obtenir","rentrer","mal","pleurer","répéter","société","parfois","politique","oreille","payer","politique",
"apporter","fenêtre","derrière","possible","fortune","compte","champ","manier","vraiment","immense","exister",
"action","boire","public","45","pareil","exemple","bleu","sourire","couleur","coucher","papier","d'autres","mal","fort","bientôt","causer","pièce","montagne","sol","oeuvre","partout","trente","cours","raconter","songer","serrer","désir","manquer",
"cour","nommer","bord","douleur.","conduire","salle?","saisir","premier","comment","entier","projet","demeurer","simple","étude","remettre","journal","geste","disparaître","battre","toucher","situation","oiseau","nécessaire","siècle",
"apparaître","souffrir","113","prix","groupe","centre","malheur","honneur","fermer","accepter","garde","mauvais","tendre","naître","sauver","problème","parmi","larme","avancer","chien","peau","reste","traverser","nombre","debout","mesure","social","souvenir",
"article","vue","couvrir","âge","gagner!","système","long","5","plaire","effort","embrasser","rêve","oser","afin de","passion",
"auquel","empêcher","rapport","refuser","important","décider","produire","soldat","signe","lèvre","vérité","charger","mariage","mêler","certain","espérer","plan","ressembler","cesser","dos","marche","souvenir","dame","chanter","plutôt","conseil","sou","triste",
"coin","jardin","joli","soit","doigt","objet","4","lendemain","lentement","combien","approcher","prier","train","papa","différent","valeur","jeu","échapper","glisser","secret","haut","vieillard","briller","docteur","brûler","terrible","placer","ton","jambe","juger","suffire","endroit","minute","nuage",
"atteindre","présence","fou","épaule","léger","liberté","feuille","journée","libre","annoncer","avenir","sourire","hier","résultat","élever","acheter","préparer","mener","pourquoi","hôtel","semaine","forêt",
"assurer","pur","qualité","prince","bien","également","deviner","médecin","considérer","volonté","seigneur","quelque","vert","moindre",
"art","3","quarante","256","foule","appartenir",'"',"aussitôt","représenter","tromper","intérieur","vendre","beauté","riche","craindre","étrange","emporter","ensuite","soin","naturel","hasard","puis","condition","quinze","classe","voyage","expression","présent",
"auprès","ensemble","caractère","attention","gris","exprimer","or","rouler","faible","posséder","scène","réveiller","difficile","français","foi","aider","découvrir","odeur","choisir","musique","oncle","événement","prononcer","village","taire","envie","midi","herbe","vieux","pluie",
"près","bas","rêver","appuyer","!","après","général","lutte","trembler","réponse","grâce","espace","habitude","défendre","mémoire","existence","grave","créer","maintenir","verre","campagne","quelqu'un","juge",
"genou","impossible","fête","indiquer","prêt","promettre","relever","abandonner","ignorer","parent","large","colère","étoile","devoir","conscience","accompagner","immobile","adresser","observer","puissance",
"juste","matière","sable","séparer","marier","prévoir","vivant","accord","hiver","retour","autrefois","genre","d'autres","vif","amener","obliger","acte","image","horizon","éclairer",
"@","livrer","danger","rôle!","escalier","goût","bête;","ceci","recherche","membre","pain","phrase","contenir","rire","fuir","couler","terme","en","eaux","moyen","police","rocher","tranquille","proposer","unique","éprouver","retenir","type","vin","supérieur","attacher","voler","sec","justice","entraîner","passage","époque","somme","science",
"surprendre","côte","90","gauche","faute","école","ensemble","bon","rayon","briser","sujet","imaginer","diriger","douze","l'une","dernier","avis","parvenir","ouvert","pénétrer","poète","meilleur","paysan","remarquer","éviter","chair","soudain","succès","île","établir","réussir",
"pencher","habiter","entourer","détail","déclarer","réalité","arme","confiance","masse","crise","poste","étonner","dresser","durer","faux","fixer","depuis","énorme","principe","direction","taille","désirer","santé","ventre","marché","entrée","puissant","simplement","tellement","environ","arracher","soutenir","couper","trou","examiner","inconnu","pont","lune","dehors","certes","robe","beaux","douter",
"retirer","cesse","brusquement","source","espoir","camarade","quant à","dent","cou","connaissance","but","vague","promener","élément","fil","voie","nez","forcer",
"particulier","maladie","discours","chaleur","gloire","vide","revoir","aide","début","ennemi","second","flamme","aile","véritable","chaise","sein","lourd","toit","remplir","vaste","terminer","nu","poussière","nord","tenter","émotion","un","hors","remonter","théâtre","révolution","armée","court","noir","semblable","appartement","installer","haine","jeune","position",
"seconde","frais","appel","soulever","allumer","imposer","avant","respirer","droite","baisser","arrière","poitrine","mort","jeunesse","bureau","sac","étranger","courage","souffler","jaune",
"page","étranger","etc","miser","passé","rapide","digne","chaud","propos","attirer","prêter","clair","amuser","occasion","voile","éclater","importance","quartier","soi",
"auteur","religion","2","palais","traiter","flot","engager","intelligence","tantôt","voisin","carte","secret","animal","traîner","été","morceau","cabinet","employer","capable","souffrance","marquer","prouver","titre","importer",
"désert","spectacle","facile","78","reposer","fier","départ","danser","saluer","demande","lueur","joue","saint","accorder","prière","achever",
"avouer","emmener","distinguer","fonction","durant","haut","sommeil","aspect","éclat","moitié","demi","calme","contraire","colline","agiter","hésiter","terrain","rare","sonner","poids","changement","charge","davantage","composer","enlever","poche","rejoindre","son","intérieur","veille","ramener","fruit","étudier","complet","partager","croix","suivant","chasser","interrompre","éloigner","trésor",
"compagnie","1","cuisine","réduire","égal","empire","nation","recommencer","éteindre","sauter","plaindre","conversation","soirée","violent","trait","impression","devant","préférer","révéler","sien","magnifique","désespoir","témoin","visite","respect","solitude","subir","prochain","delà","anglais","rapporter","coûter","réfléchir","remercier",
"officier","déposer","fauteuil","tôt","fumer","affirmer","relation","fumée","convenir","malade","branche","circonstance","ouvrage","compagnon","vêtir","port",
"expérience","avec","accomplir","résoudre","plonger","mien","goutte","chant","détruire","combat","personnage","aventure","intéresser","disposer","absence","machine","aucun","grâce","chaîne","honte","lisser","fait","faim","plaine","verser","pointe","preuve","obéir","éternel","lutter","prétendre","énergie","construire","bataille","victime","sauvage","usage","soumettre","peser","double","tache","guère","troubler","hauteur","tendre","curiosité","beau","répandre","glace","résister","froid","prison","étage","sérieux","droit","billet","protéger","pauvre","rose","enfermer","dur","attitude","mode","neuf","grandir","creuser","crainte","enfoncer","vêtement","envelopper","vague","prévenir","violence","inspirer",,"inutile","content","folie","pitié","courant","ramasser","intention","endormir","inventer","trace","toile","presser","confier","effacer","reculer","user","blanc","nourrir","dangereux","poésie","sommet","remplacer","souhaiter","avance","autorité","épais","inquiétude","choix","tombe","marchand",,"nombreux","muet","signer","absolument","interroger","cercle","dominer","défaut","enfance","réel","faveur","commander","supposer","dépasser","sourd","cruel","erreur","dimanche","cerveau","accuser","arrivée","rapidement","vol","habiller","condamner","lors","menacer","seuil","écraser","perte","troisième","chance","vieil","même","céder","droite","douceur","vide","autrement","ruine","drôle","écarter","rang","réclamer","chiffre","voisin","militaire","roche","distance","apparence","dessiner","conclure","lier",
"françois","discussion","terreur","admettre","banc","vers","attaquer","respecter","rose","silencieux","course","anglais","portier","chat","pendre","supporter","tempête","quart","parfaitement","paysage","figurer","profiter","accrocher","calmer","satisfaire","public","valoir","race","barbe","signifier","couche","inquiéter","désormais","colon","fidèle","rideau","assister","inviter","déchirer","risquer","fatigue","règle","parcourir","gauche","présent","rejeter",
"naissance","loup","renoncer","complètement","extraordinaire","veiller","transformer","tracer","chute","divers","résistance","contenter","naturellement","chemise","mince","siège","patron","as","calme","mériter","printemps","angoisse","précipiter","rompre","habitant","plein","métier","caresser","étouffer","note","animer","passé","fine","fixe","casser","fusil","rond","agent","fonder","roman","plante","franchir","abattre","discuter","fatiguer","réflexion","humide","consentir","accent","curieux","repas","regretter","étendue","profondément","joindre","secours","commencement","corde","secrétaire","vaincre",
"saison","précieux","précis","consulter","haïr","repousser","paupière","certainement","tapis","noire","chasse","nerveux","exécuter","nul","commun","exposer","clef","claire","voyager","haute","renverser","sueur","âgé","rassurer","ferme","retomber","décrire","mentir","instinct","paquet","armer","drame","absolu","savoir","mine","vision","étaler","sentier","demain","beau","blond","essuyer","planche","précéder","dehors","salut","tâche","désigner","fin","abri","détacher","recueillir","rencontre","croiser","rouge","entretenir","visible","professeur","surveiller","perdu","réserver",,"bas","lien","queue","confondre","bande","grain","mensonge","dégager"
]
const capsOffChars = ["abcdefghijklmnopqrstuvwxyz"]
const capsOnChars = ["ABCDEFGHIJKLMNOPQRSTUVWZYZ"]
const digits = ["0","1","2","3","4","5","6","7","8","9"]
const symbols = ['$','£','?','-','~','.',',']
//--character temporaire
const tempChars = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz123456789abcdefghijklmnopqrstuvwxyz.,!?"

const quoteDisplayElement = document.getElementById('quoteDisplay')
const quoteInputElement = document.getElementById('inputQuote')
const timerElement = document.getElementById('timer')
const usernameElement = document.getElementById('username')
const greetMessageElement = document.getElementById('greetMessage')
const wpmLabelElement = document.getElementById('wpmLabel')
const toggleModeElement = document.getElementById('toggleModeBtn')
const currentTimeElement = document.getElementById('currentTime')
const toggleTestModeElement = document.getElementById('testModeBtn')
const quoteElement = document.getElementById('quote')
const blurPanelElement = document.getElementById('blurPanel')

const wordsBtnOneElement = document.getElementById('wordsBtnOne')
const wordsBtnTwoElement = document.getElementById('wordsBtnTwo')
const wordsBtnThreeElement = document.getElementById('wordsBtnThree')

const timerBtnOneElement = document.getElementById('timerBtnOne')
const timerBtnTwoElement = document.getElementById('timerBtnTwo')
const timerBtnThreeElement = document.getElementById('timerBtnThree')
//--SELECT ALL ELEMENTS CONTAINING THIS CLASS USING "QUERYSELECTORALL"
const wordsBtnElements = document.querySelectorAll('.wordsOptionBtn')
const timerOptionBtnElements = document.querySelectorAll('.timerOptionBtn')

//--MAIN MODES
const testMode = {
    mode1:1,
    mode2:2
}

//--SETTING WORDS COUNT FOR "WORDS" MODE
const wordCount = {
    words20:20,
    words50:50,
    words70:70
}
//--SETTING TIME LIMIT OPTION WHEN IN TIMER MODE
const timerLimit = {
    timer15:15,
    timer30:30,
    timer60:60
}

//--INITIALIZING RESULT ATTRIBUTS
let timer = 00
let wpm = 00
let acc = 00
let missed = 0


//--DEFAULT VALUES
let selectedTestMode = testMode.mode1
let selectedWordCount = wordCount.words50
let selectedTime = timerLimit.timer30
let remainingTime = selectedTime
let timerRunning = false
let isTyping = false
let interval

// BEFOR STARTING
// ready a new quote to type everytime user refresh the website
newQuote()

//--START TYPING
quoteInputElement.addEventListener('input', () =>{
    const quoteArray = quoteDisplayElement.querySelectorAll('span')
    const inputArray = quoteInputElement.value.split('')

    let correct = true
    quoteArray.forEach((spannedChar, index) => {
        const inputChar = inputArray[index]
        if (inputChar == null){
            spannedChar.classList.remove('correct')
            spannedChar.classList.remove('incorrect')
            correct = false
        } else if (inputChar === spannedChar.innerText){
                spannedChar.classList.add('correct')
                spannedChar.classList.remove('incorrect')
        } else {
            spannedChar.classList.remove('correct')
            spannedChar.classList.add('incorrect')
            document.getElementById('tipsDisplay').innerText = missed
            correct = false
        }
    })

    // call timer function and start counting
    var time = (function() {
        var exec = false
        return function() {
            if (!exec) {
                exec = true
                setInterval(startTimer, 1000)
            }
        }
    })
    time()

    //--if all characters were typed correctely, get new quote
    //--can use it for later
    if (correct && selectedTestMode == 1) {
        saveResults()
        // TODOO: panel doesnt show up
    }
})
// CLICK ON DISPLAYED TEXT TO FOCUS ON INPUT FIELD AND START TYPING 
// (BECAUSE WE NO LONGER HAVE THE INPUT ELEMENT)
quoteDisplayElement.addEventListener('click', () => {
    quoteInputElement.focus()
})

//--OVERLAY PANEL CLICK TO RESTART UN TEST
blurPanelElement.addEventListener('click', () => {
    newQuote()
    quoteInputElement.focus()
    blurPanelElement.style.display = "none"
})

// //--MAKE A SLEEP FUNCTION
// function sleep(milliseconds) {
//     const date = Date.now()
//     let currentDate = null
//     do {
//         currentDate = Date.now()
//     } while (currentDate - date < milliseconds)
// }

// START COUNTING DOWN TIMER
function startTimer() {
    if(remainingTime > 0) {
        remainingTime--
        timerElement.innerText = remainingTime
    } else {
        clearInterval(timer)
    }

    // if(remainingTime > 0) {
    //     remainingTime--;
    //     timerElement.innerText = remainingTime;
        
    // }else {
    //     clearInterval(timer)
    // }
}

// CURRENT TIME
function dateNow() {
    // every time this function is called, it gets the current time and date
    // used when a test result is saved
    var date = new Date()
    let localDateNow = date.toLocaleString()
    return localDateNow
}

// GET RANDOM FRENCH WORD
function getRandomWords() {

    // push random letter "selectedWordCount" times while "join" a space between them
    var sentence = []
    var x = selectedWordCount
    while(--x) sentence.push(wordsLib[Math.floor(Math.random() * wordsLib.length)])

    // send the value to span function
    quoteDisplayElement.innerText = ""
    let nonspanChar = sentence.join(" ")
    spanCharacters(nonspanChar)
}

// GET LOREM IPSUM WORDS
function loremQuote() {
    // loop "selectedWordCount" times to make random words with random letters
    var ranQuote = "";
    for (n = 0; n < selectedWordCount; n++) {
        // random number between 3 and 6
        let x = Math.floor(Math.random()*6 | 0)+3
        for (i = 0; i < x; i++) {
            ranQuote += tempChars.charAt(Math.floor(Math.random() * tempChars.length));
        }
        // to add space after each word
        ranQuote += " ";
    }
    // TODO: add multiple words
    // pass the value to "spanCharacters" function
    quoteDisplayElement.innerText = ""
    let nonspanChar = ranQuote
    spanCharacters(nonspanChar)
}
//  PUT EACH LETTER IN A SPAN ELEMENT SO ITS EASY TO COMPRARE THEM WITH WHAT -
// -IS GOING TO BE TYPED
function spanCharacters(nonspanChar) {
    // create span element for each character and then give them a "spannedClass" class name. 
    // then append those created spans to the "quoteDisplayElement" which is its parent
    for (character of nonspanChar) {
        const wordCharacter = document.createElement('span')
        wordCharacter.className = "spannedChars"
        wordCharacter.innerText = character
        quoteDisplayElement.appendChild(wordCharacter)
    }
}
// RESTART BUTTON FUNCTION
function newQuote() {
    quoteInputElement.value = ""
    quoteInputElement.focus()
    timerElement.innerText = selectedTime
    // of "toggleModeElement" has a 'LoremMode' class, get the "loremQuote" quotes
    // else, get words from "getRandomWords" function, aka Normal Mode
    if (toggleModeElement.classList.contains('loremMode') == true) {
        loremQuote()        
    }else {
        getRandomWords()
    }
}
// TOGGLE MODE CHAGE
function toggleWordsMode() {
    // toggle and add "loremMode" class in toggleModeElement
    toggleModeElement.classList.toggle('loremMode')
    // if the name of the button is "Normal", change it into "Lorem", else trun it back into "Normal"
    if (toggleModeElement.innerHTML === "Mots français") {
        toggleModeElement.innerHTML = "Mots Lorem"
    } else {
        toggleModeElement.innerHTML = "Mots français"
    }
    newQuote()
}
// SET MODE BETWEEN TIMER AND WORD COUNT
function toggleTestMode() {
    // toggle class name "timerMode" for the test mode button
    toggleTestModeElement.classList.toggle('timerMode')
    // if the button had "words count mode" name, change it into "Timer mode"
    // and remove hidden class names from timer buttons
    // and add the hidden class name into words cound buttons
    if (toggleTestModeElement.innerHTML === "Nombre de mot") {
        toggleTestModeElement.innerHTML = "Compt à rebours"
        for (var i = 0; i < timerOptionBtnElements.length; i++){
            timerOptionBtnElements[i].classList.remove('hidden')
            wordsBtnElements[i].classList.add('hidden')
        }
    } else {
        // else, change the burron name back into "Word count mode"
        // remove hidden class from words buttons
        // and add that class name into timer buttons
        toggleTestModeElement.innerHTML = "Nombre de mot"
        for (var i = 0; i < timerOptionBtnElements.length; i++) {
            timerOptionBtnElements[i].classList.add('hidden')
            wordsBtnElements[i].classList.remove('hidden')
        }
    }
}

// SET WORDS NUMBER IN WORD MODE
function setBtnOne() {
    selectedWordCount = wordCount.words20
    wordsBtnOneElement.classList.add('active')
    wordsBtnTwoElement.classList.remove('active')
    wordsBtnThreeElement.classList.remove('active')
    newQuote()
}
function setBtnTwo() {
    selectedWordCount = wordCount.words50
    wordsBtnOneElement.classList.remove('active')
    wordsBtnTwoElement.classList.add('active')
    wordsBtnThreeElement.classList.remove('active')
    newQuote()
}
function setBtnThree() {
    selectedWordCount = wordCount.words70
    wordsBtnOneElement.classList.remove('active')
    wordsBtnTwoElement.classList.remove('active')
    wordsBtnThreeElement.classList.add('active')
    newQuote()
}
// SET TIMER VALUE IN TIMER MODE
function setTimerBtnOne() {
    selectedTime = timerLimit.timer15
    timerBtnOneElement.classList.add('active')
    timerBtnTwoElement.classList.remove('active')
    timerBtnThreeElement.classList.remove('active')
    remainingTime = selectedTime
    setTimerElement()
}
function setTimerBtnTwo() {
    selectedTime = timerLimit.timer30
    timerBtnOneElement.classList.remove('active')
    timerBtnTwoElement.classList.add('active')
    timerBtnThreeElement.classList.remove('active')
    remainingTime = selectedTime
    setTimerElement()
}
function setTimerBtnThree() {
    selectedTime = timerLimit.timer60
    timerBtnOneElement.classList.remove('active')
    timerBtnTwoElement.classList.remove('active')
    timerBtnThreeElement.classList.add('active')
    remainingTime = selectedTime
    setTimerElement()
}
function setTimerElement() {
    timerElement.innerText = remainingTime
}

//--SAVE RESULTS
function saveResults() {
    //--show blured panel
    blurPanelElement.style.display = "yes !important"
    wpmLabelElement.innerText = "helllllo"
    wpmLabelElement.style.color = "#a64e46"
}


// USERCOOKIES
// let username = prompt("Hi! Type your name if you want to login:", "")
// if (username == "" || username == null && usernameCookie == "") {
//     greetMessageElement.innerText = "You are not Logged! refresh to login"
//     greetMessageElement.style.color = "Red"
// } else {
//     var usernameCookie = document.cookie = "username=" + username
//     usernameElement.innerText = usernameCookie
//     usernameElement.style.color = "Green"
// }

