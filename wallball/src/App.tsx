import React, { useEffect } from 'react';
import './App.css';

function App() {
  const [mouseX, setMouseX] = React.useState(0);
  const [divX, setDivX] = React.useState(0);
  const [divY, setDivY] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  useEffect(() => {
    addEventListener('mousemove', e => {
      setDivX(e.clientX);
      setDivY(e.clientY);
      if (e.clientX > 1430) {
        setDivX(1430);
      }
    });
  }, [divX, divY]);

function startGame() { 
  setIsPlaying(true);
  const ballElement =  document.querySelector('.ball')
  
  ballElement  ? ballElement : '' ;
}




  function setBallPosition(e: React.MouseEvent<HTMLDivElement>) {
    console.log(e.target);
  }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(e.clientX);
  };

  return (
    <div className="App"
   
    >
      <div
        className="ball"
        style={{ left: divX + 10, top: -10 }}
        onClick={() => startGame()}
      />
      <div
        className="platform"
        onClick={() => startGame()}
        style={{ left: divX }}
        
      />
    </div>
  );
}

export default App;
