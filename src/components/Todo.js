import { BsCircle } from 'react-icons/bs';
import Button from './Button';
import ButtonActions from '../utils/buttonActions';

function TodoItems( {todos, onCompleteTodo, onDeleteTodo} ) {

    return todos.map((todo) => (
        <div className={todo.isComplete ? "task done" : "task"}
        key={todo.id}>
            <div className="title" 
                 key={todo.id}
                 onClick={() => onCompleteTodo(todo.id)}>
                 
                <BsCircle className={todo.isComplete ? "bulleticon done" : "bulleticon"} />
                {todo.text}
            </div>
            <Button type={ButtonActions.delete} onClick={() => onDeleteTodo(todo.id)}/>
        </div>
    ));
}

export default TodoItems;
