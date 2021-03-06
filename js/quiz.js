'use strict';

var scoreCount = 0;

var visitor;

function greeting() {

  var userName = prompt('Welcome! What is your name?');
  console.log('user name is, ' + userName);

  alert('Nice to meet you ' + userName + ', my name is Mariko!');
  alert('I would like to quiz you before you get to checkout my bio!');

  visitor = userName;

}

// First Quiz Question

function previousExperience(){
  var questionOne = prompt('Do I have any previous experience in web development/tech?');

  if (questionOne.toLowerCase() === 'yes' || questionOne.toLowerCase() === 'y'){
  //   console.log(userName + ' got the first question wrong!');
    alert('Nope! I am brand new to this!');
  } else {
  //   console.log(userName + ' got the first question right!');
    alert('I guess you could tell huh...good job!');
    scoreCount++;

  }
}

// Second Quiz Question

function education(){
  var questionTwo = prompt('Was I ever a student at UW?');

  if (questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n'){
    //   console.log(userName + ' got the second question wrong!');
    alert('I was actually! You can read about that later...');
  } else {
    //   console.log(userName + ' got the second question right!');
    alert('I bet you saw my LinkedIn! Nice!');
    scoreCount++;

  }
}


// Third Quiz Question

function veteran(){
  var questionThree = prompt('Am I a veteran?');

  if (questionThree.toLowerCase() === 'yes' || questionThree.toLowerCase() === 'y'){
    //   console.log(userName + ' got the third question right!');
    alert('oopf! you\'re good at this!');
    scoreCount++;

  } else {
    //   console.log(userName + ' got the third question wrong!');
    alert('Wrong answer!');
  }
}


// Fourth Quiz Question

function age(){
  var questionFour = prompt('Ok this is a tough one! Am I over the age of 26?');

  if (questionFour.toLowerCase() === 'no' || questionFour.toLowerCase() === 'n'){
    //   console.log(userName + ' got the fourth question wrong!');
    alert('That is....incorrect my friend! I\'m older than I look! I wonder how long that will last...');
  } else {
    //   console.log(userName + ' got the fourth question right!');
    alert('You\'re right! Good job!');
    scoreCount++;

  }
}

// Fifth Quiz Question

function move(){
  var questionFive = prompt('This one is even harder than the last! Did I move here from Oakland, CA?');

  if (questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y'){
    //   console.log(userName + ' got the fifth question wrong!');
    alert('Awe, wrong answer.');
  } else {
    //   console.log(userName + ' got the fifth question right!');
    alert('That\'s right! I moved here from Savannah, GA!');
    scoreCount++;

  }
  alert('Thanks for playing along ' + visitor + '! Now try and guess how many different states I have lived in!');
}

// Additional Loop Quizzes

// START OF NUMBER GUESSING GAME

function statesGame(){

  var answer = 5;

  for(var g = 1; g <= 4; g++){

    var guessNumber = prompt('How many states do you think I\'ve lived in, including WA? You get four guesses!');
    if(parseInt (guessNumber) === answer){
      // console.log(userName + 'guessed the correct number of states I have lived in!');
      alert('Aha! That\'s right ' + visitor + '! I\'ve lived in California, Missouri, Virginia, Georgia and now in Washington!');
      scoreCount++;
      break;

    } else if(parseInt(guessNumber) <= '3'){
      alert('too low!');

    } else if(guessNumber === '4'){
      alert('close!!!');

    } else if(parseInt(guessNumber ) >= '7'){
      alert('too high!');

    } else if(guessNumber === '6'){
      alert('close!');
    } else {

      alert('enter a valid number!');
    }

  }

  if(g === 5 && guessNumber !== answer){
    alert('Sorry ' + visitor + ', you ran out of guesses. I have lived in 5 different states!');

  }
}


// START OF FAVORITE MONTHS GUESSING GAME

function months(){
  var faveMonths = ['june', 'october'];

  for(var x = 1; x <= 6; x++){

    var guessMonths = prompt('I have two favorite months! Try and guess at least one of them!');
    if(guessMonths.toLowerCase() === faveMonths[0] || guessMonths.toLowerCase() === faveMonths[1]){
      alert('Yes that is one of them! Great guess!');
      scoreCount++;
      alert('Thanks for letting me quiz you ' + visitor + ' You got ' + scoreCount + ' out of 7 questions correct!');
      break;

    } else {
      alert('Sorry, that is not one of my favorite months!');
    }

  }

  if(x === 7){
    alert('Sorry, you ran out of guesses. My favorite months are June and October!');
    alert('Thanks for letting me quiz you ' + visitor + ' You got ' + scoreCount + ' out of 7 questions correct!');
  }

}


greeting();

previousExperience();

education();

veteran();

age();

move();

statesGame();

months();
