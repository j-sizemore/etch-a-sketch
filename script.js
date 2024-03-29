const MAX_WIDTH = 960.0; // maximum grid width in px
const DARKEN_RATIO = 0.9;

function randomRGBValue() {
    return Math.floor(Math.random() * 256);
}

function changeBgColor(event) {
    let cell = event.target;
    let currentRGB = cell.style.backgroundColor
    if (!currentRGB) {
        cell.style.setProperty('background-color', `rgb(
            ${randomRGBValue()},
            ${randomRGBValue()},
            ${randomRGBValue()}
        )`);
    } else {
        // save rgb values to array using regex
        let colorValueArray = currentRGB.match(/\d+/g);

        // darken each cell
        colorValueArray = colorValueArray.map((color) => {
            return Math.floor(color * DARKEN_RATIO);
        });

        cell.style.setProperty('background-color', `rgb(
            ${colorValueArray[0]},
            ${colorValueArray[1]},
            ${colorValueArray[2]}
        )`);
    }

    if (currentRGB == 'rgb(0, 0, 0)') {
        event.target.removeEventListener('mouseover', changeBgColor)
    };
}

function generateNewGrid(gridSize) {
    const container = document.createElement('div');
    container.id = 'container';

    let cellSize = MAX_WIDTH / gridSize; // length and width in px of cell
    
    for (let i = 0; i < gridSize; i++) {
        let newRow = document.createElement('div');
        newRow.className = 'grid-row';
        for (let j = 0; j < gridSize; j++) {
            let newCell = document.createElement('div');
            newCell.className = 'grid-cell';
            newCell.style.setProperty('height', cellSize + 'px');
            newCell.style.setProperty('width', cellSize + 'px');
            newRow.appendChild(newCell);
        }
        container.appendChild(newRow);
    }
    
    document.body.appendChild(container);
    
    const cells = document.querySelectorAll('.grid-cell');    
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', changeBgColor);
    });
}

generateNewGrid(16);

const newGridButton = document.querySelector('#new-grid-button');
newGridButton.addEventListener('click', (event) => {
    let userGridSize = 101;
    while(userGridSize > 100 || userGridSize < 1) {
        let userInput = parseInt(prompt("Enter grid size (max 100):"));
        if (!isNaN(userInput)) {
            userGridSize = userInput;
        }
    }

    // remove current grid
    document.body.removeChild(document.querySelector('#container'));

    generateNewGrid(userGridSize);
});

