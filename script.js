let userScore = 0
let computerScore = 0
const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result > p")
const rock_div = document.getElementById("r")
const paper_div = document.getElementById("p")
const scissors_div = document.getElementById("s")

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function win (userChoice, computerChoice) {
    userScore++
    userScore_span.textContent = userScore
    result_div.innerHTML = userChoice + ' beats ' + computerChoice + '. You win!' 
}

function lose (userChoice, computerChoice) {
    computerScore++
    computerScore_span.textContent = computerScore
    result_div.innerHTML = computerChoice + ' beats ' + userChoice + '. You lose.'}

function draw () {
    console.log('draw')
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "scissorspaper":
        case "paperrock":
        case "rockscissors":
            win (userChoice, computerChoice)
            break;
        case "paperscissors":
        case "rockpaper":
        case "scissorsrock":
            lose (userChoice, computerChoice)
            break;
        case "paperpaper":
        case "rockrrock":
        case "scissorsscissors":
            draw (userChoice, computerChoice)
            break;
    }

}

function main () {
    rock_div.addEventListener("click", function() {
        game("rock")
    })

    paper_div.addEventListener("click", function() {
        game("paper")
    })

    scissors_div.addEventListener("click", function() {
        game("scissors")
    })
}
main () 