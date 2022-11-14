const container = document.querySelector('.container');
const clear = document.querySelector('.reset');
const slider = document.querySelector('#slider');
const sliderValue = document.getElementById('slider').value;
const showVal = document.querySelector('#val');

function makeRows(rows, columns) {
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', columns);
    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'gridItem';
        cell.onmouseover = function () {
            cell.classList = 'hovered';
        };
        clear.addEventListener('click', () => {
            cell.classList.remove('hovered');
        });
    };
};

clear.addEventListener('click', () => {
    makeRows(slider.value, slider.value);
});

slider.addEventListener('input', () => {
    console.log(slider.value);
});

makeRows(slider.value,slider.value);