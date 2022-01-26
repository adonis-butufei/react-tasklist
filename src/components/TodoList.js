import React from 'react';
import TodoItems from './Todo';

export default function TodoList({ todos, onCompleteTodo, onDeleteTodo }) {

    return (
        <div className="tasks-container">
            <div className="task-list">
                <TodoItems
                    todos={todos}
                    onCompleteTodo={onCompleteTodo}
                    onDeleteTodo={onDeleteTodo}
                />
            </div>
        </div>
    );
}
