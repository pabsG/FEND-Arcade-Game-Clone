// Function expression that will hold the bug enemy object.
// The argumens x, y and speed refer to the location of the enemies and how fast they move

const Enemy = function(x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
  this.sprite = 'images/enemy-bug.png';
};

// Enemy movement Function

Enemy.prototype.update = function(dt) {
  if (this.x < 707) {
      this.x += this.speed * dt
  } else if (this.x = 707) {
    this.x = -120
  };
};

// Draw the enemy on the screen, required method for game

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// The original comments requested this player class contain a render function,
// however I decided to go with the prototype.render method to keep things consistent

class Player {

  // Initial player location and character sprite

  constructor () {
     this.x = 202;
     this.y = 385;
     this.sprite = "images/char-boy.png";
   }

   // Function that handles movement upon arrow key presses.
   // Also makes sure the player cannot move outside the boundries.

   handleInput(input) {
     switch(input) {
       case 'left':
        if (this.x != 0) {
          this.x -= 101;
        };
        break;
       case 'right':
        if (this.x != 404) {
          this.x += 101;
        };
       break;
       case 'up':
        if (this.y != -30) {
          this.y -= 83;
        };
       break;
       case 'down':
       if (this.y != 385) {
         this.y += 83;
       };
       break;
     };
   };

   // Function that helps detect collision as well as when the player has reached the goal

   update () {
     if (this.y === -30 ) {
      // console.log('player has won!');
      this.x = 202;
      this.y = 385;
     };
    for (let enemy of allEnemies) {
      if (this.y === enemy.y && (this.x > enemy.x - 45 && this.x < enemy.x + 45)) {
        // console.log('hit!');
        this.x = 202;
        this.y = 385;
      };
    };
   }
}


Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Time to place all our objects in variables!
// Initially I had more enemies, however it made the game way too hard.

const topEnemy = new Enemy(0, 53, 150);
const topEnemy2 = new Enemy(-100 , 53, 500);
const midEnemy = new Enemy(0, 136, 25);
const midEnemy2 = new Enemy(-55, 136, 600);
const lowEnemy = new Enemy(0, 219, 250);
const lowEnemy3 = new Enemy(-100 ,219, 400);
const allEnemies = [];
allEnemies.push(topEnemy, lowEnemy, topEnemy2, midEnemy2, lowEnemy3);
const player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
