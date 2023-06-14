import React from 'react';
import './App.css';
import Selector from './components/Selector/Selector';

function App() {
  return (
    <div className="App">
       <div className="container">
       <img src="https://www.gifsanimados.org/data/media/748/bandera-de-chile-imagen-animada-0012.gif" alt="Imagen de título" />
       
    <h1>Feriados de Chile 2023</h1>
    <br></br>
    <p>Aca podrás encontrar todos los días feriados de Chile por mes.</p>
        
    <div>
    <Selector>
    </Selector>
    </div>

  </div>  
</div>
  );
}

export default App;
