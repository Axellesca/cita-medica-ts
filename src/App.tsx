import React from 'react';
import { Formulario } from './components/Formulario';



function App() {
  return (
    <>
      <h1>Administrador Pacientes Tsx</h1>
      <hr />

      <div className="container">
        <div className="row">
          <div className="one-half column p-10">
            <Formulario/>
          </div>
          <div className="one-half column">
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
