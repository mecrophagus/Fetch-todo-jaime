import React, { useState, useEffect } from "react";
import {TodoForm} from "./TodoForm.jsx";
import {TodoItemList} from "./TodoItemList.jsx";

export const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const apiUrl = "https://playground.4geeks.com/todo";

    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(`${apiUrl}/master`, { method: "GET" });
            if (response.ok) {
                const data = await response.json();
                setTodos(data);
            }
        };

        fetchTodos();
    }, []);

    const updateTodos = async (updatedTodos) => {
        const response = await fetch(`${apiUrl}/master`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTodos),
        });
        if (response.ok) {
            setTodos(updatedTodos);
        }
    };

    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, { label: newTodo, done: false }];
        updateTodos(updatedTodos);
    };

    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        updateTodos(updatedTodos);
    };

    const clearTodos = () => {
        updateTodos([]);
    };

    return (
        <div className="container mt-3">
            <h1 className="text-center">Lista de Tareas</h1>
            <div className="row justify-content-center">
                <div className="col-12 col-md-8">
                    <TodoForm addTodo={addTodo} />
                    <TodoItemList todos={todos} deleteTodo={deleteTodo} />
                    <button className="btn btn-warning w-100 mt-3" onClick={clearTodos}>
                        Limpiar Tareas
                    </button>
                </div>
            </div>
        </div>
    );
};

