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

AI fitness is calculated as game score, plus 100 points per pellet eaten,
10,000 points per level cleared, and one point per simulated second survived.
After all eight ghosts finish, the next generation is bred from the better
performers.

## What Do I Do?

- Fork this repository to your own GitHub account.
- Clone **your forked repository** to your local machine.
- Adjust the "magic numbers" in the code to improve the AI's performance.
- Add, Commit, and Push your changes to your forked repository.

```bash
## Clone Down YOUR forked repository
git clone <YOUR_FORKED_REPO_URL>
## After your changes, add, commit, and push your changes
git add .
git commit -m "Your commit message"
git push
```

## What to Turn in?

- A link to **your GitHub repository** containing your code and assets.
- A screenshot of your AI's highest score in the game.
