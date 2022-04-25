import { BaseSyntheticEvent, useState } from 'react';

interface Cita {
    nombre:string;
    obra:string;
    fecha:string;
    hora:string;
    sintomas:string;
}

export const Formulario = () => {
    
    const [cita, setCita] = useState<Cita>({
        nombre: '',
        obra: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });

    const [error, setError] = useState<Boolean>(false);

    const { nombre,obra,fecha,hora,sintomas } = cita;
    /**
     * TODO:
     * ?
     * !
     * @param e 
     */
    const handleChange = (e:BaseSyntheticEvent | any) => {
        // console.log(e);
        
        setCita({
            ...cita,
            [e.target.name] : e.target.value
        })
    }
    /**
     * 
     * @param e 
     */
    const handleSubmit = (e:any) => {
        e.preventDefault()

        // Validar
        if(nombre.trim() === '' || obra.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true);
            return;
        }else{

        }
    }

    return (
        <>
            <h2>Crear Cita</h2>

            {error ? <p className='alerta-error'>Todos los campos son Obligatorios</p>: null}

            <form 
                action=""
                onSubmit={handleSubmit}
            >
                <label htmlFor="nombre">Nombre:</label>
                <input 
                    type="text" 
                    name="nombre"
                    id="nombre"
                    className="u-full-width"
                    placeholder="Nombre:"
                    onChange={handleChange}
                    value={nombre}
                />

                <label htmlFor="obra">Obra Social:</label>
                <input 
                    type="text" 
                    name="obra"
                    id="obra"
                    className="u-full-width"
                    placeholder="Obra Social:"
                    onChange={handleChange}
                    value={obra}
                />
                <label htmlFor="">Fecha:</label>
                <input 
                    type="date" 
                    name="fecha" 
                    id="fecha" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={fecha}
                />
                <label htmlFor="hora">Hora:</label>
                <input 
                    type="time" 
                    name="hora" 
                    id="hora" 
                    className="u-full-width"
                    onChange={handleChange}
                    value={hora}
                />
                <label htmlFor="sintomas">Síntomas:</label>
                <textarea 
                    name="sintomas" 
                    id="sintomas" 
                    cols={30} 
                    rows={10}
                    className="u-full-width"
                    onChange={handleChange}
                    value={sintomas}
                    >
                    </textarea>
                <button 
                    type="submit"
                    className="u-full-width button-primary"
                    >
                        Enviar
                </button>
            </form>
        </>
    )
}
