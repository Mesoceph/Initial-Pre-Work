//This lesson introduces the Math.floor() function, which rounds its argument down to the nearest whole number, as well as the method of multiplying the output of Math.random() by an integer to get a value between 0 and that integer value.

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(10 * Math.random());
}
