let player = {
    name: "Anthony",
    chips: 200,
}
let cards = [];
let sum = 0;
let hasBlcackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlcackJack = true;
        player.chips += 20;
    } else {
        message = "You're out of the game";
        isAlive = false;
        player.chips -= 20;
    }
    messageEl.textContent = message;
    playerEl.textContent = player.name + ": $" + player.chips;
}

function newCard() {
    if (isAlive === true && hasBlcackJack === false && player.chips >= 20) {
        let getNewCard = getRandomCard();
        sum += getNewCard;
        cards.push(getNewCard);
        renderGame();
    }
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        return 11;
    }
    else if (randomCard > 10) {
        return 10;
    }
    else {
        return randomCard;
    }
}