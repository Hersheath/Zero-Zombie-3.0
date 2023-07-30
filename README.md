# Zero-Zombie-3.0

Introduction:
The Zero Zombie game is a simple web-based 2D shooter game where the player controls a plane and drop bomb to wipe out zombies, avoiding obstacles and hailstones and collecting airdrops and medic items to gain ammo and health. The goal of the game is to kill as many zombies as possible and achieve the highest score.

What Was Done:
The game was developed using the Phaser 3 framework, a popular JavaScript library for creating 2D games that run in the browser. The project consists of 3 HTML files (‘index.html’ for the start scene, ‘game.html’ for setting up the game container, ‘scoreboard.html’ for creating the scoreboard), 2 JavaScript files (‘start.js’ and ‘scoreboard.js’), the js code that defines the game's mechanics, including player movement, zombie spawning, collision detection, and scoring. It also handles user input, such as keyboard and touch controls. This part of the js code should be in a separate js file, however, it doesn’t work due to the import failure of Phaser, so the current solution is to include this part of the js code in the game.html file. Besides, there are also 3 CSS files for styling, as well as one ‘assets’ file which contains all the graphics and audio files needed.



Key Features:	Justification:	Points
The game is responsive and can be used on both desktop and mobile environments.	By using Codesandbox’s Responsive Preview feature, we know that the game can run on all device environments, including mobiles, tablets, and desktops.	4
works on Firefox, Safari, Edge, and Chrome.	This game is built using Phaser 3, a popular HTML 5 game framework, which is designed to be compatible with major web browsers. The game ran without any issues when tested on these browsers.	2
There is a clear plot in the game. It has a start and end.	There is a starting scene that tells the player the backstory of the game and guides how to get as many points as possible. The player is on a mission that tries to destroy all zombies, not let them escape.	4
User can get their name on the scoreboard	When the game ends, there is an end scene that can allow players to view the scoreboard. Player needs to input their name, then the name and score will show on the scoreboard.	3
There are different (more than 1) objects to collect	Player can collect airdrops to gain ammo, and collect medical items to increase HP.	2
There are moving parts in the game area (other than the player and enemies, so e.g. some floors fall apart)	The moving parts also include hailstones, airdrops, medical items, and bombs.	3
There is more than one map	Player can choose two different maps, Map1 or Map2.	3
Gamer needs to use both the keyboard and mouse to meaningfully control the player's character	Player can either use the cursor or use the arrow keys to move the plane and press the space bar to drop the bomb.	4
There are enemies that can hurt the player	Not only the zombie can crash the plane, but also those hailstones can damage the plane.	3
There is music and sound effects when a player shoots/jumps or anything like that	There is horrible background music when the game starts. Zombies can also make noise; the explosion effect when a bomb killed the zombie. Also, there are different sound effects when the player collects different items	3
Gamer can play the game with a touch screen (this is in addition to general points, as here there needs to be an input system built for the touch screen)	After using the Phaser's built-in pointer events to implement a custom input system, which listens to the pointer down the event and create a bomb sprite at the position of the plane when a single tap occurs. The plane will continue to follow the movement of the finger (cursor). This way, the player can control the plane using the cursor, arrow keys, or touch.	3
All required features are implemented.	Total points:	34 

Tools Used:
1. Phaser 3: The main game engine used for developing the game, handling physics, animations, and asset loading.
2. HTML and CSS: Used to set up the game container and apply basic styling.
3. JavaScript: The game's logic and mechanics were implemented using JavaScript.
4. Audio Files and Graphics: Sound effects and background music were included to enhance the gaming experience. Sprites and images were used to represent the game's elements, such as the plane, zombies, and items.

