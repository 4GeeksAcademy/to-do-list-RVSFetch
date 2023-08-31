import React, { useState, useEffect } from "react";
import AgregarTareas from "./agregartarea";
import "../../styles/listadetareas.css";
import Tareas from "./tareas";

const Lista = () => {

    const [tareas, setTareas] = useState([]);

    useEffect(() => {
        fetch("https://playground.4geeks.com/apis/fake/todos/user/rvargas")
            .then((respuesta) => {
                return respuesta.json();
            })
            .then(data => {
                setTareas(data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const agregarLaTarea = async (tarea) => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizada = [{ label: tarea.texto, done: tarea.completado, id: tarea.id }, ...tareas];
            try {
                let respuesta = await fetch("https://playground.4geeks.com/apis/fake/todos/user/rvargas", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(tareasActualizada)

                })
                setTareas(tareasActualizada);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const eliminarLaTarea = async (id) => {
        const tareaActualizada = tareas.filter(tarea => tarea.id !== id);
        try {
            let eliminar = await fetch("https://playground.4geeks.com/apis/fake/todos/user/rvargas", {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tareaActualizada)
            });

            setTareas(tareaActualizada);
        } catch (error) {
            console.log(error);
        }

    }

    const completadaLaTarea = async (id) => {

        try {
            const tareaActualizada = tareas.map(tarea => {
                if (tarea.id === id) {
                    tarea.done = !tarea.done;
                }
                return tarea;
            });
            let completar = await fetch("https://playground.4geeks.com/apis/fake/todos/user/rvargas", {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tareaActualizada)
            });
            setTareas(tareaActualizada);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <AgregarTareas onSubmit={agregarLaTarea} />
            <div className="contenedor-lista">
                {
                    tareas.map((tarea) =>
                        <Tareas key={tarea.id} id={tarea.id} texto={tarea.label} completado={tarea.done} completarTarea={completadaLaTarea} eliminarTarea={eliminarLaTarea} />

                    )
                }
            </div>

        </>
    );
};


export default Lista;