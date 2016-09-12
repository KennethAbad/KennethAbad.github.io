// Enemies our player must avoid
var Enemy = function(x, y, z) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.speed = z; // the speed of the enemy will be assigned to variable z

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x = this.x + this.speed * dt;
    if (this.x > 505) {
        this.x = 0;
        this.speed = Math.floor(Math.random() * (400 - 200 + 1)) + 300;
    }

};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function(x, y) {

    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;
    this.speed = 100;
};

Player.prototype.update = function(dt) {

    /*  
    The two if statements checks (or sets) the boundary of the game.
    If the player hits the bounday parameters, they will remain within the game map.
    
    */
    if (this.x < 0 || this.x > 400) { // sets the boundaries for x (left and right movement)
        if (this.x < 0) {
            this.x = 0;
        } else {
            this.x = 400
        }
    }
    if (this.y < 60 || this.y > 380) { // sets the boundaries for y (up and down movement)
        if (this.y < 60) { // If the player reaches the water, they will reset
            this.reset();
            drawWin();
            
        } else if (this.y > 380) {
            this.y = 380;
        }
    }

    if (this.collide()) {
        this.reset();
    }

};

//Position the player to initial position
Player.prototype.reset = function() {
    this.x = 200;
    this.y = 300;
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//Handles the player movement by adding/subtracting the x/y value according to key inputs
Player.prototype.handleInput = function(key) {
    switch (key) {

        case 'left':
            this.x -= 100;
            break;

        case 'right':
            this.x += 100;
            break;

        case 'up':
            this.y -= 80;
            break;
        case 'down':
            this.y += 80;
            break;
    }
};

// Sets the collision boundary for the player. If the bug hits the player, the player is reset to initial position
Player.prototype.collide = function() {
    for (var i = 0; i < allEnemies.length; i++) {
        if (this.x < allEnemies[i].x + 50 && this.x + 50 > allEnemies[i].x && this.y < allEnemies[i].y + 30 && this.y + 30 > allEnemies[i].y) {
            this.reset();
            break;
        }
    }
};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var player = new Player(200, 300);
var enemy1 = new Enemy(-100, 60, 300);
var enemy2 = new Enemy(-100, 140, 350);
var enemy3 = new Enemy(-100, 225, 400);
var allEnemies = [enemy1, enemy2, enemy3];

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

function drawWin() {
    ctx.font = "48px serif";
    ctx.fillText("A Winner is You", 100, 650);
};