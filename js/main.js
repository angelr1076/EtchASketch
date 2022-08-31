let input = document.querySelector('.input');
let cursorStatus = document.querySelector('.cursor-status');
let black = document.querySelector('.black');
let random = document.querySelector('.random');
let erase = document.querySelector('.erase');
let clear = document.querySelector('.clear');
let penDown = true;
let color = '#000'; // default to black
let screenColor = '#d3d3d3';

function renderBoard(size) {
  let screen = document.querySelector('.screen');
  screen.style.backgroundColor = screenColor;
  let tiles = screen.querySelectorAll('div');
  // Remove tiles before rerendering
  tiles.forEach(tile => tile.remove());
  // Set screen size evenly
  screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  screen.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  screen.style.gridGap = '1px';

  let screenSize = size * size;

  for (let i = 0; i < screenSize; i++) {
    let pixel = document.createElement('div');
    screen.appendChild(pixel);
    pixel.addEventListener('mouseover', drawOnCanvas);
  }
}
renderBoard(input.value);

function changeSize(entry) {
  entry = this.value;
  if (entry >= 4 && entry < 101) {
    renderBoard(entry);
  } else {
    alert('Please enter a value > 3 or < 101');
    input.value = '';
  }
}

function drawOnCanvas() {
  if (penDown) {
    this.style.backgroundColor = color;
  }
}

function selectColor() {
  color = this.value;
  if (color === 'random') {
    color !== screenColor && color !== '#fff';
    color =
      '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  }
  return color;
}

function clearBoard() {
  let screen = document.querySelector('.screen');
  let tiles = screen.querySelectorAll('div');
  tiles.forEach(tile => tile.remove());
  renderBoard(input.value);
}

input.addEventListener('change', changeSize);
black.addEventListener('click', selectColor);
random.addEventListener('click', selectColor);
erase.addEventListener('click', selectColor);
clear.addEventListener('click', clearBoard);

document.querySelector('body').addEventListener('click', e => {
  penDown = !penDown;
  console.log(e.target.tagName);
  if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'INPUT') {
    if (penDown) {
      cursorStatus.style.color = '#fff'; // Blue
      cursorStatus.textContent = 'Pen: Active';
    } else {
      cursorStatus.style.color = '#000'; // Red
      cursorStatus.textContent = 'Pen: Inactive';
    }
  }
});
