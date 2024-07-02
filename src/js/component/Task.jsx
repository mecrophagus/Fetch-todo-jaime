import { useState } from "react";
import React from "react";

export const Task = () => {
    //const nuevoTodo = "tarea de ejemplo";
    const [nuevoTodo, setnuevoTodo] = useState("Tarea nueva");
    const [todo, setTodo] = useState (["Una tarea de prueba"])
 
    const handleClick = () => {
        console.log("Nueva tarea", nuevoTodo);
        setTodo([...todo, nuevoTodo])
    }

    const deleteTask = (index) => {
        console.log(index);
        const listaNueva = todo.filter ((todo, i) => i !== index )
        setTodo([...todo, nuevoTodo])
    }

    const handleChange = (event) => {
        setnuevoTodo [event.target.value];
    }

    return (
        
        <div className="container">
            <p>Hola soy task</p>
                <div>
                <input type="text" onChange={handleChange} />
                <button onClick={handleClick}>Task</button>
                </div>
                <p>Nueva tarea: {nuevoTodo}</p>
            <ul>
               {todo.map((todo, index) => {
                
                return(
                    <li>
                        {todo} <button onClick={""}>Delete task</button>
                    </li>

                )
               })}
            </ul>
        </div>
    );

};