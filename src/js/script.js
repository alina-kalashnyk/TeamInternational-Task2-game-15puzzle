let currentCellsValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
let winCombination1 = '123456789101112131415';
let winCombination2 = '159132610143711154812';

function fillGrid() {
    for (let value = 0; value < currentCellsValues.length; value++) {
        let id = value.toString();
        document.getElementById(id).innerHTML = currentCellsValues[value];
    }
}

function shuffle() {
    for (let i = currentCellsValues.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [currentCellsValues[i], currentCellsValues[j]] = [currentCellsValues[j], currentCellsValues[i]];
    }
    return fillGrid(currentCellsValues);
}

function moveNumber(e) {
    let indexOfEmptyCell = currentCellsValues.indexOf('');
    let indexOfMovingCell = parseInt(e.target.id);
    let move = function () {
        [currentCellsValues[indexOfEmptyCell], currentCellsValues[indexOfMovingCell]] =
            [currentCellsValues[indexOfMovingCell], currentCellsValues[indexOfEmptyCell]];

        document.getElementById(indexOfMovingCell.toString()).innerHTML = currentCellsValues[indexOfMovingCell];
        document.getElementById(indexOfEmptyCell.toString()).innerHTML = currentCellsValues[indexOfEmptyCell];
        checkWin(currentCellsValues);

        indexOfEmptyCell = indexOfMovingCell;
    }

    if (indexOfMovingCell === (indexOfEmptyCell - 1)) {
        move();
    } else if (indexOfMovingCell === (indexOfEmptyCell + 1)) {
        move();

    } else if (indexOfMovingCell === (indexOfEmptyCell - 4)) {
        move();

    } else if (indexOfMovingCell === (indexOfEmptyCell + 4)) {
        move();
    }
}


function checkWin(currentCellsValues) {
    if (currentCellsValues.filter(element => element !== '').join('') === winCombination1
        || currentCellsValues.filter(element => element !== '').join('') === winCombination2) {
        alert('You are the Winner');
    }
}

window.addEventListener("load", fillGrid);
window.addEventListener('click', moveNumber);