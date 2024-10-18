import React from "react";
import {TodoItem} from "./TodoItem.jsx";

export const TodoItemList = ({ todos, deleteTodo }) => {
    return (
        <ul className="list-group mt-3">
            {todos.length === 0 ? (
                <li className="list-group-item text-center">No hay tareas</li>
            ) : (
                todos.map((todo, index) => (
                    <TodoItem
                        key={index}
                        todo={todo}
                        index={index}
                        deleteTodo={deleteTodo}
                    />
                ))
            )}
        </ul>
    );
};
