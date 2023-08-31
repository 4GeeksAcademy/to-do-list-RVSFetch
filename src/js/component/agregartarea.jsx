import React, { useState } from "react";
import "../../styles/agregartarea.css"
import { v4 as uuidv4 } from 'uuid';

const AgregarTareas = (props) => {

    const [input, setInput] = useState("");

    const cambio = evento => {
        setInput(evento.target.value)
    }

    const envio = event => {
        event.preventDefault();
        const nuevatarea = {
            id: uuidv4(),
            texto: input,
            completado: false
        }

        props.onSubmit(nuevatarea);
    }

    return (
        <>
            <form className="formulario-tarea" onSubmit={envio}>
                <input className="input-tarea" type="text" placeholder="Agrega una Tarea.." name="texto" onChange={cambio} />
                <button className="boton-tarea">AGREGAR</button>
            </form>

        </>
    );
};

export default AgregarTareas;