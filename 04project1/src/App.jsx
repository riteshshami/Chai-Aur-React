import React from 'react'
import { useState } from 'react'

function App() {
  const [color, setColor] = useState('olive');

  return (
    <div 
    className='bg-black w-full h-screen text-white'
    style={{backgroundColor: color}}
    >
    <div className='bg-white items-center py-2 flex flex-row gap-2 rounded-md w-full text-black'>
      <button 
      onClick={() => setColor('red')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor: "red"}}
      >
      Red
      </button>
      <button 
      onClick={() => setColor('blue')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor: "blue"}}
      >
      Blue
      </button>
      <button 
      onClick={() => setColor('green')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor: "green"}}
      >
      Green
      </button>
      <button 
      onClick={() => setColor('yellow')}
      className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
      style={{backgroundColor: "yellow"}}
      >
      Yellow
      </button>
    </div>      
    </div>
  )
}

export default App
