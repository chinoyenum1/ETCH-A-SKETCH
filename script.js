window.onload = () => {
    loadGrid(view.DEFAULT_SIZE);
}

let view = {
    container: document.querySelector('.container'),
    DEFAULT_SIZE: 16, //document.querySelector('#size').value,
    clear: document.querySelector('#reset'),
    gridSize: document.querySelector('.size-value'),
    inputGridSize: document.querySelector('#size')
};



view.clear.addEventListener('click', (e) => {
    let size = view.inputGridSize.value;
    clearGrid();
    loadGrid(size)
 });

view.inputGridSize.addEventListener('keydown', (e) => {
    if(e.key === 'Enter') {
        let size = view.inputGridSize.value;
        //setNewGridSize(size);
        updateGridSizeValue(size)
        reloadGrid(size)
    }
});

function updateGridSizeValue(value){
    view.gridSize.textContent = `${value} x ${value}`;
}

function reloadGrid(value) {
    clearGrid();
    loadGrid(value)
}

function clearGrid() {
    view.container.textContent = '';
}

function loadGrid(size) {
    view.container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    view.container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.addEventListener('mouseover', updateColor);
        div.addEventListener('mouseleave', updateColor);
        view.container.append(div);

    }
}

function updateColor(e) {
    if (e.type === 'mouseover' && !mouseleave) 
        return;
    else{
        const colorRed = Math.floor(Math.random() * 255);
        const colorGreen = Math.floor(Math.random() * 255);
        const colorBlue = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor =` rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
    }
    
}

