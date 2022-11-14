const container = document.querySelector('.container');
const clear = document.querySelector('.reset');

// function reset(e) {
//     e.classList.remove = 'hovered';
// }


function makeRows(rows, columns) {
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', columns);
    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement('div');
        // cell.textContent = (i + 1);
        container.appendChild(cell).className = 'gridItem';
        cell.onmouseover = function () {
            cell.classList = 'hovered';
        };
        clear.addEventListener('click', () => {
            cell.classList.remove('hovered');
        });
    };
};

// clear.addEventListener('click', reset);

makeRows(16,16);