import { BsCircle } from 'react-icons/bs';
import Button from './Button';
import ButtonActions from '../utils/buttonActions';

function Todo( {todos, onComplete, onDelete} ) {

    return todos.map((todo) => (
        <div className={todo.isComplete ? "task done" : "task"}
        key={todo.id}>
            <div className="title" 
                 key={todo.id}
                 onClick={() => onComplete(todo.id)}>
                 
                <BsCircle className={todo.isComplete ? "bulleticon done" : "bulleticon"} />
                {todo.text}
            </div>
            <Button type={ButtonActions.delete} onClick={() => onDelete(todo.id)}/>
        </div>
    ));
}

export default Todo;


// TODO1: onComplete, onDelete
// TODO2: change to TodoList
// TODO3: change to TodoItem