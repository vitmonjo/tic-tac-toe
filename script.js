(function GameBoard() {
    let Xturn = true;
    let gameRunning;

    const display = document.querySelector('.display-hud');
    display.textContent = 'Type the name of the players and start the game!';

    const positions = ['', '', '',
        '', '', '',
        '', '', ''];

    updateDisplay = function (message) {
        display.textContent = message;
    }

    addListenersPos = function () {
        const positions = [...document.querySelectorAll('.pos')];
        positions.forEach((element) => {
            element.addEventListener('click', (e) => {
                if (gameRunning) makeMove(e.target);
            })
        })
    };

    (addListenerButton = function () {
        const startReset = document.querySelector('#start-reset');
        startReset.addEventListener('click', (e) => {
            clearBoard();
            addListenersPos();
            updateDisplay('Game\'s on!');
            gameRunning = true;
        })
    })();

    startResetGame = function () {
        for (let position in positions) {
            positions[position] = '';
        }
        Xturn = true;
    },

        makeMove = function (pos) {
            if (!positions[pos.id]) {
                if (Xturn) {
                    positions[pos.id] = 'X';
                    Xturn = false;
                }
                else {
                    positions[pos.id] = 'O';
                    Xturn = true;
                }
                updateBoard(pos);
            }
        }

    updateBoard = function (pos) {
        if (positions[pos.id] !== '') {
            const place = document.getElementById(`${pos.id}`)
            place.textContent = positions[pos.id];
            setTimeout(() => checkGameState(), 1);
        }
    }

    clearBoard = function () {
        const positions = [...document.querySelectorAll('.pos')];
        positions.forEach((position) => {
            position.textContent = '';
        })
        startResetGame();
    }

    checkGameState = function () {
        if ((positions[0] === 'X' && positions[1] === 'X' && positions[2] === 'X') ||
            (positions[3] === 'X' && positions[4] === 'X' && positions[5] === 'X') ||
            (positions[6] === 'X' && positions[7] === 'X' && positions[8] === 'X')) {
            endGame('X');
        }
        if ((positions[0] === 'O' && positions[1] === 'O' && positions[2] === 'O') ||
            (positions[3] === 'O' && positions[4] === 'O' && positions[5] === 'O') ||
            (positions[6] === 'O' && positions[7] === 'O' && positions[8] === 'O')) {
            endGame('O');
        }
        if ((positions[0] === 'X' && positions[3] === 'X' && positions[6] === 'X') ||
            (positions[1] === 'X' && positions[4] === 'X' && positions[7] === 'X') ||
            (positions[2] === 'X' && positions[5] === 'X' && positions[8] === 'X')) {
            endGame('X');
        }
        if ((positions[0] === 'O' && positions[3] === 'O' && positions[6] === 'O') ||
            (positions[1] === 'O' && positions[4] === 'O' && positions[7] === 'O') ||
            (positions[2] === 'O' && positions[5] === 'O' && positions[8] === 'O')) {
            endGame('O');
        }
        if ((positions[0] === 'X' && positions[4] === 'X' && positions[8] === 'X') ||
            (positions[6] === 'X' && positions[4] === 'X' && positions[2] === 'X')) {
            endGame('X');
        }
        if ((positions[0] === 'O' && positions[4] === 'O' && positions[8] === 'O') ||
            (positions[6] === 'O' && positions[4] === 'O' && positions[2] === 'O')) {
            endGame('O');
        }
    }
    getNameOfPlayer = function(winner) {
        if (winner === 'X') {
            return document.getElementById('p1').value;
        } else {
            return document.querySelector('#p2').value;
        }
    }
    endGame = function (winner) {
        display.textContent = `${getNameOfPlayer(winner)} won the game! Press Start/Reset to play again!`; 
        gameRunning = false;
    }
})();

//const GBI = new GameBoard();