import React, { useState } from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import Button from './Button';

function TodoApp() {
    // TODO5: Local storage called here
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        // TODO6: trim for spaces
        if(!todo.text) {
            throw new Error("Invalid input!");
        }

        const newTodos = [todo, ...todos];
        setTodos(newTodos);
    }

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const handleDelete = id => {
        const newTodos = todos.filter(todo=>todo.id !== id);
        setTodos(newTodos);
    }

    const deleteAll = () => {
        setTodos([]);
    }
    

    return (
        <main className="container">
            <h1>Task List</h1>
            <TodoForm onClick={addTodo}/>

            {/* TODO4: move divs inside TodoList component, leave just TodoList*/}
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
            {/* <Button action="clear-all" onClick={deleteAll} /> */}
        </main>
    );
}

export default TodoApp;
