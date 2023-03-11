let player1 = ""
let player2 = ""
let score1 = 0
let score2 = 0
let option1 = 0
let option2 = 0
let selection = 0
let gameOn = ''

alert("Welcome to Rock, paper, scissors.")

player1 = prompt("Player 1 name: ")
player2 = prompt("Player 2 name: ")

do {
    selection = parseInt(prompt(`${player1} choose your option and don\'t let ${player2} see it: \n1. Rock\n2. Paper \n3. Scissors`))

    while (isNaN(selection) || selection == 0 || selection > 3) {
        selection = parseInt(prompt(`That was not a valid option! Please enter a number between 1-3. \n${player1} choose your option and don\'t let ${player2} see it: \n1. Rock\n2. Paper \n3. Scissors`))
    }

    switch (selection) {
        case 1:
            option1 = "Rock"
            break

        case 2:
            option1 = "Paper"
            break

        case 3:
            option1 = "Scissors"
            break
    }

    selection = parseInt(prompt(`${player1} choose your option and don\'t let ${player2} see it: \n1. Rock\n2. Paper \n3. Scissors`))

    while (isNaN(selection) || selection == 0 || selection > 3) {
        selection = parseInt(prompt(`That was not a valid option! Please enter a number between 1-3. \n${player1} choose your option and don\'t let ${player2} see it: \n1. Rock\n2. Paper \n3. Scissors`))
    }

    switch (selection) {
        case 1:
            option2 = "Rock"
            break

        case 2:
            option2 = "Paper"
            break

        case 3:
            option2 = "Scissors"
            break
    }

    if (option1 === "Rock") {

        if (option2 === "Rock") {
            alert("Draw")
        }
        else if (option2 === "Paper") {
            alert(`${player2} wins.`)
            score2++
        }
        else if (option2 === "Scissors") {
            alert(`${player1} wins.`)
            score1++
        }
    }

    if (option1 === "Paper") {

        if (option2 === "Rock") {
            alert(`${player1} wins.`)
            score1++
        }
        else if (option2 === "Paper") {
            alert("Draw")
        }
        else if (option2 === "Scissors") {
            alert(`${player2} wins.`)
            score2++
        }
    }

    if (option1 === "Scissors") {

        if (option2 === "Rock") {
            alert(`${player2} wins.`)
            score2++
        }
        else if (option2 === "Paper") {
            alert(`${player1} wins.`)
            score1++
        }
        else if (option2 === "Scissors") {
            alert("Draw")
        }
    }

    selection = parseInt(prompt(`${player1}: ${score1}\n${player2}: ${score2}\n\nDo you want to play again?:\n1. Yes \n2. No`))
    while (selection != 1 && selection != 2) {
        selection = parseInt(prompt(`Please enter a valid option. \n${player1}: ${score1}\nPlayer 2: ${player2}\n\nDo you want to play again?:\n1. Yes \n2. No`))
    }

    if (selection == 1) {
        gameOn = true
    }
    else {
        alert(`GAME OVER! \n${player1}: ${score1}\n${player2}: ${score2}`)
        gameOn = false
    }
}
while(gameOn);
