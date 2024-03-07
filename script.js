const MAX_WIDTH = 960.0; // maximum grid width in px

function randomRGBValue() {
    return Math.floor(Math.random() * 256);
}

function changeBgColor(event) {
    event.target.style.setProperty('background-color', `rgb(
        ${randomRGBValue()},
        ${randomRGBValue()},
        ${randomRGBValue()}
    )`);
    event.target.removeEventListener('mouseover', changeBgColor);
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

