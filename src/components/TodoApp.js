import TodoForm from './TodoForm';
import Button from './Button';
import ButtonActions from '../utils/buttonActions';
import TodoList from './TodoList';
import useUpdateDataLocalStorage from './useUpdateData';
import { useState } from 'react';

function TodoApp() {

    // Setting todos and setTodos by calling the custom hook
    const { data: todos, setData: setTodos } = useUpdateDataLocalStorage('todos');
    const [error, setError] = useState(false);
    
    
    const addTodo = todo => {
        
        if (!todo.text || todo.text.trim() === "") {
            setError(true);
        }
        else {
            const newTodos = [todo, ...todos];
            setTodos(newTodos);
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
    
    if (error) throw new Error('Invalid Input');
    
    return (
        <main className="container">

            <h1>Task List</h1>

            <TodoForm todos={todos} onClick={addTodo} />

            <TodoList todos={todos} onCompleteTodo={onCompleteTodo} onDeleteTodo={onDeleteTodo} />

            <Button type={ButtonActions.deleteAll} onClick={deleteAll} />
        </main>
    );
}

export default TodoApp;
