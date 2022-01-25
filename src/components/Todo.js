import { BsCircle } from 'react-icons/bs';
import Button from './Button';

function Todo( {todos, completeTodo, handleDelete} ) {

    return todos.map((todo, index) => (
        <div className={todo.isComplete ? "task done" : "task"}
        data-index={index} 
        key={index}>
            <div className="title" 
                 key={todo.id}
                 onClick={() => completeTodo(todo.id)}>
                 
                <BsCircle className={todo.isComplete ? "bulleticon done" : "bulleticon"} />
                {todo.text}
            </div>
            <Button action="delete" onClick={() => handleDelete(todo.id)}/>
        </div>
    ));
}

export default Todo;
