//This lesson shows how to build a function that will concatenate pre-defined strings with the words specified when the function is called in order to create a complete sentence.

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "The " + myNoun + " is " + myAdjective + ", and it " + myVerb + " very " + myAdverb + ".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
