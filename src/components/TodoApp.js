import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoApp() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if(!todo.text) {
            throw new Error("Invalid input!");
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
        console.log(newTodos);
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const handleDelete = (id) => {
        const newTodos = todos.filter(todo=>todo.id !== id);
        setTodos(newTodos);
    }

    const deleteAll = () => {
        setTodos([]);
    }
    

    return (
        <main className="container" id="container">
            <h1>Task List</h1>
            <TodoForm onClick={addTodo}/>

            <div className="tasks-container">
                <div className="task-list">
                    <Todo
                        todos={todos}
                        completeTodo={completeTodo}
                        handleDelete={handleDelete}
                    />
                </div>
            </div>
            
            <button 
                className="clear-all"
                onClick={deleteAll}>
                Clear All
            </button>
        </main>
    );
}

export default TodoApp;
