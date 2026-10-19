# LU08 - Genetic Algorithm

```
'########:::::'###:::::'######:::::::::::'##::::'##::::'###::::'##::: ##:
 ##.... ##:::'## ##:::'##... ##:::::::::: ###::'###:::'## ##::: ###:: ##:
 ##:::: ##::'##:. ##:: ##:::..::::::::::: ####'####::'##:. ##:: ####: ##:
 ########::'##:::. ##: ##:::::::'#######: ## ### ##:'##:::. ##: ## ## ##:
 ##.....::: #########: ##:::::::........: ##. #: ##: #########: ##. ####:
 ##:::::::: ##.... ##: ##::: ##:::::::::: ##:.:: ##: ##.... ##: ##:. ###:
 ##:::::::: ##:::: ##:. ######::::::::::: ##:::: ##: ##:::: ##: ##::. ##:
..:::::::::..:::::..:::......::::::::::::..:::::..::..:::::..::..::::..::
```

Given a p5.js game implement Neuroevolution to train a neural network to play the game.
Pac-man must learn to avoid ghosts and collect pellets using a genetic algorithm to evolve.
The ghosts will be controlled by a simple AI that moves similarly to the original Pac-man game.
Meaning the ghosts movement is not random and can be predicted by the "player" (Pac-man).

Pac-Man cycles through the direction-specific animation frames in `assets/sprites/`, and each ghost uses its sprite from the same folder. Frightened ghosts use the blue ghost sprite.

Use W/A/S/D to move. The maze wraps at the marked side tunnel. Select **AI
Training** to evolve Pac-Man with a genetic algorithm. Each generation contains
eight controllers, evaluated one at a time. The statistics table shows the
generation and the current controller's position within it.

AI fitness is calculated as game score, plus 100 points per pellet eaten,
10,000 points per level cleared, and one point per simulated second survived.
After all eight controllers finish, the next generation is bred from the better
performers. The simulation speed slider (1× to 10×) adjusts how many AI game
updates run per rendered frame. There is no lives system: a ghost collision
ends a user run or advances AI training to the next controller immediately.

The `Pacman.js` and `Ghost.js` files contain the game entity classes; `script.js` handles the maze, game state, rendering, and shared utilities. The Reset button starts a fresh game.

https://github.com/jjeongin/IM-PacMan

<!-- TODO Fix footer  -->
<!-- TODO change colors, fonts to be more fun -->
