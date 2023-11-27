import { useState } from 'react'
import './App.css'

export default function App() {
  const [canvasSize, setCanvasSize] = useState(16);
  const [pixelColors, setPixelColors] = useState(Array(canvasSize * canvasSize).fill("white"));

  function handleResize() {
    let sizeInput = prompt("Size? Max: 128")
    if (sizeInput > 128) sizeInput = 128;
    setCanvasSize(sizeInput);
    setPixelColors(Array(canvasSize * canvasSize).fill("white"));
  }

  function handleHover(index) {
    const updatedPixelColors = [...pixelColors];
    updatedPixelColors[index] = "black";
    setPixelColors(updatedPixelColors);
  }

  function handleClean() {
    setPixelColors(Array(canvasSize * canvasSize).fill("white"));
  }

  return (
    <>
      <h1>Etch a Sketch</h1>
      <div className="container">
        <div className="controls">
          <CleanButton handleClean={handleClean}/>
          <ResizeButton handleResize={handleResize}/>  
        </div>
        <Canvas canvasSize={canvasSize} pixelColors={pixelColors} handleHover={handleHover}/> 
      </div>
    </>
  );
}

function CleanButton({ handleClean }) {
  return (
    <button onClick={handleClean}>Clean</button>
  );
}

function ResizeButton({ handleResize }) {
  return (
    <button onClick={handleResize}>Change size</button>
  );
}

function Canvas({ canvasSize, pixelColors, handleHover }) {

  const pixels = drawCanvas(canvasSize, pixelColors, handleHover);

  return (
    <div className="canvas">
      {pixels}
    </div>
  );
}

function drawCanvas(canvasSize, pixelColors, handleHover) {
  const pixels = [];

  for (let i = 0; i < canvasSize * canvasSize; i++) {
    pixels.push(
    <div 
      key={i} 
      style={{
        width: 512 / canvasSize + "px", 
        height: 512 / canvasSize + "px",
        backgroundColor: pixelColors[i]
      }}
      className='pixel'
      onMouseOver={() => handleHover(i)}
    >
    </div>
    );
  }

  return pixels;
}