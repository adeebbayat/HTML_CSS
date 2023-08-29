/*A local fitness coach and a mechanical engineer are building an 
IoT device that pops out a piece of candy every time a runner reaches 
2 miles on a treadmill but stops giving candy out at mile 6. You're 
tasked with building the loop functionality to know when to give a 
piece of candy and when to stop.

Step 1: Using comments in your VS Code, answer the following questions:

How do we know we need a loop here?

We need a loop to continously add the runners miles run 

What's the starting point of the loop?

Mile 0

When should the loop stop?

Mile 6

How will the loop know when to stop?

We will tell it to stop once runner reaches 6 miles

What's incrementing for each iteration of the loop?

the distance ran

What variables do we need? 

var dist


*/
var dist = 0;
for (dist; dist <= 6; dist++) {
  if (dist > 0) {
    if (dist % 2 == 0) {
      console.log("Here's a piece of candy");
    }
  }
}
