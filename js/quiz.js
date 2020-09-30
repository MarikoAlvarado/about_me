'use strict';

var userName = prompt('Welcome! What is your name?');
console.log('user name is, ' + userName);

alert('Nice to meet you ' + userName + ', my name is Mariko!');
alert('I would like to quiz you before you get to checkout my bio!');

// First Quiz Question
var questionOne = prompt('Do I have any previous experience in web development/tech?');

if (questionOne.toLowerCase() === 'yes' || questionOne.toLowerCase() === 'y'){
//   console.log(userName + ' got the first question wrong!');
  alert('Nope! I am brand new to this!');
} else {
//   console.log(userName + ' got the first question right!');
  alert('I guess you could tell huh...good job!');
}

// Second Quiz Question
var questionTwo = prompt('Was I ever a student at UW?');

if (questionTwo.toLowerCase() === 'no' || questionTwo.toLowerCase() === 'n'){
//   console.log(userName + ' got the second question wrong!');
  alert('I was actually! You can read about that later...');
} else {
//   console.log(userName + ' got the second question right!');
  alert('I bet you saw my LinkedIn! Nice!');
}

// Third Quiz Question
var questionThree = prompt('Am I a veteran?');

if (questionThree.toLowerCase() === 'yes' || questionThree.toLowerCase() === 'y'){
//   console.log(userName + ' got the third question right!');
  alert('oopf! you\'re good at this!');
} else {
//   console.log(userName + ' got the third question wrong!');
  alert('Wrong answer!');
}

// Fourth Quiz Question
var questionFour = prompt('Ok this is a tough one! Am I over the age of 26?');

if (questionFour.toLowerCase() === 'no' || questionFour.toLowerCase() === 'n'){
//   console.log(userName + ' got the fourth question wrong!');
  alert('That is....incorrect my friend! I\'m older than I look! I wonder how long that will last...');
} else {
//   console.log(userName + ' got the fourth question right!');
  alert('You\'re right! Good job!');
}

// Fifth Quiz Question
var questionFive = prompt('Final question! Even harder than the last! Did I move here from Oakland, CA?');

if (questionFive.toLowerCase() === 'yes' || questionFive.toLowerCase() === 'y'){
//   console.log(userName + ' got the fifth question wrong!');
  alert('Awe, wrong answer.');
} else {
//   console.log(userName + ' got the fifth question right!');
  alert('That\'s right! I moved here from Savannah, GA!');
}

alert('Thanks for playing along ' + userName + '! Checkout my "short" bio!');

