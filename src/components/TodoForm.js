import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

function TodoForm(props) {

    const [input, setInput] = useState("");
    const [id, setId] = useState(0);

    const handleChange = e => {
        setInput(e.target.value);
    }

    const handleClick = e => {
        // e.preventDefault();

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
            <button className="add" onClick={handleClick}>
                <AiOutlinePlus className="icon" />
            </button>
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
