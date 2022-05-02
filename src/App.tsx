import { useEffect, useState } from 'react';
import { CitaComponent } from './components/CitaComponent';
import { Formulario } from './components/Formulario';
import type { Cita } from './types/Cita';


function App() {

  let citasInit = JSON.parse(localStorage.getItem('citas') || '');
  const [citas, setCitas] = useState<Cita | any>(citasInit);// []

  if(!citasInit) {
    citasInit = []
  }

  useEffect(() => {
    if(citasInit){
      localStorage.setItem('citas',JSON.stringify(citas));
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }
  }, [citas]);

  const crearCita = (cita:Cita) => {
    // nombre: '';
    // obra: '';
    // fecha: '';
    // hora: '';
    // sintomas: ''
    console.log(cita);
    setCitas([
      ...citas,
      cita
    ])
  };

  const handleDelete = (id:string) => {
    const nuevasCitas = citas.filter((cita:any) => cita.id !== id);
    setCitas(nuevasCitas);
  }

  return (
    <>
      <h1 className='text-7xl'>Administrador Pacientes Tsx</h1>
      <hr />

      <div className="container">
        <div className="row">
          <div className="one-half column p-10">
            <Formulario
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column p-10">
            <h2 className='text-6xl'>Citas</h2>
            {citas.map((cita:Cita) => {
              return (
                <CitaComponent
                  key={cita.id}
                  args={cita}
                  // nombre={cita.nombre}
                  // obra={cita.obra}
                  // fecha={cita.fecha}
                  // hora={cita.hora}
                  // sintomas={cita.sintomas}
                  // id={cita.id}
                  handleDelete={handleDelete}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
