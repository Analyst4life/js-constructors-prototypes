// Define a Player class using ES6 class syntax
class Player {
  // Constructor method runs when a new Player is created
  constructor(name) {
    this.name = name;   // Set the player's name to the given name
    this.lvl = 1;       // Initialize the player's level to 1
    this.points = 0;    // Initialize the player's experience points to 0
  }

  // Method to gain experience points
  gainXp(xp) {
    this.points += xp;  // Add the given XP to the player's current points

    // Check if the player has enough points to level up
    if (this.points >= 10) {
      this.lvl++;        // Increase level by 1
      this.points -= 10; // Subtract 10 points after leveling up
    }

    // Print the player's current status
    console.log(this.describe());
  }

  // Method to describe the player's current state
  describe() {
    // Return a string showing the player's name, level, and XP
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
  }
}

// Create two Player instances
const player1 = new Player('Bob');   // New player named Bob
const player2 = new Player('Alice'); // New player named Alice

// Simulate gaining XP
player1.gainXp(4);  // Bob gains 4 XP
player2.gainXp(7);  // Alice gains 7 XP
player1.gainXp(5);  // Bob gains 5 XP; may level up
player2.gainXp(1);  // Alice gains 1 XP; may level up
player1.gainXp(7);  // Bob gains 7 XP; may level up
player2.gainXp(9);  // Alice gains 9 XP; may level up
player1.gainXp(5);  // Bob gains 5 XP; may level up
player2.gainXp(2);  // Alice gains 2 XP; may level up

// Optional: manually print final state
// console.log(player1.describe());
// console.log(player2.describe());
