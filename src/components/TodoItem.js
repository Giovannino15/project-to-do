import React from 'react';

const TodoItem = ({ todo, index, removeTodo }) => {
    return (
        <li className="flex justify-between items-center p-2 border-b border-white">
            <span className="mr-2 text-2xl truncate text-white">{todo.text}</span>
            <button onClick={() => removeTodo(index)} className="bg-red-500 text-white rounded p-2 h-[2rem]">-</button>
        </li>
    );
};

export default TodoItem;
