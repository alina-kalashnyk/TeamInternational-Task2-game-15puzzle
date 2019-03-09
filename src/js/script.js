let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, ''];
let indexOfVoid = 15;
let winCombination1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let winCombination2 = [1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12];

function shuffle() {
    let mySet = new Set();

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        rand = Math.floor(rand);
        return rand;
    }

    while (mySet.size < 15) {
        mySet.add(randomInteger(1, 15));
    }
    arr = Array.from(mySet);
    arr.push('');
    fillGrid();
}

function moveNumber(e) {
    let position = parseInt(e.target.id);

    function move() {
        [arr[indexOfVoid], arr[position]] = [arr[position], arr[indexOfVoid]];
        indexOfVoid = position;
        fillGrid();
    }

    if (position === (indexOfVoid - 1)) {
        move();
    } else if (position === (indexOfVoid + 1)) {
        move();

    } else if (position === (indexOfVoid - 4)) {
        move();

    } else if (position === (indexOfVoid + 4)) {
        move();
    }

    checkWin(arr);
}

function fillGrid() {
    for (let num = 0; num < 16; num++) {
        let n = num.toString();
        document.getElementById(n).innerHTML = arr[num];
    }
}

function checkWin(arr) {

    if (JSON.stringify(arr.filter(element => element !== '')) === JSON.stringify(winCombination1)
        || JSON.stringify(arr.filter(element => element !== '')) === JSON.stringify(winCombination2)) {
        alert('You are the Winner');
    }
}

window.onload = fillGrid;
window.addEventListener('click', moveNumber);