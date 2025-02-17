function startGame(theme) {
    const gridContainer = document.getElementById('wordcross');
    gridContainer.innerHTML = ''; // Clear previous grid

    const hintsContainer = document.createElement('div');
    hintsContainer.className = 'hints-container';
    const hintsList = document.createElement('ul');
    hintsList.className = 'hints-list';

    const size = 15; // Grid size (e.g., 15x15)
    const grid = Array.from({ length: size }, () => Array(size).fill(''));
    let clueNumber = 1; // Initialize clue number

    // Place words on the grid with numbered labels
    themes[theme].forEach(word => {
        const { answer, row, col, direction, hint } = word;
        const hintItem = document.createElement('li');
        hintItem.textContent = `${clueNumber}. ${hint}`;
        hintsList.appendChild(hintItem);

        const label = document.createElement('div');
        label.className = 'number-label';
        label.textContent = clueNumber;

        if (direction === 'across') {
            gridContainer.appendChild(label);
            label.style.gridRow = row + 1;
            label.style.gridColumn = col + 1;
        } else {
            gridContainer.appendChild(label);
            label.style.gridRow = row + 1;
            label.style.gridColumn = col + 1;
        }

        for (let i = 0; i < answer.length; i++) {
            const r = direction === 'down' ? row + i : row;
            const c = direction === 'across' ? col + i : col;
            grid[r][c] = answer[i];
        }

        clueNumber++; // Increment clue number
    });

    // Render grid with numbered labels
    grid.forEach((row, rIndex) => {
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';
        row.forEach((letter, cIndex) => {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.maxLength = 1;
            cell.className = 'wordcross-cell';
            if (letter) {
                cell.oninput = () => checkLetter(cell, letter);
            } else {
                cell.disabled = true;
                cell.className += ' black-square';
            }
            rowDiv.appendChild(cell);
        });
        gridContainer.appendChild(rowDiv);
    });

    hintsContainer.appendChild(hintsList);
    gridContainer.appendChild(hintsContainer);
}

function checkLetter(cell, correctLetter) {
    // Ensure only letters are allowed and convert to uppercase
    cell.value = cell.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
    if (cell.value === correctLetter) {
        cell.className = 'wordcross-cell correct';
        // Move to the next cell if correct
        let nextCell = cell.nextElementSibling;
        while (nextCell && nextCell.tagName !== 'INPUT') {
            nextCell = nextCell.nextElementSibling;
        }
        if (nextCell) {
            nextCell.focus();
        }
    } else {
        cell.className = 'wordcross-cell wrong';
    }
}
