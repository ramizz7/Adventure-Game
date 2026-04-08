const readline = require("readline"); // Importeert de readline module om input van de gebruiker te lezen

// Maakt een interface voor input (toetsenbord) en output (console)
const rl = readline.createInterface({
  input: process.stdin,  // Leest wat de gebruiker typt
  output: process.stdout // Print tekst naar de console
});

// Functie die het spel beëindigt met een bericht
function endGame(message) {
  console.log("\n" + message); // Print het bericht (bijv. waarom je verloren hebt)
  console.log("Game over.");   // Print "Game over"
  rl.close();                  // Sluit de input → programma stopt
}

// Functie voor het rivier pad
function riverPath() {
  console.log("\nYou arrive at a river."); // Beschrijving van situatie
  console.log("1. Try to cross the river"); // Keuze 1
  console.log("2. Look for a bridge");      // Keuze 2

  // Vraagt gebruiker om een keuze
  rl.question("Choose 1 or 2: ", (choice) => {
    if (choice === "1") {
      // Als speler kiest voor zwemmen → verliest
      endGame("The river is too strong. You are swept away.");
    } else if (choice === "2") {
      // Als speler brug kiest → wint
      console.log("\nYou find a bridge and cross safely.");
      console.log("You found the treasure 🎉");
      rl.close(); // Sluit spel (einde)
    } else {
      // Ongeldige input
      endGame("Invalid choice.");
    }
  });
}

// Functie voor het grot pad
function cavePath() {
  console.log("\nYou find a cave.");       // Beschrijving situatie
  console.log("1. Enter the cave");        // Keuze 1
  console.log("2. Continue walking");      // Keuze 2

  // Vraagt gebruiker om een keuze
  rl.question("Choose 1 or 2: ", (choice) => {
    if (choice === "1") {
      // Speler gaat de grot in → wint
      console.log("\nInside the cave you find treasure!");
      console.log("You win 🎉");
      rl.close(); // Sluit spel
    } else if (choice === "2") {
      // Speler loopt door → gaat naar rivier pad
      riverPath(); // Roept andere functie aan
    } else {
      // Ongeldige input
      endGame("Invalid choice.");
    }
  });
}

// Start van het spel: vraagt naam
rl.question("What is your name? ", (name) => {
  console.log(`\nWelcome to the adventure, ${name}!`); // Welkomstbericht met naam

  console.log("You are at the jungle."); // Start locatie
  console.log("1. Thorny path");         // Keuze 1
  console.log("2. Clear path");          // Keuze 2

  // Vraagt gebruiker om eerste keuze
  rl.question("Choose 1 or 2: ", (choice) => {
    if (choice === "1") {
      // Gaat naar grot pad
      cavePath();
    } else if (choice === "2") {
      // Gaat naar rivier pad
      riverPath();
    } else {
      // Ongeldige input
      endGame("Invalid choice.");
    }
  });
});