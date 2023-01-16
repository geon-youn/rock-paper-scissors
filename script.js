/**
 * Randomly returns "Rock", "Paper", or "Scissors" with an equal chance.
 * 
 * @returns the computer's choice
 */
const getComputerChoice = () => {
    const rand = Math.random();
    if (rand <= 1 / 3) {
        return "Rock";
    }
    else if (rand <= 2 / 3) {
        return "Paper";
    }
    return "Scissors";
};

/**
 * Prompts the user for their choice, formats and validates it.
 * 
 * @returns the player's choice
 */
const getPlayerChoice = () => {
    do {
        const playerSelection = capitalize(prompt("Enter your choice (Rock, Paper, or Scissors):"));
        if (playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") {
            return playerSelection;
        }
    } while (true);
};

/**
 * Capitalizes the input
 * 
 * @returns capitalized string
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}

/**
 * Plays a single round of "Rock, Papers, Scissors!"
 * 
 * @param {player's choice} playerSelection 
 * @param {computer's choice} computerSelection 
 * @returns an array [return string, did the player win, was it a tie]
 */
const playRound = (playerSelection, computerSelection) => {
    const noTieString = (won) => `You ${won ? 'Win' : 'Lost'}! ${won ? playerSelection : computerSelection} beats ${won ? computerSelection : playerSelection}`;
    switch (computerSelection) {
        case "Rock":
            if (playerSelection == 'Paper') {
                return [noTieString(true), true, false];
            }
            else if (playerSelection == 'Scissors') {
                return [noTieString(false), false, false];
            }
            break;
        case "Paper":
            if (playerSelection == 'Scissors') {
                return [noTieString(true), true, false];
            }
            else if (playerSelection == 'Rock') {
                return [noTieString(false), false, false];
            }
            break;
        case "Scissors":
            if (playerSelection == 'Rock') {
                return [noTieString(true), true, false];
            }
            else if (playerSelection == 'Paper') {
                return [noTieString(false), false, false];
            }
            break;
    }
    return ["It's a tie!", null, true];
};

/**
 * Plays 5 games and reports the winner at the end.
 */
function game() {
    let p = 0, c = 0;
    for (let i = 0; i < 5; i++) {
        const round = playRound(getPlayerChoice(), getComputerChoice());
        console.log(round[0]);
        if (round[2]) continue;
        p += round[1] ? 1 : 0;
        c += round[1] ? 0 : 1;
    }
    console.log(p > c ? "You win!" : p == c ? "It's a tie!" : "You lose!");
}