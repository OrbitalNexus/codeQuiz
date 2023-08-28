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

console.log(qLoop);

//aLoop.innerHTML = "";
//oneAnswer.innerHTML = "";
//twoAnswer.innerHTML = "";
aLoop.classList.add("hide")
console.log(hideBut);


start.addEventListener("click", function(event) {
    aboutSection.innerHTML = "";
    aLoop.classList.remove("hide")
    qLoop.innerHTML = questions[0].firstQuestion;
    oneAnswer.innerHTML = questions[0].firstAnswer;
    twoAnswer.innerHTML = questions[0].secondAnswer;
    threeAnswer.innerHTML = questions[0].thirdAnswer;
    fourAnswer.innerHTML = questions[0].fourthAnswer;

    questionContainer.addEventListener("click", function(event) {
        let element = event.target;
    
        if (element.matches("#answerOne", "#answerTwo", "#answerThree", "#answerFour")) {
            qLoop.innerHTML = questions[1].secondQuestion;
            oneAnswer.innerHTML = questions[1].firstAnswer;
            twoAnswer.innerHTML = questions[1].secondAnswer;
            threeAnswer.innerHTML = questions[1].thirdAnswer;
            fourAnswer.innerHTML = questions[1].fourthAnswer;
        }
    })
})



let questions = [
    {
    firstQuestion: "What is Yellow?".trim(),
    firstAnswer: "A color.".trim(),
    secondAnswer: "A shape.".trim(),
    thirdAnswer: "A truck.".trim(),
    fourthAnswer: "Ducks.".trim(),
    },
    {
    secondQuestion: "What color are grapes?".trim(),
    firstAnswer: "Yellow.".trim(),
    secondAnswer: "Blue.".trim(),
    thirdAnswer: "Purple.".trim(),
    fourthAnswer: "Silver.".trim(),
    }
];

for (let i = 0; i < questions.length; i++) {
    
    
}


