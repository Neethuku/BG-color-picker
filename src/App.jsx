import  { useState } from 'react';
import { Button } from 'react-bootstrap';

function App() {
  const [bgColor, setBgColor] = useState('black');

  const changeBgColor = (color) => {
    setBgColor(color);
  };

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: bgColor }} >
      <h2 className='p-3 text-light fw-bold text-center'>Background color Picker</h2>
      <div style={{ width: '30%', height: '100px' }} className='mx-auto  d-flex align-items-center justify-content-between'>
        <Button onClick={() => changeBgColor('DarkBlue')} variant="primary">Blue</Button>
        <Button onClick={() => changeBgColor('DarkGreen')} variant="success">Green</Button>
        <Button onClick={() => changeBgColor('DarkRed')} variant="danger">Red</Button>
        <Button onClick={() => changeBgColor('SaddleBrown')} variant="warning">Brown</Button>
        <Button onClick={() => changeBgColor('Indigo')} variant="secondary">Violet</Button>
      </div>
     
    </div>
  );
}

export default App;
