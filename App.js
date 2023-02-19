// App.js
import React from 'react';
import Counter from './componentes/Counter';
import CounterCard from './componentes/CounterCard';

function App() {
  return (
    <div className="container">
     
          
        
        <div className="col-md-6 d-flex justify-content-end">
          <CounterCard />
        </div>
      </div>
    
  );
}

export default App;


