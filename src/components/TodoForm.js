import { useState, useEffect } from 'react';
import ButtonActions from '../utils/buttonActions';
import Button from './Button';

function TodoForm({ todos, onClick, err }) {

    const [input, setInput] = useState("");
    const [id, setId] = useState(() => {
        return todos.length > 0 ? (todos[0].id + 1) : 0;
    });


    useEffect(() => {
        if (err) throw new Error('Invalid Input!');
    }, [err]);


    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleClick = () => {

        onClick({
            id: id,
            text: input,
            isComplete: false
        });

        const newId = id + 1;
        setId(newId);
        setInput("");
    }



    return (
        <div className="input">
            <Button type={ButtonActions.add} onClick={handleClick} />
            <input
                type="search"
                placeholder="add a task"
                value={input}
                name="text"
                className="input-task text"
                onChange={handleChange}
            />
        </div>
    );
}

export default TodoForm;