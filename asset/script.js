var powCharter = [
  "He-man",
  "Skeletor",
  "She-ra",
  "Hordak",
  "King Hiss",
  "Optimus",
];

if (powCharter[0] === "He-man")
  console.log("He-man is not my favorite charecter");
powCharter.forEach(function (charecter) {
  console.log(charecter);
  if (charecter === "He-man") {
    console.log("He-man is my favorite charecter");
  } else {
    console.log("He-man was defeated by " + charecter);
  }
});

console.log(powCharter[0]);
console.log(powCharter[4]);
