const container = document.querySelector('#container');
const body = document.querySelector('body');

//creates an x by x grid based on given gridsize
function createGrid(gridsize) {
    for (i = 0; i < gridsize * gridsize; i++) {
        let cell = document.createElement('div');
        cell.classList.add("block");
        container.appendChild(cell);
        addMouseoverEvent(cell);
    }
    container.style.setProperty('--grid-rows', gridsize);
    container.style.setProperty('--grid-cols', gridsize);
}

const resetButton = document.getElementById('btn');
resetButton.addEventListener('click', () => {
    resetGrid();
    deleteGrid();
    makeNewGrid();
});

const modeBtn = document.getElementById('modeBtn');
modeBtn.addEventListener('click', () => {
    changeMode();
});

//dyes blocks on mouseover
function addMouseoverEvent(block) { 
    block.addEventListener("mouseover", function (e) {
        e.target.style.background = getRndColor();
})};

function resetGrid(e) {
    const squares = Array.from(document.getElementsByClassName("block"));
    squares.forEach((div) => {
        div.style.background = "white";
    })};

function getRndColor() {
    return 'hsla(' + (Math.random() * 360) + ', 100%, 70%, 1)';
}

function getNewSize() {
    let newSize = prompt("Enter a new gridsize for your sketchpad");
    return newSize;
}

function deleteGrid() {
    document.querySelectorAll('.block').forEach(function (e) {
        document.getElementById('container').removeChild(e);
    }
)};

function makeNewGrid(size) {
    size = getNewSize();
    createGrid(size);
}

function DarkMode() {
    body.style.setProperty('background-color', '#262626');
    resetButton.style.setProperty('background-color', '#d9d9d9');
    resetButton.style.setProperty('color', 'black');
    modeBtn.style.setProperty('background-color', '#d9d9d9');
    modeBtn.style.setProperty('color', 'black');
    document.querySelector('h1').style.setProperty('color', '#d9d9d9');
    };

function LightMode() {
    body.style.setProperty('background-color', '#b3daff');
    resetButton.style.setProperty('background-color', '#f1c40f');
    modeBtn.style.setProperty('background-color', '#f1c40f');
    document.querySelector('h1').style.setProperty('color', 'black');
}

function changeMode(){
    if (getMode() === true) {
        DarkMode();
    } else if (getMode() === false) {
        LightMode();
    }
}

function getMode() {
    const style = getComputedStyle(body);
    if (style.backgroundColor === 'rgb(179, 218, 255)') {
        return true;
    } else {
        return false;
    }
}

createGrid(16);

