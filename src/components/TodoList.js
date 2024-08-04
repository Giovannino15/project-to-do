import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo }) => {
    return (
        <ul className='mt-12'>
            {todos.map((todo, index) => (
                <TodoItem
                    key={index}
                    index={index}
                    todo={todo}
                    removeTodo={removeTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
