let choices = document.querySelectorAll(".choice");
let yourScore = document.getElementById("your-score");
let computerScore = document.getElementById("computer-score");
let msgContainer = document.getElementById("message-container");
let resultMessage = document.getElementById("message");
let resetBtn = document.querySelector(".reset-button");

let userScore = 0;
let comScore = 0;

const userChoiceIdentifier = {
  rock: "Rock👊",
  paper: "Paper🖐️",
  scissors: "Scissors✌️",
};

const computerChoiceIdentifier = {
  rock: "Rock👊",
  paper: "Paper🖐️",
  scissors: "Scissors✌️",
};

function decideWinner(userWin, computerChoice, userChoice) {
  if (userWin) {
    userScore++;
    yourScore.innerText = userScore;
    resultMessage.style.backgroundColor = "green";
    resultMessage.innerText = `You win! ${userChoiceIdentifier[userChoice]} beats ${computerChoiceIdentifier[computerChoice]} 🚀`;
  } else {
    comScore++;
    computerScore.innerText = comScore;
    resultMessage.style.backgroundColor = "red";
    resultMessage.innerText = `You lose! ${computerChoiceIdentifier[computerChoice]} beats ${userChoiceIdentifier[userChoice]} 💔`;
  }
}

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playGame(userChoice) {
  const computerChoice = getComputerChoice();
  let userWin = true;
  if (userChoice === computerChoice) {
    resultMessage.style.backgroundColor = "blue";
    resultMessage.innerText = `It is a draw! Both chose ${userChoiceIdentifier[userChoice]} 🙂`;
    return;
  } else if (userChoice === "rock") {
    userWin = computerChoice === "scissors" ? true : false;
  } else if (userChoice === "paper") {
    userWin = computerChoice === "rock" ? true : false;
  } else {
    userWin = computerChoice === "paper" ? true : false;
  }
  decideWinner(userWin, computerChoice, userChoice);
}

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

function resetGame() {
    userScore = 0;
    comScore = 0;
    yourScore.innerText = userScore;
    computerScore.innerText = comScore;
    resultMessage.innerText = "Choose your move!";
    resultMessage.style.backgroundColor = "black";
}

resetBtn.addEventListener("click", resetGame);
