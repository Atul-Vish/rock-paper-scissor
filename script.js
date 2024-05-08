let availChoices = ["Rock", "Paper", "Scissor"];

        // To get the computer choice
        function getComputerChoice() {
            let random = Math.floor(Math.random() * 3);

            return availChoices[random].toLowerCase();
        }

        // To get the human choice
        function getHumanChoice() {
            let humanChoice = prompt("Enter your choice", '');

            return humanChoice.toLowerCase();
        }

        // For a Single Round
        function playRound(humanChoice, computerChoice) {

            // 1. If human and computer choice are same then its a tie
            // 2. If human wins then increase the score and log the winning message.
            // 3. Else computer wins and increase the computer score
                // 3.1 Logs the message you lost

            if (humanSelection === computerSelection) {
                prompt("It's a tie!", "");

            } else if (humanSelection === 'rock' && computerSelection === 'scissor') {
                humanScore++;
                prompt("You win! Rock beats Scissor");

            } else if (humanSelection === 'paper' && computerSelection === 'rock') {
                humanScore++;
                prompt("You win! Paper beats Rock");

            } else if (humanSelection === 'scissor' && computerSelection === 'paper') {
                humanScore++;
                prompt("You win! Scissor beats Paper");

            } else {
                computerScore++;
                prompt(`You lose! ${computerChoice} beats ${humanChoice}`)
            }
        }

        let humanSelection = 0;
        let computerSelection = 0;
        let computerScore = 0;
        let humanScore = 0;

        
        const you = document.querySelector(".you");

        const yourChoice = document.createElement("div");
        yourChoice.classList.add("your-choice");
        yourChoice.setAttribute("style", ".your-choice");
        yourChoice.textContent = "You choose rock!";

        you.appendChild(yourChoice);
