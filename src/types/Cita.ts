export interface Cita {
    nombre:string;
    obra:string;
    fecha:string;
    hora:string;
    sintomas:string;
    id:string;
    crearCita?: (param:Object) => void;
    handleDelete?:(id:string) => string | void;
}

export type FormArgs = {
    crearCita:(cita:Cita) => void;
}

export type CitasArgs = {
    args:Cita,
    handleDelete: (id:string) => void;
}