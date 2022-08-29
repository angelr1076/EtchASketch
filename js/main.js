const grid = document.querySelector('#grid');
let size = 32;
let wdt = '1em';
let hgt = '1em';

for (let i = 0; i < 32; i++) {
  let div = document.createElement('div');
  div.classList.add('tile');
  div.style.width = wdt;
  div.style.height = hgt;
  grid.appendChild(div);
}
