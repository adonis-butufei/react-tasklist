import TodoForm from './TodoForm';
import Button from './Button';
import ButtonActions from '../utils/buttonActions';
import TodoList from './TodoList';
import useUpdateDataLocalStorage from './useUpdateData';
import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';


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
            setError(false);
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

    // const onDisableError = () => {
    //     setError(false);
    //     console.log(error);
    // }


    return (
        <main className="container">

            <h1>Task List</h1>

            <ErrorBoundary>
                <TodoForm todos={todos} onClick={addTodo} err={error}/>
            </ErrorBoundary>


            <TodoList todos={todos} onCompleteTodo={onCompleteTodo} onDeleteTodo={onDeleteTodo} />

            <Button type={ButtonActions.deleteAll} onClick={deleteAll} />
        </main>
    );
}

export default TodoApp;
