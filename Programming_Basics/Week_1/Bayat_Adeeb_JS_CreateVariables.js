var minimum_height = 42;
var minimum_age = 10;
var height = 43;
age = 100;
//Step 2
if (height > 42) {
  console.log("Get on that ride, kiddo!");
} else {
  console.log("Sorry kiddo. Maybe next year.");
}

// Stretch 1
function can_ride_ride1(height, age) {
  if (height > minimum_height) {
    if (age > minimum_age) {
      console.log("Get on that ride, kiddo!");
    } else {
      console.log("Sorry kiddo. Maybe next year.");
    }
  } else {
    console.log("Sorry kiddo. Maybe next year.");
  }
}

can_ride_ride1(100,100)
//Stretch 2
function can_ride_ride2(height, age) {
  if (height >= minimum_height) {
    console.log("Get on that ride, kiddo!");
  } else {
    if (age > minimum_age) {
      console.log("Get on that ride, kiddo!");
    } else {
      console.log("Sorry kiddo. Maybe next year.");
    }
  }
}
can_ride_ride2(100,100)