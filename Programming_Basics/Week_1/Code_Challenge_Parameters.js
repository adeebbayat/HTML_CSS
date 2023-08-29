function greetName(name, timeDay) {
  if (name == "Count Dooku") {
    console.log("I'm coming for you, Dooku!");
    return;
  }
  console.log("Good " + timeDay + ", " + name + "!");
}
name = "Count Dooku";
timeDay = "Morning";
greetName(name, timeDay);
