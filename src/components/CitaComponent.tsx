import { Cita, CitasArgs, } from '../types/Cita';


export const CitaComponent = ({args,handleDelete}:CitasArgs) => { //args:Cita,handleDelete

    // const handleDelete = (id:string | undefined) => {
    //     console.log(id);
    // }

    return (
        <div className='cita mt-3'>
            <p>Nombre: {args.nombre}</p>
            <p>Obra Social: {args.obra}</p>
            <p>Fecha: {args.fecha}</p>
            <p>Hora: {args.hora}</p>
            <p>Sintomas Paciente: {args.sintomas}</p>
            <button
                className='bg-red-400 shadow-lg shadow-red-500/50 border-black-600 rounded-2xl u-full-width'
                onClick={() => handleDelete(args.id)}
            >
                Eliminar &times;
            </button>
        </div>
    )
}
