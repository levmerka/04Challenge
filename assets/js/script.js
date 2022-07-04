// Pseudo-code
// Landing page with start button
// When start button is clicked, remove welcome msg and append question 1
    // Add event listener
        // Activity 12
// Start timer
// User answer question
// Read chosen element, assess data value, compare to answer key
// For loop for the questions
    // If correct next question
    // If incorrect subtract 10 sec from timer
        // Activity
// End of quiz
// Add up user score
// Display input for my user to type their initials
// Second html and display user name and score
// Read object from local storage
    // Activity 24


// Assignment Code
// var generateBtn = document.querySelector("#generate");
// List of questions, answer options, correct answers, and user answers
var questionEl = []
var answerOptionsEl = []
var answersCorrectEl = []
let timer = 60
// add timer 
var startButtonEl = $('#q1');
console.log(startButtonEl)
var children=startButtonEl.children()
children.on("click",function(event){
    console.log("check")
    console.log(event.target.textContent)
    const userAnswer=event.target.textContent
    if (isCorrect(userAnswer, 0)) {
   // if correct add to score
    }
   else {
        // if incorrect subtract time
   }

 
})
function tick () {
    timer-=1
    console.log(timer)

}
const isCorrect = (answer, index) => {
    var answersArr = ["CAPRI-SUN Pacific Cooler","DON'T PANIC","Nah, we ball.","NO CHAIR","Click to ASCEND"]
   return answersArr [index] === answer
}
let interval = setInterval(tick, 1000)
// var test = document.getElementById("button-start");
