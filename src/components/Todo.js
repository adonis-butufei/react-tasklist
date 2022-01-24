import React, { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { BsCircle } from 'react-icons/bs';

function Todo( {todos} ) {

    return todos.map((todo, index) => (
        <div className="task" data-index={index} key={index}>
            <div className="title" key={todo.id}>
                <BsCircle className="bulleticon" />
                {todo.text}
            </div>
            <button className="delete">
                <RiCloseCircleLine className="icon"/>
            </button>
        </div>
    ));
}

export default Todo;
