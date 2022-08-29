const grid = document.querySelector('#grid');
const userInput = document.querySelector('#user-input');
grid.style.fontSize = '1em';
// Set pixel width and height
let wdt = '1em';
let hgt = '1em';

// Ask the user for the number of tiles for the sketch grid
function getUserInput() {
  let input = parseInt(prompt(`Please enter the grid size you'd like`));
  input <= 100 || !isNaN(input)
    ? createSketchGrid(input)
    : alert('Please enter a valid number less than or equal to 100.');
}

// Event listener to create tiles in mouseover
function setTiles(e) {
  e.target.classList.toggle('fill');
}

// Create the grid
function createSketchGrid(tiles) {
  let gridSize = tiles * tiles;
  for (let i = 0; i < gridSize; i++) {
    let tile = document.createElement('div');
    tile.style.width = wdt;
    tile.style.height = hgt;
    grid.appendChild(tile);

    tile.addEventListener('mouseover', setTiles);
  }
}

userInput.addEventListener('click', getUserInput);
