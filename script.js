      let userScore = 0;
        let compScore = 0;

        function playGame(userChoice) {
            const choices = ['rock', 'paper', 'scissor'];
            const compChoice = choices[Math.floor(Math.random() * 3)];
            const result = getResult(userChoice, compChoice);

            if (result === 'win') {
                userScore++;
            } else if (result === 'lose') {
                compScore++;
            }

            document.getElementById('user-score').textContent = userScore;
            document.getElementById('comp-score').textContent = compScore;
        }

        function getResult(userChoice, compChoice) {
            if (userChoice === compChoice) {
                return 'draw';
            } else if (
                (userChoice === 'rock' && compChoice === 'scissor') ||
                (userChoice === 'paper' && compChoice === 'rock') ||
                (userChoice === 'scissor' && compChoice === 'paper')
            ) {
                return 'win';
            } else {
                return 'lose';
            }
        }

        function resetGame() {
            userScore = 0;
            compScore = 0;
            document.getElementById('user-score').textContent = userScore;
            document.getElementById('comp-score').textContent = compScore;
        }
    