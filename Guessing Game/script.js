let number = Math.floor(Math.random() * 100 + 1);
let chances = 0;
let guess;
guess = prompt("Enter a number between 1 and 100");
++chances;

do {
  guess = Number.parseInt(guess);
  if (guess > number) {
    console.log("Number entered is greater");
    guess = prompt("Enter again!");
    guess = Number.parseInt(guess);
    ++chances;
    continue;
  } else if (guess < number) {
    console.log("Number entered is smaller");
    guess = prompt("Enter again!!");
    guess = Number.parseInt(guess);
    ++chances;
    continue;
  }
} while (guess != number);

let score = 100 - chances;
console.log(
  "\nHurrah!\nThe number generated was",
  number + " and you guessed it right.\nYour final score is",
  score
);
