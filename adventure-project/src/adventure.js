const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function endGame(message) {
  console.log("\n" + message);
  console.log("Game over.");
  rl.close();
}

function riverPath() {
  console.log("\nYou arrive at a river.");
  console.log("1. Try to cross the river");
  console.log("2. Look for a bridge");

  rl.question("Choose 1 or 2: ", (choice) => {
    if (choice === "1") {
      endGame("The river is too strong. You are swept away.");
    } else if (choice === "2") {
      console.log("\nYou find a bridge and cross safely.");
      console.log("You found the treasure 🎉");
      rl.close();
    } else {
      endGame("Invalid choice.");
    }
  });
}

function cavePath() {
  console.log("\nYou find a cave.");
  console.log("1. Enter the cave");
  console.log("2. Continue walking");

  rl.question("Choose 1 or 2: ", (choice) => {
    if (choice === "1") {
      console.log("\nInside the cave you find treasure!");
      console.log("You win 🎉");
      rl.close();
    } else if (choice === "2") {
      riverPath();
    } else {
      endGame("Invalid choice.");
    }
  });
}

rl.question("What is your name? ", (name) => {
  console.log(`\nWelcome to the adventure, ${name}!`);
  console.log("You are at the jungle.");
  console.log("1. Thorny path");
  console.log("2. Clear path");

  rl.question("Choose 1 or 2: ", (choice) => {
    if (choice === "1") {
      cavePath();
    } else if (choice === "2") {
      riverPath();
    } else {
      endGame("Invalid choice.");
    }
  });
});