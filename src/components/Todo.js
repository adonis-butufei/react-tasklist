import { BsCircle } from 'react-icons/bs';
import Button from './Button';

function Todo( {todos} ) {

    return todos.map((todo, index) => (
        <div className="task" data-index={index} key={index}>
            <div className="title" key={todo.id}>
                <BsCircle className="bulleticon" />
                {todo.text}
            </div>
            <Button action="delete"/>
        </div>
    ));
}

export default Todo;
