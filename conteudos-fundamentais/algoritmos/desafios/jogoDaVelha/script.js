const cellElements = document.querySelectorAll("[data-cell]")
const board = document.querySelector('[data-board]')
const winnerMsgTextElement = document.querySelector("[data-winning-Msg-text]")
const winnerMsg = document.querySelector('[data-winner-Msg]')
const restartButton = document.querySelector('[data-restart-button]')

let isCircleTurn;

const winnerCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const startGame = () => {
    isCircleTurn = false

    for (const cell of cellElements) {
        cell.classList.remove('x')
        cell.classList.remove('circle')
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, { once: true })
    }

    setBoardHoverClass()
    winnerMsg.classList.remove('show-winning-Msg')
}

const endGame = (isDraw) => {
    if (isDraw) {
        winnerMsgTextElement.innerText = 'Empate!'
    } else {
        winnerMsgTextElement.innerText = isCircleTurn ? 'O Venceu!' : 'X Venceu!'
    }

    winnerMsg.classList.add("show-winning-Msg")
}

const checkForWin = (currentPlayer) => {
    return winnerCombinations.some((combination) => {
        return combination.every((index) => {
            return cellElements[index].classList.contains(currentPlayer)
        })
    })
}

const checkForDraw = () => {
    return [...cellElements].every(cell => {
       return cell.classList.contains('x') || cell.classList.contains('circle')
    })
}

const placeMark = (cell, classToAdd) => {
    cell.classList.add(classToAdd)
}

const setBoardHoverClass = () => {
    board.classList.remove('x')
    board.classList.remove('circle')

    if (isCircleTurn) {
        board.classList.add('circle')
    } else {
        board.classList.add('x')
    }
}

const swapTurns = () => {
    isCircleTurn = !isCircleTurn
    setBoardHoverClass()
}

const handleClick = (e) => {
    // Colocar a marca (X ou Circulo)
    const cell = e.target;
    const classToAdd = isCircleTurn ? 'circle' : 'x';

    placeMark(cell, classToAdd)

    // Verificar por Vitoria
    const isWin = checkForWin(classToAdd)

    // Verificar por Empate
    const isDraw = checkForDraw()
    if (isWin) {
        endGame(false)
    } else if (isDraw) {
        endGame(true)
    } else {
        // Mudar o Simbolo
        swapTurns()
    }

}

startGame()
restartButton.addEventListener('click', startGame)