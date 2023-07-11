import React, { useState, ChangeEvent } from 'react';
import Styles from '../styles/todo.module.css'


const TodoList: React.FC = () => {
    const [todos, setTodos] = useState<string[]>([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos((prevTodos) => [...prevTodos, inputValue]);
            setInputValue('');
        }
    };

    const handleRemoveTodo = (index: number) => {
        setTodos((prevTodos) => {
            const updatedTodos = [...prevTodos];
            updatedTodos.splice(index, 1);
            return updatedTodos;
        });
    };

    return (
        <div className={Styles.centerContainer}>
            <h2>To-Do List</h2>
            <div className={Styles.inputContainer}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Enter a task"
                />
                <button className={ Styles.button } onClick={handleAddTodo}>Add</button>
            </div>
            
            <ul>
                {todos.map((todo, index) => (
                    <div className={Styles.listDiv} key={index}>
                        <div >
                            <h5>{todo}</h5>
                        </div>
                        <div>
                            <button className={Styles.button} onClick={() => handleRemoveTodo(index)}>Remove</button>
                        </div>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
