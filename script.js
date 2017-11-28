easyWords = ["horse","cake","snake","nail","cheese","trees","disc","grow","fell","top"];
mediumWords = ["turkey","yawned","garden","freezing","record","typed","recent","follow","entrance","floppy"];
hardWords = ["metabolism","sandwiches","horoscope","extension","undefined","incredible","intriguing","metropolitan","thanksgiving","eucalyptus"];
letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
function gameStart(){
    guessedLetters = [];
    graveyard = [];
    document.getElementById("graveyard").innerHTML = graveyard;
    document.getElementById("guess").innerHTML = letters;
    life = 7;
    document.getElementById("lives").innerHTML = "7 Lives Remaining";
    document.getElementById("image").innerHTML = "";
    guessBox();
    difficulty = parseInt(document.getElementById("difficulty").value);
    if(difficulty === 1){
        randomize = easyWords[Math.floor(Math.random() * easyWords.length)];
    }
    if(difficulty === 2){
        randomize = mediumWords[Math.floor(Math.random() * mediumWords.length)];
    }
        if(difficulty === 3){
        randomize = hardWords[Math.floor(Math.random() * hardWords.length)];
    }
    console.log(randomize);
    document.getElementById("hangmanWord").innerHTML = hiddenWord();
}
function hiddenWord(){
    word = "";
    for(var i = 0; i < randomize.length; i++){
            word += "_ ";
        }
    return word;
}

function findLetter(){
    guess = document.getElementById("guess").value;
    a = 0;
    guessedLetters += guess;
    guessBox();
    for(var i = 0; i < randomize.length; i++){
        if (guess ===randomize[i]) {
            a++;
        }
    }
    document.getElementById("hangmanWord").innerHTML = printWord();
    if(a === 0){
        life -= 1;
        graveyard += guess;
        console.log(graveyard);
        document.getElementById("graveyard").innerHTML = graveyard;
    }
    if(life===0){
        document.getElementById("hangmanWord").innerHTML = "Game Over!";
    }
    console.log(life);
    console.log(guessedLetters);
    lifeCounter();
    if(word === randomize){
        document.getElementById("hangmanWord").innerHTML = "Congratulations the word was " + randomize + "!";
    }
}

function printWord(){
    word  = "";
    for(var i=0; i<randomize.length; i++){
        if(guessedLetters.indexOf(randomize[i])> -1){
            word += randomize[i];
        }else{
            word += "_ ";
        }
    }
    return word;
}

function lifeCounter(){
    if(life === 6 && a === 0) {
        document.getElementById("image").innerHTML = "<img src='hangmanImg/man 1.png'/>";
        document.getElementById("lives").innerHTML = "6 Lives Remaining";
    }
    if(life === 5 && a === 0) {
        document.getElementById("image").innerHTML = "<img src='hangmanImg/man 2.png'/>";
        document.getElementById("lives").innerHTML = "5 Lives Remaining";
    }
    if(life === 4 && a === 0) {
        document.getElementById("image").innerHTML = "<img src='hangmanImg/man 3.png'/>";
        document.getElementById("lives").innerHTML = "4 Lives Remaining";
    }
    if(life === 3 && a === 0) {
        document.getElementById("image").innerHTML = "<img src='hangmanImg/man 4.png'/>";
        document.getElementById("lives").innerHTML = "3 Lives Remaining";
    }
    if(life === 2 && a === 0) {
        document.getElementById("image").innerHTML = "<img src='hangmanImg/man 5.png'/>";
        document.getElementById("lives").innerHTML = "2 Lives Remaining";
    }
    if(life === 1 && a === 0) {
        document.getElementById("image").innerHTML = "<img src='hangmanImg/man 6.png'/>";
        document.getElementById("lives").innerHTML = "1 Life Remaining";
    }
    if(life === 0 && a === 0) {
        document.getElementById("image").innerHTML = "<img src='hangmanImg/man 7.png'/>";
        document.getElementById("lives").innerHTML = "No Lives Remaining. Select A Difficulty And Press New Game To Start Again";
    }

}

function guessBox(){
    result = "";
    for(var i = 0; i<letters.length; i++){
        if(guessedLetters.indexOf(letters[i])===-1){
            result += "<option value='" + letters[i] + "'>" + letters[i] + "</option>";
        }
        if(guessedLetters.indexOf(letters[i])!==-1){
            result += "<option disabled='true' value='" + letters[i] + "'>" + letters[i] + "</option>";
        }
    }
    document.getElementById("guess").innerHTML = result;
}

