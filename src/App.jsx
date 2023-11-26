import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <>
      <h1>Etch a Sketch</h1>
      <div className="container">
        <div className="controls">
          <button>Clean</button>
          <button>Change size</button>
        </div>
        <div className="canvas" />
      </div>
    </>
  )
}