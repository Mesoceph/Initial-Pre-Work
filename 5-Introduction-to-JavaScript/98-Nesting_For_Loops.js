//In this lesson, I learned how to nest for loops in order to iterate through multi-dimensional arrays.

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
