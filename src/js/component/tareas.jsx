import React from "react";
import "../../styles/tareas.css"
import { AiOutlineCloseCircle } from "react-icons/ai";

const Tareas = ({ id, texto, completado, completarTarea, eliminarTarea }) => {

    return (
        <>
            <div className={completado ? "contenedor-tarea completado" : "contenedor-tarea"}>
                <div className="texto" onClick={() => completarTarea(id)}>
                    {texto}
                </div>
                <div className="contenedor-tarea-icono" onClick={() => eliminarTarea(id)}>
                    <AiOutlineCloseCircle className="tarea-icono" />
                </div>
            </div>

        </>
    );
};

export default Tareas;