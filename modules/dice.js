// TASK - 5

import crypto from 'crypto';

// function rollDice() {
//     const dice = crypto.randomInt(1, 7);
//     console.log("Dice Rolled:", dice);
// }

// rollDice();

for (let i=1; i<=6;i++){
    const dice=crypto.randomInt(1,7)
    console.log(" No on Dice rolled:",dice)
}