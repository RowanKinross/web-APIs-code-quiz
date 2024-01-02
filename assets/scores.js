const highScore = document.getElementById(`highscores`);
const clear = document.getElementById('clear');

// get the entries
const entries = Object.entries(localStorage)


var userScores = [];
var users = [];

// for loop to make each initial in the array its own array
for (let i=0; i<entries.length; i++) {
  var userArray = entries[i];
  var userArrayInitials = userArray[0];
  var userArrayScores = JSON.parse(userArray[1]);
  for (let j=0; j<userArrayScores.length; j++){
    userArray = [userArrayInitials, userArrayScores[j]];
    users.push(userArray);
  }
} 
function highest(users){ 
  return users.sort(function(a,b){ 
    return b[1] - a[1]; 
  }); 
}

  var highestUsers = highest(users);

  for (let i=0; i<highestUsers.length && i<10; i++) {
    var eachUser = highestUsers[i];

    //console.log(`${eachUser[0]} got ${eachUser[1]}`);
    var userScoreButton = document.createElement(`li`);
    userScoreButton.textContent =`${eachUser[0]} got ${eachUser[1]}`
    highScore.append(userScoreButton);
  }

clear.addEventListener('click', function(event){
  localStorage.clear();
  location.reload();
})

  // display scores highest to lowest
  //! Each user initials is userArray[0] and each user's scores are userArray[1] (as a string)
  //! store all scores in a string
  //! arrange those scores highest to lowest
  // display top 10 scores highest to lowest



//let unique = [...new Set(highScoreOrder)]; 
//console.log(unique);

//filter if a user's array contains highscoreorder[i], return initials and highscoreorder[i]

