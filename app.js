function removeHover(){
    this.classList.remove('user-hover');
}

function userHover() {
    this.classList.add('user-hover');
}

function playMatch(){
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');
    
    hands.forEach(hand =>{
        hand.addEventListener('animationend', function(){
            this.style.animation = '';
        })
    })

    const moves = ["rock", "paper", "scissors"];

    const options = Array.from(document.querySelectorAll('.options div'));
    options.forEach(option => {
        option.addEventListener('click', function(){
            const computerChoise = moves[Math.floor(Math.random()*moves.length)];
            const playerChoice = this.className;

            setTimeout(() =>{
                // update scores
                compareHands(playerChoice, computerChoise);

                // Update Images
                playerHand.src = `./assets/${this.className}.png`;
                computerHand.src = `./assets/${computerChoise}.png`;
            }, 1000)
            
            // Animation
            playerHand.style.animation = "shakePlayer 1s ease";
            computerHand.style.animation = "shakeComputer 1s ease";
        })
    });

    // for some reason adding hover effect messes with the score
    //options.forEach(option => option.addEventListener('mouseover', userHover));
    //options.forEach(option => option.addEventListener('mouseleave', removeHover));

};

function compareHands(playerChoice, computerChoice){
    // Update text
    const playerWins = document.querySelector('.player-wins p');
    const computerWins = document.querySelector('.computer-wins p');
    const ties = document.querySelector('.ties p');


    // checking for a tie
    if(playerChoice === computerChoice){
        ties.textContent = Number(ties.textContent) + 1;
        return;
    }

    // check for rock
    if(playerChoice === 'rock'){
        if(computerChoice === 'scissors'){
            playerWins.textContent = Number(playerWins.textContent) + 1;
            return;
        } else{
            computerWins.textContent = Number(computerWins.textContent) + 1;
            return;
        }
    }

    // check for paper
    if(playerChoice === 'paper'){
        if(computerChoice === 'rock'){
            playerWins.textContent = Number(playerWins.textContent) + 1;
            return;
        } else{
            computerWins.textContent = Number(computerWins.textContent) + 1;
            return;
        }
    }

    // check for scissors
    if(playerChoice === 'scissors'){
        if(computerChoice === 'paper'){
            playerWins.textContent = Number(playerWins.textContent) + 1;
            return;
        } else{
            computerWins.textContent = Number(computerWins.textContent) + 1;
            return;
        }
    }

}


function game(){
    playMatch();
}

// start the game function
game();