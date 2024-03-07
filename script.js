const GRID_SIZE = 16; // length and width of grid
const CELL_SIZE = 50; // length and width in px of cell

const container = document.createElement('div');
container.id = 'container';

for (let i = 0; i < GRID_SIZE; i++) {
    let newRow = document.createElement('div');
    newRow.className = 'grid-row';
    for (let j = 0; j < GRID_SIZE; j++) {
        let newCell = document.createElement('div');
        newCell.className = 'grid-cell';
        newCell.style.setProperty('height', CELL_SIZE + 'px');
        newCell.style.setProperty('width', CELL_SIZE + 'px');
        newRow.appendChild(newCell);
    }
    container.appendChild(newRow);
}

document.body.appendChild(container);