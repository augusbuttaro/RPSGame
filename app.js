const userScore_span = document.getElementById('user-score')
const computerScore_span = document.getElementById('computer-score')
const scoreBoard_div = document.getElementById('score-board')
const resultMessage_p = document.getElementById('result-message')
const rock_div =document.getElementById('rock')
const paper_div =document.getElementById('paper')
const scissors_div =document.getElementById('scissors')

let userScore = 0
let computerScore = 0

function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors']
    randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function result(res, user, computer){
    
    const userChoice_div = document.getElementById(user.toLowerCase())
    
    if(res === 'win'){
        userScore ++
        resultMessage_p.innerHTML = `<span class='player'>Your</span> ${user} beats <span class='player'>Computer's</span> ${computer}, You Win! :)`
        userChoice_div.classList.add('win')
        setTimeout(()=> userChoice_div.classList.remove('win'), 300)
    } else if (res === 'loss'){
        computerScore ++
        resultMessage_p.innerHTML = `<span class='player'>Your</span> ${user} loses to <span class='player'>Computer's</span> ${computer},  You Lose! :(`
        userChoice_div.classList.add('loss')
        setTimeout(()=> userChoice_div.classList.remove('loss'), 300)
    }else {
        resultMessage_p.innerHTML = `<span class='player'>Your</span> ${user} draws to <span class='player'>Computer's</span> ${computer}, You Draw! :/`
        userChoice_div.classList.add('draw')
        setTimeout(()=> userChoice_div.classList.remove('draw'), 300)
    }
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
}


function game(userChoice){
    const computerChoice = getComputerChoice()
    switch(userChoice + computerChoice){
        case 'RockScissors':
        case 'ScissorsPaper':
        case 'PaperRock':
            result('win', userChoice, computerChoice)
            break;
        case 'ScissorsRock':
        case 'PaperScissors':
        case 'RockPaper':
            result('loss', userChoice, computerChoice)
            break;
        case 'RockRock':
        case 'ScissorsScissors':
        case 'PaperPaper':
            result('draw', userChoice, computerChoice)
            break;

    }
}

function main(){
    rock_div.addEventListener('click', function(){
        game('Rock')
    })
    
    paper_div.addEventListener('click', function(){
        game('Paper')
    })
    
    scissors_div.addEventListener('click', function(){
        game('Scissors')
    })    
}
main()