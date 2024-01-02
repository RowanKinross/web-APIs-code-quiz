//Make a timed quiz that stores high scores

// declare elements found on the html
const startButton = document.getElementById(`start`); //Selects the existing 'start quiz' button
const time = document.getElementById(`time`); //Selects the existing timer
const startScreen = document.getElementById(`start-screen`);
const questionScreen = document.getElementById(`questions`);
const questionTitle = document.getElementById('question-title');
const questionChoices = document.getElementById('choices');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById(`final-score`);
const enterInitials = document.getElementById(`initials`);
const form = document.getElementById('myForm');

// declare global variables
let n = 0; // for use in question selection
let answeredQuestions = 0; // for the answered questions counter
var user = { // to format the scores with their user identity
  scoreList: [],
  initials: ``
}



// Quiz question objects: (at least 5)
let questions = [
{
  question: `Who plays Mel?`,
  answers: [`Kristen Schaal`,`Kristen Stewart`,`Kristen Wiig`],
  correctAnswer: `Kristen Schaal`,
},
{
  question: `What kind of pie does Albi the racist dragon eat at the end of the episode?`,
  answers: [`apple`, `rainbow`, `bubblegum`],
  correctAnswer: `bubblegum`,
},
{
  question: `What does Jemaine get upset about no-one mentioning at his dinner party?`,
  answers: [ `Casserole and Profiteroles`,`Quiche and Salad`,`Lasagne and Meringue, yeah`],
  correctAnswer: `Casserole and Profiteroles`,
},
{
question: `What does Dave like to use for self defence?`,
answers: [`A kettle attached to a rope`,`A watering can tied to a hose`,`A mop taped to a bucket`],
correctAnswer: `A watering can tied to a hose`,
},
{
  question: `What distant year do the robots exist in?`,
  answers: [`1000`, `2000`, `3000`],
  correctAnswer: `2000`,
}
]



//1. Configure start button
  // when clicked:
startButton.addEventListener(`click`, function(event) {
  event.preventDefault();
  // timer starts
  countdown();
  let timeLeft = 60; //60 seconds
  function countdown() {
    const timeInterval = setInterval(function () {
      if (timeLeft > 0 && answeredQuestions < questions.length) {
        time.textContent = timeLeft + 's'; //time is the document element ID
        timeLeft--; // timer goes down and text content is equal to the interval
      } else {
        time.textContent = '0';
        clearInterval(timeInterval); // to stop the timer
        outOfTime();
      }
    }, 1000); //1000ms interval
  }
  // landing page disappears
  startScreen.classList.add(`hide`);

  
  
//2. Questions and answers function
questionsAndAnswers();
function questionsAndAnswers() {
  const currentQuestion = questions[n]; // select the current question
  questionScreen.classList.remove('hide'); //view questions
  questionTitle.textContent = currentQuestion.question; // display the current question 
  // answers appear as buttons 
  renderAnswers()
  function renderAnswers() {
  const ul = document.createElement(`ul`)
  questionChoices.appendChild(ul); // append a list to the html
  for (let i = 0; i < currentQuestion.answers.length; i++) {
      answer = currentQuestion.answers[i];
      var answerButton = document.createElement(`button`);
      answerButton.textContent = answer;
      ul.appendChild(answerButton); // append the specific answer buttons to the unordered list
  }  
  // when an answer is clicked:
  const message = document.createElement(`message`)
  ul.appendChild(message);
  ul.addEventListener(`click`, function(event) {
    event.preventDefault();
    answeredQuestions += 1; //add one to the questions counter
    // tell them if they are correct or incorrect
    if (event.target.textContent === currentQuestion.correctAnswer){
      message.textContent = `Correct!`;
    } else {
      message.textContent = `Incorrect! The correct answer was ${currentQuestion.correctAnswer}`;
      timeLeft = timeLeft -10;       
    }
    // delay moving on to next question by 1 second (1000ms)
    setTimeout(() => { 
      if (timeLeft > 0 && n < questions.length-1) {
        n = n + 1;
        questionChoices.textContent = ``;
        questionsAndAnswers();     
      }
    }, 1000);
  })//<-- end of answer button event listener
  } //<-- end of render answers function
} //<-- end of questions and answers function




//3.  Function for switching from the questions screen to the end screen and storing scores:
function outOfTime() {
  if (timeLeft > 0) {
    score = timeLeft+1; //+1 to account for the 1 second delay
  } else {
    score = 0;
    }
  questionScreen.classList.add(`hide`); //hide the questions screen
  endScreen.classList.remove(`hide`); //view the end screen
  finalScore.textContent = `${score}s`; //display the score
  //event listener for the submit button
  form.addEventListener(`submit`, function(event) {
  event.preventDefault();
  if (enterInitials.value.trim().length<4 && enterInitials.value.trim().length != 0) { //check input for intials is between 1 & 3 characters
    user.scoreList.push(score); //input score to the user object
    user.initials = enterInitials.value.trim().toUpperCase();//input initials to the user object
    //check if user exists and add their score to their local stored scores array if so:
    const sameUserScore = JSON.parse(localStorage.getItem(user.initials)); 
    if (sameUserScore != null) {
      sameUserScore.push(score);
      localStorage.setItem(user.initials, JSON.stringify(sameUserScore))
    } else { // else create a user with their score
      localStorage.setItem(user.initials, JSON.stringify(user.scoreList));
    }
    setTimeout(() => { // move to highscores page after a delay
      window.location = "./highscores.html";
    }, 1000); //1 second
  } else { //if initials don't comply, alert user to try again
    alert(`please input your initials (up to 3 characters)`)
  } //<-- end of initials & score input if statement
    
  }) //<-- end of submit event listener
}//<-- end of out of time function



});// <-- end of start button click event