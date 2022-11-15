// TODO add radio button to choose b&w or color

const container = document.querySelector('.container');
const clear = document.querySelector('.reset');
const slider = document.querySelector('#slider');
const sliderValue = document.getElementById('slider').value;
const showVal = document.querySelector('#val');
const themeColor = document.querySelector('input[name="scheme"]:checked').value;
const theme = document.querySelector('input[name="scheme"]:checked');

console.log(theme);

function makeRows(rows, columns) {
    container.style.setProperty('--rows', rows);
    container.style.setProperty('--cols', columns);
    for (let i = 0; i < (rows * columns); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = 'gridItem';

        // cell.onmouseover = () => {
        //     cell.classList = 'hovered';
        // };
        if (themeColor === 'black') {
            cell.onmouseover = () => {
            cell.classList = 'hovered';
        };
        }else if (themeColor === 'colorful'){
            cell.onmouseover = () => {
                cell.style.background = getRandomColor();
            };
        };



        clear.addEventListener('click', () => {
            cell.classList.remove('hovered');
            cell.style.background = "#fff";
        });
    };
};

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

clear.addEventListener('click', () => {
    makeRows(slider.value, slider.value);
});

makeRows(slider.value,slider.value);