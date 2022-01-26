import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Button from './Button';
import ButtonActions from '../utils/buttonActions';
import TodoList from './TodoList';

function TodoApp() {
    // TODO5: Local storage called here
    
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {

        try {
            if (!todo.text || todo.text.trim() === "") {
                throw new Error("Invalid input!");
            }
            const newTodos = [todo, ...todos];
            setTodos(newTodos);
        } catch (error) {
            alert(error.message)
        }


    }

    const onCompleteTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    }

    const onDeleteTodo = id => {
        const newTodos = todos.filter(todo => todo.id !== id);
        setTodos(newTodos);
    }

    const deleteAll = () => {
        setTodos([]);
    }


    return (
        <main className="container">
            <h1>Task List</h1>
            <TodoForm onClick={addTodo} />

            <TodoList todos={todos} onCompleteTodo={onCompleteTodo} onDeleteTodo={onDeleteTodo} />

            <Button type={ButtonActions.deleteAll} onClick={deleteAll} />
        </main>
    );
}

export default TodoApp;
