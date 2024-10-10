import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
    const [newTodo, setNewTodo] = useState("");

     const handleSubmit = (event) => {
        event.preventDefault();
        if (newTodo.length > 0) {
            addTodo(newTodo);
            setNewTodo("");
        }
    };

    const handleChange = (event) => {
        setNewTodo(event.target.value);
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex flex-column flex-md-row gap-2">
            <input
                type="text"
                className="form-control"
                value={newTodo}
                onChange={handleChange}
                placeholder="Escribe una nueva tarea"
            />
            <button className="btn btn-primary w-100 w-md-auto" type="submit">
                Agregar
            </button>
        </form>
    );
};

