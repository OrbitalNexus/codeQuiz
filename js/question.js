const questionContainer = document.querySelector(".container");
let qLoop = document.querySelector(".question");
let aboutSection = document.querySelector(".about")
let aLoop = document.querySelector(".answers")
let oneAnswer = document.querySelector("#answerOne")
let twoAnswer = document.querySelector("#answerTwo")
let threeAnswer = document.querySelector("#answerThree")
let fourAnswer = document.querySelector("#answerFour")
const start = document.querySelector(".startButton")
let hideBut = document.querySelector(".answerButton")
let selectedAnswer = document.querySelector("#selected")

let answerButs = document.querySelectorAll(".buttonAns");
let Butman = document.querySelectorAll(".butMan")
let scoreBoardMain = document.querySelector(".scoreboard")
let containerMain = document.querySelector(".container");
let newUserScore = document.querySelector("#newScoreUser");
let highScore = document.querySelector("#userNewScore")
let buttonSave = document.querySelector("#saveButton")
let userInput = document.querySelector("#Batman");
let inputField = document.querySelector(".inputField")

let firstPlaceUser = document.querySelector("#key1")
let secondPlaceUser = document.querySelector("#key2")
let thirdPlaceUser = document.querySelector("#key3")
let fourthPlaceUser = document.querySelector("#key4")
let fifthPlaceUser = document.querySelector("#key5")
let awesomeKey = document.querySelector("#keyAwesome");

let userHighScore;
let currentQuestion = 0;
let newScore;



aLoop.classList.add("hide")
scoreBoardMain.classList.add("hide")
highScore.classList.add("hide")

const USER_KEY = 'user'
const SCORE_KEY = 'score'


function batmanHero () {
  let userBad = userInput.value
  
  if (userBad) {
    let userBadScore = {
        userName: userBad.trim(),
        userScore: newScore,
    }
    userInput.value = ''
    userHighScore = JSON.parse(localStorage.getItem(USER_KEY)) || [];
    userHighScore.push(userBadScore);
    localStorage.setItem(USER_KEY, JSON.stringify(userHighScore));

    jokerVill();

  }

};

function jokerVill () {
        
            firstPlaceUser.textContent = userHighScore[0].userName + " " + userHighScore[0].userScore;
            secondPlaceUser.textContent = userHighScore[1].userName + " " + userHighScore[1].userScore;
            thirdPlaceUser.textContent = userHighScore[2].userName + " " + userHighScore[2].userScore;
            fourthPlaceUser.textContent = userHighScore[3].userName + " " + userHighScore[3].userScore;
            fifthPlaceUser.textContent = userHighScore[4].userName + " " + userHighScore[4].userScore;
        }

buttonSave.addEventListener("click", function() {
    batmanHero();
});


function nextQuestion() {
    currentQuestion++
    if (currentQuestion < questions.length) {
        questionGen();
    } else {
        let userScore = secondsLeft
        containerMain.classList.add("hide")
        scoreBoardMain.classList.remove("hide")
        newScore = timeEl.textContent = secondsLeft + 10;
        newUserScore.textContent = newScore;
        timeEl.classList.add("hide");
        highScore.classList.remove("hide")
        selectedAnswer.textContent = "";
    }
}

function questionGen() {
    aLoop.classList.remove("hide");
    start.classList.add("hide");
    qLoop.textContent = questions[currentQuestion].firstQuestion;
    for (let i = 0; i < aLoop.children.length; i++) {
        Butman[i].textContent = `${(i+1)}: ${questions[currentQuestion].choices[i]}`
    }
    console.log(aLoop);
}

function checker(answer) {
        if (questions[currentQuestion].answer === questions[currentQuestion].choices[answer.id]) {
            selectedAnswer.textContent = "Correct."
            secondsLeft = secondsLeft + 5;
            timeEl.textContent = "+5";
        } else {
            selectedAnswer.textContent = "Wrong."
            secondsLeft = secondsLeft - 7;
            timeEl.textContent = "-7";
            
            
        }
        };



   

start.addEventListener("click", function() {
    questionGen();

});


aLoop.addEventListener("click", function(e) { 
        let element = e.target;    
        if (element.matches("button")) {
            checker(element);
            setTimeout(function() {
                nextQuestion();
            }, 850)
        }
    });


let highScores = [];

let questions = [
    {
    firstQuestion: "How to add a single line comment?".trim(),
    choices: [
        "//",
        "/*",
        "*/",
        "<?",
    ], 
    answer: "//"
    
    },
    {
    firstQuestion: "What case does JavaScript use?".trim(),
    choices: [
        "Snake",
        "Kebab",
        "Camel",
        "Pascal",
    ], 
    answer: "Camel"
    },
    {
    firstQuestion: "What is a Class in JavaScript?".trim(),
    choices: [
        "A way to use CSS.",
        "A blueprint for creating objects.",
        "A single array.",
        "A naming convention.",
    ], 
    answer: "A blueprint for creating objects."
    },
    {
    firstQuestion: "What kind of language is JavaScript?",
    choices: [
        "A mental language.",
        "A sign language.",
        "A spoken language.",
        "A prototype-based language.",
    ], 
    answer: "A prototype-based language."
    },
    {
    firstQuestion: "What variables does Hoisting apply to?",
    choices: [
        "Let",
        "Var",
        "Const",
        "Int",
    ], 
    answer: "Var"
    },
    {
    firstQuestion: "How do you create a New Object in JavaScript?",
    choices: [
        "Use object literals or the 'new' keyword.",
        "Use a constructor.",
        "Return a character from index.",
        "Using an external file.",
    ], 
    answer: "Use object literals or the 'new' keyword."
    },
    {
    firstQuestion: "What is the For... In Loop in JavaScript?",
    choices: [
        "A fancy way of saying forever.",
        "Used to iterate over the properties of an object.",
        "To be determined.",
        "Allows you to refer to the object.",
    ], 
    answer: "Used to iterate over the properties of an object."
    },
    {
    firstQuestion: "What is a Higher-Order function?",
    choices: [
        "Functions capable of accepting other functions as arguments.",
        "A much better function.",
        "The only way to do functions.",
        "These are constants and block-scoped.",
    ], 
    answer: "Functions capable of accepting other functions as arguments."
    },
{
    firstQuestion: "What is JSON?",
    choices: [
        "Jumping Spider Orange Night.",
        "Javascript Orwellian Notion.",
        "JavaScript Object Notation.",
        "Jeffry Sally Or Nancy.",
    ], 
    answer: "JavaScript Object Notation."
    },
    {
    firstQuestion: "What are arrow functions?",
    choices: [
        "Short way of writing function expressions.",
        "A way to map out the route of a function.",
        "Something in ES4.",
        "A boolean.",
    ], 
    answer: "Short way of writing function expressions."
    },
];

/*
Refactor code into a for loop that iterates through question array
Add a setTimeout delay after each iteration.

Add If statements to check answer correct or wrong,
by which array we are on and using element.matches.

Then take to high score page after timer reaches zero,
have input box to put in initials and save score in storage.

Add a back button to home page.

All done!
*/