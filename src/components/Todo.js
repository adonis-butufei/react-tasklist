import { BsCircle } from 'react-icons/bs';
import Button from './Button';

function Todo( {todos, handleDelete} ) {

    return todos.map((todo, index) => (
        <div className="task" data-index={index} key={index}>
            <div className="title" key={todo.id}>
                <BsCircle className="bulleticon" />
                {todo.text}
            </div>
            <Button action="delete" onClick={() => handleDelete(todo.id)}/>
        </div>
    ));
}

export default Todo;
