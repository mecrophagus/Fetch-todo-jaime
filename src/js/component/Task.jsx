import { useState } from "react";
import React from "react";

export const Task = () => {
    const [nuevoTodo, setNuevoTodo] = useState("Tarea nueva");
    const [todo, setTodo] = useState(["Una tarea de prueba"]);
    const [editTask, setEditTask] = useState("");
    //Empezamos con el llamado al api
    const host = "https://playground.4geeks.com/todo";
    const user = "master";


    const handleClick = () => {
        console.log("Nueva tarea", nuevoTodo);
        setTodo([...todo, nuevoTodo]);
    };

    const deleteTask = (index) => {
        console.log(index);
        const listaNueva = todo.filter((_, i) => i !== index);
        setTodo(listaNueva);
    };

    const handleChange = (event) => {
        setNuevoTodo(event.target.value);
    };

    return (
        <div className="container">
            <div className="d-flex gap-2">
                <input type="text" className="form-control" value={nuevoTodo} onChange={handleChange} />
                <button onClick={handleClick} className="btn btn-primary">Task</button>
            </div>
            <p>Nueva tarea: {nuevoTodo}</p>
            <ul className="list-group">
                {todo.map((todo, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {todo} <button className="btn btn-danger" onClick={() => deleteTask(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};
