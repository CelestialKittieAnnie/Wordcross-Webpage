// script.js

const themes = {
    movies: [
        { answer: 'STARWARS', row: 0, col: 0, direction: 'across', hint: 'A space-themed film saga.' },
        { answer: 'TITANIC', row: 2, col: 0, direction: 'across', hint: 'A famous shipwreck story.' },
        { answer: 'AVATAR', row: 4, col: 0, direction: 'across', hint: 'James Cameron's sci-fi epic.' },
        { answer: 'INCEPTION', row: 6, col: 0, direction: 'across', hint: 'A film about dreams within dreams.' },
        { answer: 'GLADIATOR', row: 8, col: 0, direction: 'across', hint: 'Russell Crowe's famous role.' }
    ],
    treats: [
        { answer: 'CANDY', row: 0, col: 0, direction: 'across', hint: 'A sweet treat.' },
        { answer: 'CHOCOLATE', row: 2, col: 0, direction: 'across', hint: 'A rich, sweet confection.' },
        { answer: 'ICECREAM', row: 4, col: 0, direction: 'across', hint: 'A frozen dairy dessert.' },
        { answer: 'CAKE', row: 6, col: 0, direction: 'across', hint: 'A baked dessert often for celebrations.' },
        { answer: 'COOKIE', row: 8, col: 0, direction: 'across', hint: 'A small, sweet baked treat.' }
    ],
    halloween: [
        { answer: 'GHOST', row: 0, col: 0, direction: 'across', hint: 'A spooky apparition.' },
        { answer: 'PUMPKIN', row: 2, col: 0, direction: 'across', hint: 'A Halloween decoration.' },
        { answer: 'WITCH', row: 4, col: 0, direction: 'across', hint: 'A person with magical powers.' },
        { answer: 'SPIDER', row: 6, col: 0, direction: 'across', hint: 'A creepy, crawly arachnid.' },
        { answer: 'ZOMBIE', row: 8, col: 0, direction: 'across', hint: 'An undead creature.' }
    ],
    animals: [
        { answer: 'TIGER', row: 0, col: 0, direction: 'across', hint: 'A large wild cat with stripes.' },
        { answer: 'ELEPHANT', row: 2, col: 0, direction: 'across', hint: 'A large mammal with a trunk.' },
        { answer: 'LION', row: 4, col: 0, direction: 'across', hint: 'The king of the jungle.' },
        { answer: 'PANDA', row: 6, col: 0, direction: 'across', hint: 'A bear that loves bamboo.' },
        { answer: 'GIRAFFE', row: 8, col: 0, direction: 'across', hint: 'A tall animal with a long neck.' }
    ],
    fruits: [
        { answer: 'APPLE', row: 0, col: 0, direction: 'across', hint: 'Keeps the doctor away.' },
        { answer: 'BANANA', row: 2, col: 0, direction: 'across', hint: 'A long yellow fruit.' },
        { answer: 'ORANGE', row: 4, col: 0, direction: 'across', hint: 'A citrus fruit.' },
        { answer: 'GRAPE', row: 6, col: 0, direction: 'across', hint: 'Small, sweet, and often purple.' },
        { answer: 'STRAWBERRY', row: 8, col: 0, direction: 'across', hint: 'A red fruit with seeds on the outside.' }
    ],
    sports: [
        { answer: 'SOCCER', row: 0, col: 0, direction: 'across', hint: 'A popular sport worldwide.' },
        { answer: 'BASKETBALL', row: 2, col: 0, direction: 'across', hint: 'A sport played with a hoop.' },
        { answer: 'BASEBALL', row: 4, col: 0, direction: 'across', hint: 'A sport with a bat and ball.' },
        { answer: 'TENNIS', row: 6, col: 0, direction: 'across', hint: 'A sport played with rackets.' },
        { answer: 'HOCKEY', row: 8, col: 0, direction: 'across', hint: 'A sport played on ice.' }
    ],
    countries: [
        { answer: 'FRANCE', row: 0, col: 0, direction: 'across', hint: 'A European country known for its wine.' },
        { answer: 'JAPAN', row: 2, col: 0, direction: 'across', hint: 'An island nation in Asia.' },
        { answer: 'BRAZIL', row: 4, col: 0, direction: 'across', hint: 'A country known for its Amazon rainforest.' },
        { answer: 'CANADA', row: 6, col: 0, direction: 'across', hint: 'A large country north of the USA.' },
        { answer: 'AUSTRALIA', row: 8, col: 0, direction: 'across', hint: 'A country and continent down under.' }
    ],
    space: [
        { answer: 'SATURN', row: 0, col: 0, direction: 'across', hint: 'A planet with rings.' },
        { answer: 'MARS', row: 2, col: 0, direction: 'across', hint: 'The red planet.' },
        { answer: 'EARTH', row: 4, col: 0, direction: 'across', hint: 'Our home planet.' },
        { answer: 'JUPITER', row: 6, col: 0, direction: 'across', hint: 'The largest planet in our solar system.' },
        { answer: 'VENUS', row: 8, col: 0, direction: 'across', hint: 'The second planet from the sun.' }
    ],
    vehicles: [
        { answer: 'CAR', row: 0, col: 0, direction: 'across', hint: 'A common mode of transport.' },
        { answer: 'AIRPLANE', row: 2, col: 0, direction: 'across', hint: 'A vehicle that flies.' },
        { answer: 'BICYCLE', row: 4, col: 0, direction: 'across', hint: 'A two-wheeled vehicle powered by pedaling.' },
        { answer: 'MOTORCYCLE', row: 6, col: 0, direction: 'across', hint: 'A motorized two-wheeler.' },
        { answer: 'TRUCK', row: 8, col: 0, direction: 'across', hint: 'A large vehicle used for transporting goods.' }
    ],
    musicalInstruments: [
        { answer: 'PIANO', row: 0, col: 0, direction: 'across', hint: 'A large keyboard instrument.' },
        { answer: 'GUITAR', row: 2, col: 0, direction: 'across', hint: 'A stringed instrument often used in rock music.' },
        { answer: 'VIOLIN', row: 4, col: 0, direction: 'across', hint: 'A small stringed instrument played with a bow.' },
        { answer: 'DRUMS', row: 6, col: 0, direction: 'across', hint: 'A percussion instrument.' },
        { answer: 'FLUTE', row: 8, col: 0, direction: 'across', hint: 'A woodwind instrument.' }
    ],
    colors: [
        { answer: 'RED', row: 0, col: 0, direction: 'across', hint: 'The color of an apple.' },
        { answer: 'BLUE', row: 2, col: 0, direction: 'across', hint: 'The color of the sky.' },
        { answer: 'GREEN', row: 4, col: 0, direction: 'across', hint: 'The color of grass.' },
        { answer: 'YELLOW', row: 6, col: 0, direction: 'across', hint: 'The color of a banana.' },
        { answer: 'PURPLE', row: 8, col: 0, direction: 'across', hint: 'The color of a grape.' }
    ],
    holidays: [
        { answer: 'CHRISTMAS', row: 0, col: 0, direction: 'across', hint: 'Celebrated on December 25.' },
        { answer: 'EASTER', row: 2, col: 0, direction: 'across', hint: 'A spring holiday with eggs.' },
        { answer: 'HALLOWEEN', row: 4, col: 0, direction: 'across', hint: 'A spooky holiday in October.' },
        { answer: 'THANKSGIVING', row: 6, col: 0, direction: 'across', hint: 'A holiday for giving thanks.' },
        { answer: 'NEWYEAR', row: 8, col: 0, direction: 'across', hint: 'Celebrated on January 1.' }
    ],
    flowers: [
        { answer: 'ROSE', row: 0, col: 0, direction: 'across', hint: 'A symbol of love.' },
        { answer: 'TULIP', row: 2, col: 0, direction: 'across', hint: 'A spring bulb flower.' },
        { answer: 'SUNFLOWER', row: 4, col: 0, direction: 'across', hint: 'A tall flower that follows the sun.' },
        { answer: 'DAISY', row: 6, col: 0, direction: 'across', hint: 'A small white flower.' },
        { answer: 'LILY', row: 8, col: 0, direction: 'across', hint: 'An elegant white flower.' }
    ],
    jobs: [
        { answer: 'DOCTOR', row: 0, col: 0, direction: 'across', hint: 'A medical professional.' },
        { answer: 'TEACHER', row: 2, col: 0, direction: 'across', hint: 'An educator.' },
        { answer: 'ENGINEER', row: 4, col: 0, direction: 'across', hint: 'A professional in technology.' },
        { answer: 'ARCHITECT', row: 6, col: 0, direction: 'across', hint: 'A designer of buildings.' },
        { answer: 'NURSE', row: 8, col: 0, direction: 'across', hint: 'A healthcare provider.' }
    ],
    famousPeople: [
        { answer: 'EINSTEIN', row: 0, col: 0, direction: 'across', hint: 'Theory of relativity.' },
        { answer: 'BEETHOVEN', row: 2, col: 0, direction: 'across', hint: 'Composer of the Fifth Symphony.' },
        { answer: 'SHAKESPEARE', row: 4, col: 0, direction: 'across', hint: 'Wrote Hamlet and Romeo and Juliet.' },
        { answer: 'CURIE', row: 6, col: 0, direction: 'across', hint: 'Pioneer in radioactivity research.' },
        { answer: 'NEWTON', row: 8, col: 0, direction: 'across', hint: 'Laws of motion.' }
    ],
    literature: [
        { answer: 'HAMLET', row: 0, col: 0, direction: 'across', hint: 'A Shakespearean tragedy.' },
        { answer: 'DONQUIXOTE', row: 2, col: 0, direction: 'across', hint: 'A novel by Cervantes.' },
        { answer: 'MOBYDICK', row: 4, col: 0, direction: 'across', hint: 'A novel about a great white whale.' },
        { answer: 'ILIAD', row: 6, col: 0, direction: 'across', hint: 'An epic poem by Homer.' },
        { answer: 'ODYSSEY', row: 8, col: 0, direction: 'across', hint: 'A sequel to the Iliad.' }
    ],
    music: [
        { answer: 'ROCK', row: 0, col: 0, direction: 'across', hint: 'A genre with electric guitars.' },
        { answer: 'JAZZ', row: 2, col: 0, direction: 'across', hint: 'A genre with improvisation.' },
        { answer: 'CLASSICAL', row: 4, col: 0, direction: 'across', hint: 'A genre with orchestras.' },
        { answer: 'POP', row: 6, col: 0, direction: 'across', hint: 'A genre with catchy melodies.' },
        { answer: 'HIPHOP', row: 8, col: 0, direction: 'across', hint: 'A genre with rap.' }
    ],
    science: [
        { answer: 'GRAVITY', row: 0, col: 0, direction: 'across', hint: 'A force that pulls objects toward Earth.' },
        { answer: 'ATOM', row: 2, col: 0, direction: 'across', hint: 'The basic unit of matter.' },
        { answer: 'ELECTRON', row: 4, col: 0, direction: 'across', hint: 'A negatively charged particle.' },
        { answer: 'DNA', row: 6, col: 0, direction: 'across', hint: 'The molecule that carries genetic information.' },
        { answer: 'CELL', row: 8, col: 0, direction: 'across', hint: 'The basic structural unit of organisms.' }
    ],
    technology: [
        { answer: 'COMPUTER', row: 0, col: 0, direction: 'across', hint: 'A device for processing data.' },
        { answer: 'INTERNET', row: 2, col: 0, direction: 'across', hint: 'A global network of networks.' },
        { answer: 'ROBOT', row: 4, col: 0, direction: 'across', hint: 'A machine capable of carrying out complex actions.' },
        { answer: 'AI', row: 6, col: 0, direction: 'across', hint: 'Artificial intelligence.' },
        { answer: 'SOFTWARE', row: 8, col: 0, direction: 'across', hint: 'Programs and other operating information used by a computer.' }
    ],
    mythology: [
        { answer: 'ZEUS', row: 0, col: 0, direction: 'across', hint: 'The king of the Greek gods.' },
        { answer: 'ATHENA', row: 2, col: 0, direction: 'across', hint: 'The Greek goddess of wisdom.' },
        { answer: 'THOR', row: 4, col: 0, direction: 'across', hint: 'The Norse god of thunder.' },
        { answer: 'ODIN', row: 6, col: 0, direction: 'across', hint: 'The chief god in Norse mythology.' },
        { answer: 'HERCULES', row: 8, col: 0, direction: 'across', hint: 'A Greek hero known for his strength.' }
    ]
};

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
