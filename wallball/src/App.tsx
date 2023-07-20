import React, { useEffect } from 'react';
import './App.css';

function App() {
  const [mouseX, setMouseX] = React.useState(0);
  const [divX, setDivX] = React.useState(0);
  const [divY, setDivY] = React.useState(0);
  const [top, setTop] = React.useState(-10);
  const [left, setLeft] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  useEffect(() => {
    addEventListener('mousemove', e => {
      setDivX(e.clientX);
      setDivY(e.clientY);
      if (e.clientX > 1430) {
        setDivX(1430);
      }
      setLeft(e.clientX  + 10)
    });
  }, []);

function startGame() { 
  setIsPlaying(true);
   setInterval(ballMove, 1000);
   console.log(top, left);
  function ballMove() {
  setTop(perv => perv - 10)
  setLeft(perv => perv  + 5)
}
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
        style={{ left:  left, top: top }}
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
