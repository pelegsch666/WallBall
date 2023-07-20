import React, { useEffect } from 'react';
import './App.css';

function App() {
  
  const [mouseX , setMouseX] = React.useState(0);
  const [divX , setDivX] = React.useState(0);
  const [divY , setDivY] = React.useState(0);

  useEffect(() => {
  
    addEventListener('mousemove', e => {
      setDivX(e.clientX);
      setDivY(e.clientY);
      if (e.clientX > 1200) {
        setDivX(1200);
        
      }

    });

  }, [divX]);

  function setBallPosition(e: React.MouseEvent<HTMLDivElement>) { 
    console.log(e.target);
  }

const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
  console.log(e.clientX);
}

  return (
    <div className="App">
      <div className="ball" 

      onClick={ e => setBallPosition(e)}
      />
      <div
        className="platform"
        onClick={handleMove}
        style={{ left: divX }}
      />
    </div>
  );
}

export default App;
