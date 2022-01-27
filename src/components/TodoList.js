import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ todos, onCompleteTodo, onDeleteTodo }) {

    return (
        <div className="tasks-container">
            <div className="task-list">
                {todos.map((todo) => (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        onCompleteTodo={onCompleteTodo}
                        onDeleteTodo={onDeleteTodo}
                    />))}
            </div>
        </div>
    );
}
