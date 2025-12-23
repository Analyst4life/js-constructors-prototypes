This example demonstrates how to use a constructor function and prototype methods to model a simple player leveling system in JavaScript.

---

## Player Constructor Function

```javascript
// Constructor function used to create Player objects
// Each player will have a name, level, and experience points
function Player(name) {
  this.name = name;   // Set the player's name
  this.lvl = 1;       // Start every player at level 1
  this.points = 0;    // Start every player with 0 experience points
}

// Add a method called 'gainXp' to the Player prototype
// This method lets a player earn experience points
Player.prototype.gainXp = function (xp) {
  this.points += xp;  // Add experience points

  // Check if the player has enough points to level up
  if (this.points >= 10) {
    this.lvl++;        // Increase level
    this.points -= 10; // Subtract points after leveling up
  }

  // Display the player's current status
  console.log(this.describe());
};

// Add a method called 'describe' to the Player prototype
// Returns a string describing the player's status
Player.prototype.describe = function () {
  return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
};

// Create Player instances
const player1 = new Player('Bob');
const player2 = new Player('Alice');

player1.gainXp(4);
player2.gainXp(7);

player1.gainXp(5);
player2.gainXp(1);

player1.gainXp(7);
player2.gainXp(9);

player1.gainXp(5);
player2.gainXp(2);

