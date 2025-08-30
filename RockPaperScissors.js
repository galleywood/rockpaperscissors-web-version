const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const resetBtn = document.getElementById("resetBtn");


//function to update score element
function updateScoreElement(){
    document.querySelector(`.js-score`).innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`;

}



//get score from local storage
let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};

function playGame(playerMove){
    let result = ``;
    const computerMove = computerChoice();

    if(playerMove === `scissors`){
        if(computerMove === `rock`){
                result = `You Loose`;
            }else if(computerMove === `paper`){
                result = `You Win`;
            }else{
                result = `Tie`;
        }
    } else if(playerMove === `paper`){
                if(computerMove === `rock`){
                result = `You Win`;
            }else if(computerMove === `paper`){
                result = `Tie`;
            }else{
                result = `You Win`;
            }
        
        }else if(playerMove === `rock`){
            if(computerMove === `rock`){
                result = `Tie`;
            }else if(computerMove === `paper`){
                result = `You Loose`;
            }else{
                result = `You Win`;
            }
        }
    
    //Score update
    if (result === `You Win`){
        score.wins += 1;
    }else if(result === `You Loose`){
        score.losses += 1;
    }else{
        score.ties += 1;
    }

    //Store score
    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector(`.js-result`).innerHTML = result;

    document.querySelector(`.js-moves`).innerHTML = `You
            <img src="emoji/${playerMove}-emoji.png" class="move-icon">
            <img src="emoji/${computerMove}-emoji.png" class="move-icon">
            Computer`;

    updateScoreElement();

}

//computer choice function
function computerChoice(){

    let computerMove = ``;
    const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3){
         computerMove = `rock`;
    } else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = `paper`;
    }else{
         computerMove = `scissors`;
    }

    return computerMove;
}

// rock button selection
rockBtn.onclick = function(){playGame(`rock`);}

// paper button selection
paperBtn.onclick = function(){playGame(`paper`);}

// scissors button selection
scissorsBtn.onclick = function(){playGame(`scissors`);}

//reset button selection
resetBtn.onclick = function(){
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
}

updateScoreElement();

