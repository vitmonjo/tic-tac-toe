
const gameBoard = (() => {
    const gameBoard = ['-', '-', '-',
        '-', '-', '-',
        '-', '-', '-'];
    let i = 2;
    const makePlay = (pos) => {
        if (gameBoard[pos] === '-') {
            if (i % 2 === 0) {
                gameBoard[pos] = 1;
                addXMarker(pos);
            } else {
                gameBoard[pos] = 5;
                addOMarker(pos);
            }
            i++;
            checkGameState();
            console.log(i);
        }
    };
    const reset = () => {
        for (let i = 0; i < 9; i++) {
            gameBoard[i] = '-';
            document.getElementById(`${i}`).textContent = '';
        }
        i = 2;
    };
    const checkGameState = () => {
        let p1Name = document.getElementById('player1-name').value || 'Player 1';
        let p2Name = document.getElementById('player2-name').value || 'Player 2';
        // Horizontal
        if ((gameBoard[0] + gameBoard[1] + gameBoard[2]) === 3) {
            alert(`${p1Name} won!`);
            reset();
        } else if ((gameBoard[0] + gameBoard[1] + gameBoard[2]) === 15) {
            alert(`${p2Name} won!`);
            reset();
        }
        if ((gameBoard[3] + gameBoard[4] + gameBoard[5]) === 3) {
            alert(`${p1Name} won!`);
            reset();
        } else if ((gameBoard[3] + gameBoard[4] + gameBoard[5]) === 15) {
            alert(`${p2Name} won!`);
            reset();
        }
        if ((gameBoard[6] + gameBoard[7] + gameBoard[8]) === 3) {
            alert(`${p1Name} won!`);
            reset();
        } else if ((gameBoard[6] + gameBoard[7] + gameBoard[8]) === 15) {
            alert(`${p2Name} won!`)
            reset();
        }
        // Vertical
        if ((gameBoard[0] + gameBoard[3] + gameBoard[6]) === 3) {
            alert(`${p1Name} won!`);
            reset();
        } else if ((gameBoard[0] + gameBoard[3] + gameBoard[6]) === 15) {
            alert(`${p2Name} won!`);
            reset();
        }
        if ((gameBoard[1] + gameBoard[4] + gameBoard[7]) === 3) {
            alert(`${p1Name} won!`);
            reset();
        } else if ((gameBoard[1] + gameBoard[4] + gameBoard[7]) === 15) {
            alert(`${p2Name} won!`);
            reset();
        }
        if ((gameBoard[2] + gameBoard[5] + gameBoard[8]) === 3) {
            alert(`${p1Name} won!`);
            reset();
        } else if ((gameBoard[2] + gameBoard[5] + gameBoard[8]) === 15) {
            alert(`${p2Name} won!`);
            reset();
        }
        // Diagonal
        if ((gameBoard[0] + gameBoard[4] + gameBoard[8]) === 3) {
            alert(`${p1Name} won!`);
            reset();
        } else if ((gameBoard[0] + gameBoard[4] + gameBoard[8]) === 15) {
            alert(`${p2Name} won!`);
            reset();
        }
        if ((gameBoard[2] + gameBoard[4] + gameBoard[6]) === 3) {
            alert(`${p1Name} won!`);
            reset();
        } else if ((gameBoard[2] + gameBoard[4] + gameBoard[6]) === 15) {
            alert(`${p2Name} won!`);
            reset();
        }
        checkTie();
    };
    const checkTie = () => {
        if (i === 11) {
            alert('It\'s a tie!')
            reset();
        }
    }
    const addXMarker = (pos) => {
        document.getElementById(`${pos}`).textContent = 'X';
    }
    const addOMarker = (pos) => {
        document.getElementById(`${pos}`).textContent = 'O';
    }
    return {
        makePlay,
        reset
    }
}
)();

document.addEventListener('click', function (event) {
    gameBoard.makePlay(event.target.id);
    if (event.target.id === 'restart') {
        gameBoard.reset();
    }
})
