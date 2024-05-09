let availChoices = ["Rock", "Paper", "Scissor"];

        function getComputerChoice() {
            let random = Math.floor(Math.random() * 3);

            return availChoices[random].toLowerCase();
        }

        function getHumanChoice() {
            let humanChoice = prompt("Enter your choice", '');

            return humanChoice.toLowerCase();
        }

        let humanSelection = "";
        let message = "";
        let computerScore = 0;
        let humanScore = 0;

        function playRound(humanChoice, computerChoice) {

            const content = document.querySelector(".content");
            const yourPoints = document.querySelector(".you-points");
            const computerPoints = document.querySelector(".com-points");

            if (humanSelection === computerSelection) {
                message = "It's a tie!";

            } else if (humanSelection === 'rock' && computerSelection === 'scissor') {
                humanScore++;
                message = "You win! Rock beats Scissor";

            } else if (humanSelection === 'paper' && computerSelection === 'rock') {
                humanScore++;
                message = "You win! Paper beats Rock";

            } else if (humanSelection === 'scissor' && computerSelection === 'paper') {
                humanScore++;
                message = "You win! Scissor beats Paper";

            } else {
                computerScore++;
                message = `You lose! ${computerSelection} beats ${humanSelection}`;
            }

            content.textContent = message;
            yourPoints.textContent = humanScore;
            computerPoints.textContent = computerScore;

            if (humanScore === 5) {
                content.textContent = "YAY! YOU WON THE GAME.."
            } else if (computerScore === 5) {
                content.textContent = "OOPS! GUESS YOU LOST.."
            }
        }

        function myInput(input) {
            const you = document.querySelector(".you");
            const yourChoice = document.querySelector(".your-choice");
            yourChoice.textContent = `You choose ${input}!`;
            you.appendChild(yourChoice);
        }

        let computerSelection = "";
        function computerInput() {
            const computer = document.querySelector(".computer");
            const computerChoice = document.querySelector(".computer-choice");
            computerSelection = getComputerChoice();
            computerChoice.textContent = `Computer choose ${computerSelection}!`;
            computer.appendChild(computerChoice);
        }

        const buttons = document.querySelectorAll("button");


        buttons.forEach((button) => {

            button.addEventListener("click", () => {
                myInput(button.className);
                computerInput();
                humanSelection = button.className;
                console.log(humanSelection);
                playRound(humanSelection, computerSelection);
            });
        });


