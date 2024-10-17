import React from "react";

export const TodoItem = ({ todo, index, deleteTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between align-items-center">
            <span>{todo.label}</span>
            <button className="btn btn-danger" onClick={() => deleteTodo(index)}>
                Eliminar
            </button>
        </li>
    );
};


