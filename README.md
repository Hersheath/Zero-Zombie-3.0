# Zero-Zombie-3.0

Introduction:
The Zero Zombie game is a simple web-based 2D shooter game where the player controls a plane and drops bombs to wipe out zombies, avoiding obstacles and hailstones and collecting airdrops and medic items to gain ammo and health. The goal of the game is to kill as many zombies as possible and achieve the highest score.

What Was Done:
The game was developed using the Phaser 3 framework, a popular JavaScript library for creating 2D games that run in the browser. The project consists of 3 HTML files (‘index.html’ for the start scene, ‘game.html’ for setting up the game container, ‘scoreboard.html’ for creating the scoreboard), 2 JavaScript files (‘start.js’ and ‘scoreboard.js’), the js code that defines the game's mechanics, including player movement, zombie spawning, collision detection, and scoring. It also handles user input, such as keyboard and touch controls. This part of the js code should be in a separate js file, however, it doesn’t work due to the import failure of Phaser, so the current solution is to include this part of the js code in the game.html file. Besides, there are also 3 CSS files for styling, as well as one ‘assets’ file which contains all the graphics and audio files needed.


![zzfeatures](https://github.com/Hersheath/Zero-Zombie-3.0/assets/97139388/5c379530-7ee9-49b0-9841-c4b39ca21ed6)


Tools Used:
1. Phaser 3: The main game engine used for developing the game, handling physics, animations, and asset loading.
2. HTML and CSS: Used to set up the game container and apply basic styling.
3. JavaScript: The game's logic and mechanics were implemented using JavaScript.
4. Audio Files and Graphics: Sound effects and background music were included to enhance the gaming experience. Sprites and images were used to represent the game's elements, such as the plane, zombies, and items.

