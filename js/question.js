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
let currentQuestion = 0;




aLoop.classList.add("hide")
console.log(hideBut);



function nextQuestion() {
    currentQuestion++
    if (currentQuestion < questions.length) {
        questionGen();
    } else {
        return;
    }
}

function questionGen() {
    aLoop.classList.remove("hide")
    qLoop.textContent = questions[currentQuestion].firstQuestion;
    for (let i = 0; i < aLoop.children.length; i++) {
        aLoop.children[i].children[0].textContent = `${(i+1)}: ${questions[currentQuestion].choices[i]}`
    }
    console.log(aLoop);
}

function checker(answer) {
    if (questions[currentQuestion].answer === questions.choices[answer.id]) {
        selectedAnswer.textContent = "Correct."
    } else {
        selectedAnswer.textContent = "Wrong."
    }
}
console.log(selectedAnswer);
start.addEventListener("click", function() {
    questionGen();

});

aLoop.addEventListener("click", function() {
    //if (e.target.matches("button")) {
        //checker(e.target); 
        nextQuestion();
    }
    
//}
);

/*
start.addEventListener("click", function() {
    aboutSection.innerHTML = "";
    aLoop.classList.remove("hide")
    qLoop.innerHTML = questions[0].firstQuestion;
    oneAnswer.innerHTML = questions[0].firstAnswer;
    twoAnswer.innerHTML = questions[0].secondAnswer;
    threeAnswer.innerHTML = questions[0].thirdAnswer;
    fourAnswer.innerHTML = questions[0].fourthAnswer;

    questionContainer.addEventListener("click", function(event) {
        let element = event.target;
        setTimeout(function() {
            if (element.matches(".butAns")) {
                qLoop.innerHTML = questions[1].firstQuestion;
                oneAnswer.innerHTML = questions[1].firstAnswer;
                twoAnswer.innerHTML = questions[1].secondAnswer;
                threeAnswer.innerHTML = questions[1].thirdAnswer;
                fourAnswer.innerHTML = questions[1].fourthAnswer;
            }}, 1500)
    
    
            questionContainer.addEventListener("click", function(event) {
                let element = event.target;
                setTimeout(function() {
                    if (element.matches(".butAns")) {
                        qLoop.innerHTML = questions[2].firstQuestion;
                        oneAnswer.innerHTML = questions[2].firstAnswer;
                        twoAnswer.innerHTML = questions[2].secondAnswer;
                        threeAnswer.innerHTML = questions[2].thirdAnswer;
                        fourAnswer.innerHTML = questions[2].fourthAnswer;
                    }}, 1500)

                
                    questionContainer.addEventListener("click", function(event) {
                        let element = event.target;
                        setTimeout(function() {
                            if (element.matches(".butAns")) {
                                qLoop.innerHTML = questions[3].firstQuestion;
                                oneAnswer.innerHTML = questions[3].firstAnswer;
                                twoAnswer.innerHTML = questions[3].secondAnswer;
                                threeAnswer.innerHTML = questions[3].thirdAnswer;
                                fourAnswer.innerHTML = questions[3].fourthAnswer;
                            }}, 1500)

                        })})})});
    
    */
                        /*
    
    
     if (questions[0]) {
            questionContainer.addEventListener("click", function() {
                if (element.matches("#answerOne")) {
                    selectedAnswer.textContent = "Correct."
                } else {
                    alert("Wrong.")
                }
            })
        }
    
    
    
    
    if (questions[0]) {
        questionContainer.addEventListener("click", function() {
            if (element.matches("#answerOne")) {
                alert("Correct.")
            } else {
                alert("Wrong.")
            }
        })
    }

    if (questions[1]) {
        questionContainer.addEventListener("click", function() {
            if (element.matches("#answerThree")) {
                alert("Correct.")
            }
        })
    }

    if (questions[2]) {
        questionContainer.addEventListener("click", function() {
            if (element.matches("#answerThree")) {
                alert("Correct.")
            }
        })
    }

    if (questions[4]) {
        questionContainer.addEventListener("click", function() {
            if (element.matches("#answerTwo")) {
                alert("Correct.")
            }
        })
    }
    */

let questions = [
    {
    firstQuestion: "What is Yellow?".trim(),
    choices: [
        "A color.",
        "A shape.",
        "A truck.",
        "Ducks.",
    ], 
    answer: "A color."
    
    },
    {
    firstQuestion: "What color are grapes?".trim(),
    choices: [
        "Yellow.",
        "Blue.",
        "Purple.",
        "Silver.",
    ], 
    answer: "Purple."
    },
    {
    firstQuestion: "What is a Triangle?".trim(),
    choices: [
        "A dinosaur.",
        "A computer.",
        "A shape.",
        "A color.",
    ], 
    answer: "A shape."
    },
    {
    firstQuestion: "What is space?",
    choices: [
        "The great beyond.",
        "A substrate of reality.",
        "Where star wars takes place.",
        "Lots of stars.",
    ], 
    answer: "Lots of stars."
    },
];

/*
start.addEventListener("click", function() {
    for (let i = 0; i <= questions.length; i++) { 
        qLoop.innerHTML = questions[i].firstQuestion, 
        oneAnswer.innerHTML = questions[i].firstAnswer, 
        twoAnswer.innerHTML = questions[i].secondAnswer,
        threeAnswer.innerHTML = questions[i].thirdAnswer,
        fourAnswer.innerHTML = questions[i].fourthAnswer;
    }});
*/





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