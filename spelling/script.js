function loadFunct(){
    genWord();
    updateDisplay();
}

function getRandom(max){
    var value = Math.floor(Math.random()* max);
    return value;
}

var randomSpace, charToEnter, currentWord;
var currentScore = 0;
var totalQuestions = 0;

var timerState = 0;


function genWord(){
    var wordsList = ["ACCIDENT", "ACTUAL", "ADDRESS", "ANSWER", "APPEAR", "ARRIVE", "BELIEVE", "BICYCLE", "BREATH", "BREATHE", "BUILD", "BUSY", "CALENDAR", "CAUGHT", "CENTRE", "CENTURY", "CERTAIN", "CIRCLE", "COMPLETE", "CONSIDER", "CONTINUE", "DECIDE", "DESCRIBE", "DIFFERENT", "DIFFICULT", "DISAPPEAR", "EARLY", "EARTH", "EIGHT", "ENOUGH", "EXERCISE", "EXPERIENCE", "EXPERIMENT", "EXTREME", "FAMOUS", "FAVOURITE", "FEBRUARY", "FORWARD", "FRUIT", "GRAMMAR", "GROUP", "GUARD", "GUIDE", "HEARD", "HEART", "HEIGHT", "HISTORY", "IMAGINE", "INCREASE", "IMPORTANT", "INTEREST", "ISLAND", "KNOWLEDGE", "LEARN", "LENGTH", "LIBRARY", "MATERIAL", "MEDICINE", "MENTION", "MINUTE", "NATURAL", "NAUGHTY", "NOTICE", "OCCASION", "OFTEN", "OPPOSITE", "ORDINARY", "PARTICULAR", "PECULIAR", "PERHAPS", "POPULAR", "POSSESS", "POSSIBLE", "POTATOES", "PRESSURE", "PROBABLY", "PROMISE", "PURPOSE", "QUARTER", "QUESTION", "RECENT", "REGULAR", "REIGN", "REMEMBER", "SENTENCE", "SEPARATE", "SPECIAL", "STRAIGHT", "STRANGE", "STRENGTH", "SUPPOSE", "SURPRISE", "THEREFORE", "THOUGH", "THOUGHT", "THROUGH", "VARIOUS", "WEIGHT", "WOMAN"];  
    var numberWords = wordsList.length;
    console.log(numberWords);
    var randomWord = getRandom(numberWords);
    console.log(randomWord);

    currentWord = wordsList[randomWord];
    var currentWordLength = currentWord.length;
    //console.log(currentWord, currentWordLength);

    randomSpace = getRandom(currentWordLength-1);
    console.log(randomSpace);

    var wordInArray = currentWord.split("");
    console.log(wordInArray);

    charToEnter = wordInArray[randomSpace];
    wordInArray[randomSpace] = '_';

    var wordInString = wordInArray.join("");
    console.log(wordInString);
    document.getElementById("prompt").innerHTML = "Spell: " + wordInString;
}

function checkWord(){
    if(timerState === 0){
        timerState = 1;
        timerGo()
    }
    var userInput = document.getElementById("inputBox").value;
    //alert(userInput);
    if(userInput == null){
        alert("Please enter something into the input box.")
    }else{
        userInputUpper = userInput.toUpperCase();
        userInputArray = userInputUpper.split("");

        if(userInputArray[randomSpace] === charToEnter){
            if(userInputUpper == currentWord){
                console.log("Correct!");
                genWord();
                
                currentScore = currentScore + 1;
            }else{
                console.log("Wrong");
                genWord();

            }
        }else{
            console.log("Wrong");
            genWord();
        }
        totalQuestions = totalQuestions + 1;
        updateDisplay();
        var inpBox = document.getElementById("inputBox");
        inpBox.value = "";
        inpBox.focus();

    }
}

function updateDisplay(){
    scoreDisplay = document.getElementById("score");
    score.innerHTML =  currentScore + "/" + totalQuestions;
}

// timer below (adapted from w3schools)
function timerGo(){
    var timerSeconds = 60;
    var endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + timerSeconds);
    var end = endTime.getTime();
    console.log(endTime);

    // Update the count down every 1 second
    var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = endTime - now;

    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = seconds + "s remaining";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "Game Over";
        // now disable inputs
        var inputBox = document.getElementById("inputBox").readOnly = true;
        var subButton = document.getElementById("subButton").disabled = true;
        alert("GAME OVER")
    }
    }, 1000);
}


// then try to make it read in words from file. then add a credits/info page linked from page at the top 
// then publish

// v2 will have settings option where you can change which set of words can be used, maybe cite this in the credits/info page?