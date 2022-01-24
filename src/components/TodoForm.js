import { useState } from 'react';
import Button from './Button';

function TodoForm(props) {

    const [input, setInput] = useState("");
    const [id, setId] = useState(0);

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleClick = e => {

        props.onClick({
            id: id,
            text: input
        });

        const newId = id + 1;
        setId(newId);
        setInput("");
    }

    return (
        <div className="input">
        <Button action="add" onClick={handleClick}/>
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
