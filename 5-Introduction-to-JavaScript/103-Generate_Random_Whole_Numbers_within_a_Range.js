//In this lesson, I learned to generate a random number between specified minimum and maximum values (inclusive) using a combination of the Math.floor() function, Math.random() function, and basic arithmetic.

// Example
function ourRandomRange(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

  return Math.floor(Math.random() * (myMax - myMin +1) + myMin); // Change this line

}

// Change these values to test your function
var myRandom = randomRange(5, 15);
