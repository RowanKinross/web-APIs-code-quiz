// finding elements from the html for javascript to manipulate
const highScore = document.getElementById(`highscores`);
const clear = document.getElementById('clear');



// get the entries
const entries = Object.entries(localStorage)
// an array declared globally for each user and their scores to be pushed to
const users = [];



// for loop to break up and format scores into an embedded array
for (let i=0; i<entries.length; i++) {
  var userArray = entries[i]; // array for each user identity
  var userArrayInitials = userArray[0]; // initials are then at index 0
  var userArrayScores = JSON.parse(userArray[1]); // scores are then at index 1 but parsed from a string to an array
  // embedded for loop
  for (let j=0; j<userArrayScores.length; j++){
    var scoreSetArray = [userArrayInitials, userArrayScores[j]]; // declaring two-part arrays to store each score with its user identity
    users.push(scoreSetArray); //pushing these `score-sets` to the global user array
  }
} 



// function to sort the scores highest to lowest
function highest(users){
  return users.sort(function(a,b){ 
    return b[1] - a[1];
  }); 
}
const highestUsers = highest(users);



// for loop to display scores in order, appended to the high score html
for (let i=0; i<highestUsers.length && i<10; i++) {
  var eachUser = highestUsers[i];
  var userScoreButton = document.createElement(`li`); //create list item for each user and their score
  userScoreButton.textContent =`${eachUser[0]} got ${eachUser[1]}s`
  highScore.append(userScoreButton); // append it to the html
}



// event listener for if the user clicks to clear the high scores
clear.addEventListener('click', function(event){
  event.preventDefault();
  localStorage.clear();
  location.reload();
})