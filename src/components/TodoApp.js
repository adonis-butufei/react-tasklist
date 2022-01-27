import TodoForm from './TodoForm';
import Button from './Button';
import ButtonActions from '../utils/buttonActions';
import TodoList from './TodoList';
import useUpdateDataLocalStorage from './useUpdateData';


import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Error from './Error';


function TodoApp() {

    // Setting todos and setTodos by calling the custom hook
    const { data: todos, setData: setTodos } = useUpdateDataLocalStorage('todos');

    // const [errorMessage, setErrorMessage] = useState(false);


    const addTodo = todo => {

        try {
            if (!todo.text || todo.text.trim() === "") {
                throw new Error("invalid input");
            }
            const newTodos = [todo, ...todos];
            setTodos(newTodos);
        } catch (err) {
            // setErrorMessage(err);
            toast.error(err.message);
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
            
            {/* // TODO: separate error functionality in another component */}
            <ToastContainer />

            {/* {errorMessage  &&<Error error={errorMessage} onEndDisplay={() => setErrorMessage(false)}/>} */}

            <h1>Task List</h1>

            <TodoForm todos={todos} onClick={addTodo} />

            <TodoList todos={todos} onCompleteTodo={onCompleteTodo} onDeleteTodo={onDeleteTodo} />

            <Button type={ButtonActions.deleteAll} onClick={deleteAll} />
        </main>
    );
}

export default TodoApp;
