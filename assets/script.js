//Make a timed quiz on JavaScript fundamentals that stores high scores

// declare consts and variables:
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


let n = 0;
let answeredQuestions = 0;
var user = {
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
// {
//   question: `What does Jemaine get upset about no-one mentioning at his dinner party?`,
//   answers: [ `Casserole and Profiteroles`,`Quiche and Salad`,`Lasagne and Meringue, yeah`],
//   correctAnswer: `Casserole and Profiteroles`,
// },
// {
// question: `What does Dave like to use for self defence?`,
// answers: [`A kettle attached to a rope`,`A watering can tied to a hose`,`A mop taped to a bucket`],
// correctAnswer: `A watering can tied to a hose`,
// },
// {
//   question: `What distant year do the robots exist in?`,
//   answers: [`1000`, `2000`, `3000`],
//   correctAnswer: `2000`,
// }
]



// 1. Configure start button
// when clicked:
startButton.addEventListener(`click`, function(event) {
  event.preventDefault();
  countdown();
  // timer starts (30seconds would be reasonable)
  let timeLeft = 30;
  function countdown() {
    const timeInterval = setInterval(function () {
      if (timeLeft > 0 && answeredQuestions < questions.length) {
        time.textContent = timeLeft + 's';
        timeLeft--;
      } else {
        time.textContent = '0';
        clearInterval(timeInterval); // to stop the timer
        outOfTime();
      }
    }, 1000);
  }
  // landing page disappears
  startScreen.classList.add(`hide`);
  // first question appears

  // function for switching from the questions screen to the end screen and storing scores:
  function outOfTime() {
    if (timeLeft > 0) {
      score = timeLeft+1; //+1 to account for the 1 second delay
      } else {
        score = 0;
      }
    finalScore.textContent = `${score}s`;
    questionScreen.classList.add(`hide`);
    endScreen.classList.remove(`hide`);
    // time.textContent = ` `;
    // clearInterval(countdown.timeInterval); //to stop the timer
      form.addEventListener(`submit`, function(event) {
      event.preventDefault();
      alert("The form was submitted");
      user.scoreList.push(score);
      user.initials = enterInitials.value;
      const sameUserScore = JSON.parse(localStorage.getItem(user.initials));
      console.log(sameUserScore + `user init`);
      if (sameUserScore != null) {
        sameUserScore.push(score);
        //user.scoreList.push(sameUserScore);
        localStorage.setItem(user.initials, JSON.stringify(sameUserScore))
      } else {
        localStorage.setItem(user.initials, JSON.stringify(user.scoreList));
      }
      setTimeout(() => { 
        window.location = "./highscores.html";
      }, 1000);
    })
  }


  
  questionsAndAnswers();
  function questionsAndAnswers() {
    const currentQuestion = questions[n];
    questionScreen.classList.remove('hide');
    questionTitle.textContent = currentQuestion.question;
    
    // answers appear as buttons 
    renderAnswers()
    function renderAnswers() {
  const ul = document.createElement(`ul`)
  questionChoices.appendChild(ul);
  
  for (let i = 0; i < currentQuestion.answers.length; i++) {
      answer = currentQuestion.answers[i];
      var answerButton = document.createElement(`button`);
      answerButton.textContent = answer;
      ul.appendChild(answerButton);
  }
  
  // when an answer is clicked:
  const message = document.createElement(`message`)
  ul.appendChild(message);
  
  ul.addEventListener(`click`, function(event) {
    event.preventDefault();
    answeredQuestions += 1;
    if (event.target.textContent === currentQuestion.correctAnswer){
      // tell them if they are correct or incorrect
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
  }
  )
} }
}); // <-- end of start button when clicked event





  


    

//! 1. Configure start button
    //!queryselector the 'start quiz' button
  //! when clicked:
    //! a. timer starts (60seconds would be reasonable)
    //! b. landing page disappears - can hide/show using CSS?
    //! c. first question appears - make question ID state change from hide to show?
    //! d. answers appear as buttons 

//! 2. target timer
  //! if incorrect answer clicked, remove 10s
  //! The quiz should end when all questions are answered or the timer reaches 0.


//! 3. When any answer is clicked (click event)
    // a. (optionally) show button colour green for correct
    //! b. if answered correctly, tell them + 
    //! c. If answered incorrectly, tell them
      //optionally use sound effects
      //!fix bug so that message can only come up once
    //! d. the next question appears (only after a delay)


// 5. When the game ends:
  //! if timer runs out or all questions are answered
    //! a. Timer stops
    //! b. Question disappears
    //! c. Form appears for user to 'submit' their initials 
      // initials and score stored in local storage
    // d. Display their score with their initials and any other locally stored scores
      // on the high scores page
      // high scores are listed highest to lowest
      // option to take quiz again (target button)
