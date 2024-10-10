import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoItemList from "./TodoItemList";

export const TodoList = () => {
    const [todos, setTodos] = useState([]); // Estado para las tareas
    const apiUrl = "https://playground.4geeks.com/todo"; // URL de la API

    // Obtener las tareas cuando el componente se monta
    useEffect(() => {
        const fetchTodos = async () => {
            const response = await fetch(`${apiUrl}/master`, { method: "GET" });
            if (response.ok) {
                const data = await response.json();
                setTodos(data); // Actualiza el estado con los datos de la API
            }
        };

        fetchTodos();
    }, []);

    // Actualizar la lista de tareas en el servidor (PUT)
    const updateTodos = async (updatedTodos) => {
        const response = await fetch(`${apiUrl}/master`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedTodos),
        });
        if (response.ok) {
            setTodos(updatedTodos); // Actualiza el estado si la respuesta es exitosa
        }
    };

    // Agregar una nueva tarea
    const addTodo = (newTodo) => {
        const updatedTodos = [...todos, { label: newTodo, done: false }];
        updateTodos(updatedTodos); // Sincronizar con la API
    };

    // Eliminar una tarea
    const deleteTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        updateTodos(updatedTodos); // Actualiza la lista y sincroniza
    };

    // Limpiar todas las tareas
    const clearTodos = () => {
        updateTodos([]); // Vacía la lista local y en el servidor
    };

    return (
        <div className="container">
            <h1>Lista de Tareas</h1>
            <TodoForm addTodo={addTodo} /> {/* Formulario para agregar nuevas tareas */}
            <TodoItemList todos={todos} deleteTodo={deleteTodo} /> {/* Lista de tareas */}
            <button className="btn btn-warning mt-3" onClick={clearTodos}>
                Limpiar Tareas
            </button>
        </div>
    );
};

