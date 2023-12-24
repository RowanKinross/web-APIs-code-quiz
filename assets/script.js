//Make a timed quiz on JavaScript fundamentals that stores high scores

// declare consts and variables:
const startButton = document.getElementById(`start`); //Selects the existing 'start quiz' button
const time = document.getElementById(`time`); //Selects the existing timer
const startScreen = document.getElementById(`start-screen`);
const questionScreen = document.getElementById(`questions`);
const questionTitle = document.getElementById('question-title');
const questionChoices = document.getElementById('choices');


// Quiz question objects: (at least 5)
const question1 = {
question: `Who plays Mel?`,
answers: [`Kristen Schaal`,`Kristen Stewart`,`Kristen Wiig`],
correctAnswer: `Kristen Schaal`,
}
const question2 = {
question: `What kind of pie does Albi the racist dragon eat at the end of the episode?`,
trueAnswer: `Bubblegum`,
falseAnswer1: `apple`,
falseAnswer2: `rainbow`
}
const question3 = {
question: `What does Jemaine get upset about no-one mentioning at his dinner party?`,
trueAnswer: `Casserole and Profiteroles`,
falseAnswer1: `Quiche and Salad`,
falseAnswer2: `Lasagne and Meringue, yeah`
}
const question4 = {
question: `What does Dave like to use for self defence?`,
trueAnswer: `A watering can tied to a hose`,
falseAnswer1: `A kettle attached to a rope`,
falseAnswer2: `A mop taped to a bucket`
}
const question5 = {
question: `What distant year do the robots exist in?`,
trueAnswer: `2000`,
falseAnswer1: `3000`,
falseAnswer2: `1000`
}

// 1. Configure start button
  // when clicked:
startButton.addEventListener(`click`, function(event) {
  event.preventDefault();
  console.log(`timer started`);
  countdown();
    // a. timer starts (60seconds would be reasonable)
  function countdown() {
    let timeLeft = 60;
    const timeInterval = setInterval(function () {
      if (timeLeft > 0) {
        time.textContent = timeLeft + 's';
        timeLeft--;
      } else {
        time.textContent = '';
        clearInterval(timeInterval); // to stop the timer
      }
    }, 1000);
  }
    // b. landing page disappears - can hide/show using CSS?
  startScreen.classList.add(`hide`);
    // c. first question appears - change/remove `hide` question ID state
  questionScreen.classList.remove('hide');
  questionTitle.textContent = question1.question;

  // d. answers appear as buttons 
renderAnswers()
  function renderAnswers() {
  const ul = document.createElement(`ul`)
  questionChoices.appendChild(ul);
  
    for (let i = 0; i < question1.answers.length; i++) {
      answer = question1.answers[i];
      var button = document.createElement("button");
      button.textContent = answer;
      ul.appendChild(button);
  }


    }
}); // <-- end of start button when clicked event

 
  


    

//! 1. Configure start button
    //!queryselector the 'start quiz' button
  //! when clicked:
    //! a. timer starts (60seconds would be reasonable)
    //! b. landing page disappears - can hide/show using CSS?
    //! c. first question appears - make question ID state change from hide to show?
    //! d. answers appear as buttons 

// 2. target time:0 with a counter
  // if incorrect answer clicked, remove 10s
  // The quiz should end when all questions are answered or the timer reaches 0.
    //if else


// 3. When any answer is clicked (click event)
    // a. (optionally) show button colour green for correct
    // b. if answered correctly, tell them + optionally use sound effects
    // c. If answered incorrectly, tell them + optionally use sound effects
    // d. the next question appears (only after a delay)


// 5. When the game ends:
  // if timer runs out or all questions are answered
    // a. Timer stops
    // b. Question disappears
    // c. Form appears for user to 'submit' their initials 
      // initials and sore stored in local storage
    // d. Display their score with their initials and any other locally stored scores
      // on the high scores page
      // high scores are listed highest to lowest
      // option to take quiz again (target button)
