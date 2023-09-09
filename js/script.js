// PSEUDO CODE
/* 
A quiz page with start button. Press the button and start timer of 100 seconds and launch first question. 
The first question multiple choice, if correct says correct with timer delay for next question, or incorrect and subtracts from time.
Second question.
Third.
Fourth.
Fifth.
End game screen to type initials and save score to local storage and persist data. Start button to play again.


How to program questions. In a seperate js file target div element and use object array to get question and answers.
Then use states to switch between them. For loop to go over different questions.

check if answer is right: ?

local storage for high scores.
*/



// Timer
const timeEl = document.querySelector(".time");

let secondsLeft = 100;

let quizTimer = function setTime() {
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft <= 0)  {
            clearInterval(timerInterval);
            selectedAnswer.textContent = "DONE"
            containerMain.classList.add("hide")
            scoreBoardMain.classList.remove("hide")
        }
    }, 1000);
    console.log(secondsLeft);
    

};

start.addEventListener("click", quizTimer);
