const questionContainer = document.querySelector(".container");
let qLoop = document.querySelector(".question");
let aboutSection = document.querySelector(".about")
const start = document.querySelector(".startButton")

console.log(qLoop);

start.addEventListener("click", function(event) {
    aboutSection.innerHTML = "";
})

questionContainer.addEventListener("click", function(event) {
    let element = event.target;

    if (element.matches(".answerButton")) {
        console.log(element);
    }
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

qLoop.innerHTML = questions[0].firstQuestion;
