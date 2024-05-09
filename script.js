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

        let humanSelection = "";
        let message = "";
        let computerScore = 0;
        let humanScore = 0;
        // For a Single Round
        function playRound(humanChoice, computerChoice) {

            // 1. If human and computer choice are same then its a tie
            // 2. If human wins then increase the score and log the winning message.
            // 3. Else computer wins and increase the computer score
                // 3.1 Logs the message you lost
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
        }

        // let humanSelection = getHumanChoice();
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

        // Why doesn't it work when I pass the myInput("rock") method directly 
        // let rock = document.querySelector(".rock");
        // rock.addEventListener("click", (event) => { // Why do I need this formality
        //     myInput("rock");
        //     computerInput();
        // });

        // let paper = document.querySelector(".paper");
        // paper.addEventListener("click", (event) => {
        //     myInput("paper");
        //     computerInput();
        // });

        // let scissor = document.querySelector(".scissor");
        // scissor.addEventListener("click", (event) => {
        //     myInput("scissor");
        //     computerInput();
        // });


