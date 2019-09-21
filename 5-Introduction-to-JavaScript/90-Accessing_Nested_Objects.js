//In this lesson, we learned how to access the properties of objects that are nested within other objects.  This can be done either by using a series of nested references in bracket notation or a series of references in dot notation, or a combination of the two.

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line
