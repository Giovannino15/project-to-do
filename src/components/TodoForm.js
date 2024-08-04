import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim()) {
            addTodo({
                text: input,
                completed: false,
            });
            setInput('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="border border-blue-500 bg-blue-300 p-2 rounded flex-grow text-white"
            />
            <button type="submit" className="w-[3rem] ml-2 bg-blue-500 text-white p-2 rounded">+</button>
        </form>
    );
};

export default TodoForm;
