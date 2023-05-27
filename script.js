const canvas = document.querySelector('#canvas');
const pixels = document.createElement('div');
let lastCanvasSize;
const cleanButton = document.querySelector('#clean_button');
const changeSizeButton = document.querySelector('#change_size_button');

cleanButton.addEventListener('click', () => cleanCanvas());

changeSizeButton.addEventListener('click', () => {
    let input = prompt("Size? (max: 128)");
    if (input > 128) input = 128;
    lastCanvasSize = input;
    cleanCanvas();
});

function drawCanvas(canvasSize) {
    for (let i = 0; i < canvasSize * canvasSize; i++) {
        let pixel = document.createElement('div');
        pixel.style.width = 512 / canvasSize + "px";
        pixel.style.height = 512 / canvasSize + "px";
        pixel.addEventListener('mouseover', () => {
            pixel.style.backgroundColor = "black";
        });
        canvas.appendChild(pixel);
    }
    lastCanvasSize = canvasSize;
}

function cleanCanvas() {
    canvas.innerHTML = "";
    drawCanvas(lastCanvasSize);
}

drawCanvas(16);