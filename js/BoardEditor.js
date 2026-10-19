const UI = {
    width: document.querySelector('#width'),
    height: document.querySelector('#height'),
    board: document.querySelector('#board'),
    message: document.querySelector('#message'),
    tileOptions: document.querySelectorAll('input[name="tile"]'),
    createButton: document.querySelector('#create-board'),
    exportButton: document.querySelector('#export-board'),
};

const SYMBOLS = { 1: '#', o: 'o', 0: '0', P: 'P', G: 'G', '.': '.' };
let cells = [];
let painting = false;

function selectedTile() {
    return [...UI.tileOptions].find((option) => option.checked).value;
}

function setTile(cell, tile) {
    cell.dataset.tile = tile;
    cell.textContent = SYMBOLS[tile];
}

function paint(cell) {
    const tile = selectedTile();
    if (tile === 'P') {
        cells.flat().forEach((current) => {
            if (current.dataset.tile === 'P') setTile(current, '.');
        });
    }
    setTile(cell, tile);
}

function createBoard() {
    const width = Math.min(60, Math.max(3, parseInt(UI.width.value) || 28));
    const height = Math.min(60, Math.max(3, parseInt(UI.height.value) || 24));
    UI.board.innerHTML = '';
    cells = [];

    for (let rowIndex = 0; rowIndex < height; rowIndex++) {
        const row = [];
        const tableRow = UI.board.insertRow();
        for (let column = 0; column < width; column++) {
            const cell = tableRow.insertCell();
            setTile(cell, '.');
            row.push(cell);
        }
        cells.push(row);
    }
}

function exportBoard() {
    const rows = cells.map(
        (row) => `    '${row.map((cell) => cell.dataset.tile).join('')}',`,
    );
    const text = `const mapLayout = [\n${rows.join('\n')}\n];`;
    navigator.clipboard.writeText(text).then(
        () => {
            UI.message.textContent = 'Copied to clipboard!';
        },
        () => {
            UI.message.textContent = 'Copy failed.';
        },
    );
}

UI.createButton.addEventListener('click', createBoard);
UI.exportButton.addEventListener('click', exportBoard);
UI.board.addEventListener('mousedown', (event) => {
    const cell = event.target.closest('td');
    if (!cell) return;
    painting = true;
    paint(cell);
});
UI.board.addEventListener('mouseover', (event) => {
    const cell = event.target.closest('td');
    if (painting && cell) paint(cell);
});
document.addEventListener('mouseup', () => {
    painting = false;
});
createBoard();
