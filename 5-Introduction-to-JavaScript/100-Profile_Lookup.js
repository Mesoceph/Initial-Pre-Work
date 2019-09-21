//In this lesson, I applied what I have learned about for loops and if/else if statements to create a function to iterate through an array of objects containing contacts, determine whether or not the contact exists, determine whether the specified property exists for that contact, and return either the property value or a statement that the contact or property does not exist as appropriate.

//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
  for (var i=0; i < contacts.length; i++) {
    if (contacts[i].firstName == name) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      }
      else {
        return "No such property"
      }
    }
    else if (i == contacts.length - 1) {
      return "No such contact"
    }
  }
// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");
