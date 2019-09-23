import React from 'react';
import Car from './Car';

const MyCars = () => (
  <div>
    <div>Meus carros:</div>
    <div>
      <Car name="Jetão" />
      <Car name="Celtinha" />
    </div>
  </div>
);

function App() {
  // return <Car />;
  return <MyCars />;
}

export default App;
