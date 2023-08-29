function howMuchLeftOverCake(numberOfPieces, numberOfPeople) {
  LeftOverCake = numberOfPieces - numberOfPeople;
  if (LeftOverCake <= 0){
    console.log("No leftovers for you!");
    return;
  }
  if (LeftOverCake <= 2){
    console.log("You have some leftovers");
    return;
  }
  if (LeftOverCake <=5){
    console.log("You have leftovers to share");
    return;
  }
  if (LeftOverCake >= 5) {
    console.log("Hold another party!");
  }
}
howMuchLeftOverCake(16,10);