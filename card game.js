const prompt = require("prompt-sync")();


console.log("         _______         _______          _______        ");
console.log("        |       |       |       |        |       |       ");
console.log("        |  🔥   |       |  💧   |        |  🌿   |      ");
console.log("        |_______|       |_______|        |_______|      ");

console.log("---------------------------------------------------------");
console.log("𝚆 𝙴 𝙻 𝙲 𝙾 𝙼 𝙴   𝚃 𝙾   𝙲 𝙰 𝚁 𝙳   𝙱 𝙰 𝚃 𝚃 𝙻 𝙴   𝙶 𝙰 𝙼 𝙴 ^-^! ");
console.log("---------------------------------------------------------");
let pseudo = prompt("CHOOSE YOUR PSEUDO : ");

// Asking my choice//
function userChoice() {
    let isValidChoice = false;
    let choice;

    while (!isValidChoice) {
        choice = prompt("Send your attack (fire/water/plant): ");
        if (["fire", "plant", "water"].includes(choice)) {
            isValidChoice = true;
        } else {
            console.log("Invalid command. Please choose 'fire', 'water', or 'plant'.");
        }
    }

    return choice;
}

// Type of cards//
function typeOfCard() {
    return ["fire", "plant", "water"];
}

// Random card//
function getRandomCard(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}

// IA card//
function IACard() {
    return getRandomCard(typeOfCard());
}

// Score counter//
let scoreUtilisateur1 = 0;
let scoreUtilisateur2 = 0;

// Conditions to win//
function condition(utilisateur1, IA) {
    IA = IACard();
    console.log("IA's Card: " + IA + "\n");

    if (
        (utilisateur1 == "fire" && IA == "plant") ||
        (utilisateur1 == "plant" && IA == "water") ||
        (utilisateur1 == "water" && IA == "fire")
    ) {
        scoreUtilisateur1 += 1;
    }

    if (
        (IA == "fire" && utilisateur1 == "plant") ||
        (IA == "plant" && utilisateur1 == "water") ||
        (IA == "water" && utilisateur1 == "fire")
    ) {
        scoreUtilisateur2 += 1;
    }

    return "Score: " + pseudo + " = " + scoreUtilisateur1 + "  /  IA = " + scoreUtilisateur2;
}

// Function to play the game
function playGame() {
    for (let i = 1; i <= 3; i++) {
        console.log(condition(userChoice(), IACard()));
    }
}

// Function to determine the final winner
function determineWinner() {
    if (scoreUtilisateur1 > scoreUtilisateur2) {
        console.log("🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 🎉 \n");
        console.log("Congrats " + pseudo + "!" + "  You win (/*0*)/**");
    } else if (scoreUtilisateur1 < scoreUtilisateur2) {
        console.log("😢 😢 😢 😢 😢 😢 😢 😢 😢 😢 \n");
        console.log("GAME OVER (T_T) You lose");
    } else {
        console.log("⚖️  ⚖️  ⚖️  ⚖️  ⚖️  ⚖️  ⚖️  ⚖️  ⚖️  ⚖️ \n");
        console.log("Equality *°o°*");

        let replay = prompt("Wanna try again (y / n)?");
        if (replay.toLowerCase() == "y") {
            scoreUtilisateur1 = 0;
            scoreUtilisateur2 = 0;
            playGame();
            determineWinner();
        } else if (replay.toLowerCase() == "n") {
            return;
        } else {
            console.log("Invalid command");
            determineWinner();
        }
    }
}

// Start the game
playGame();
determineWinner();





