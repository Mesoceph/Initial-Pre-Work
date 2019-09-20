//In this lesson, I applied what I have learned about switch and if/else if/else statements to create a card counting application that keeps track of the count in a Blackjack game and returns the current count plus the advice to bet or hold.

var count = 0;

function cc(card) {
  // Only change code below this line
  if (card <= 6) {
    count++;
  }
  else {
    switch (card) {
      case 10:
      case 'J':
      case 'Q':
      case 'K':
      case 'A':
      count--;
      break;
    }
  }
  if (count > 0) {
    return count + " Bet";
  }

  else {
    return count + " Hold"
  }

  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');
