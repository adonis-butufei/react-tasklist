import { BsCircle } from 'react-icons/bs';
import Button from './Button';
import ButtonActions from '../utils/buttonActions';

function TodoItem({ todo, onCompleteTodo, onDeleteTodo }) {

    return (
        <>
            <div className={todo.isComplete ? "task done" : "task"}>
            
                <div className="title"
                    key={todo.id}
                    onClick={() => onCompleteTodo(todo.id)}>

                    <BsCircle className={todo.isComplete ? "bulleticon done" : "bulleticon"} />

                    {todo.text}
                    
                </div>

                <Button type={ButtonActions.delete} onClick={() => onDeleteTodo(todo.id)} />
            </div>
        </>
    );
}

export default TodoItem;
