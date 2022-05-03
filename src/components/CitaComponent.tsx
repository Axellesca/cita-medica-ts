import { CitasArgs } from '../types/Cita';


export const CitaComponent = ({args,handleDelete}:CitasArgs) => { //args:Cita,handleDelete

    // const handleDelete = (id:string | undefined) => {
    //     console.log(id);
    // }

    return (
        <div className='cita mt-3'>
            <p className=''>Nombre: <span className='font-mono text-gray-900'>{args.nombre}</span></p>
            <p>Obra Social: <span className='font-mono text-gray-900'>{args.obra}</span></p>
            <p>Fecha: <span className='font-mono text-gray-900'>{args.fecha}</span></p>
            <p>Hora: <span className='font-mono text-gray-900'>{args.hora}</span></p>
            <p>Sintomas Paciente: <span className='font-mono text-gray-900'>{args.sintomas}</span></p>
            <button
                className='bg-red-400 shadow-lg shadow-red-500/50 border-black-600 rounded-2xl u-full-width'
                onClick={() => handleDelete(args.id)}
            >
                Eliminar &times;
            </button>
        </div>
    )
}
