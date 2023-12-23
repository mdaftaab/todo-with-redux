import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index'
import './todo.css'

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const dispatch = useDispatch();
    console.log(inputData);
    return (
        <>
            <div className='main-div'>
                <div className='child-div'>
                    <h1>Todo List with React Redux</h1>
                    <h2>Add Your List Here</h2>
                    <div className='addItems'>
                        <input type='text' placeholder='Add Items...' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                        <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData),setInputData(''))}></i>
                    </div>
                    <div className='showItem'>
                        <div className='eachItem'>
                            <h3>Test</h3>
                            <i className='fa fa-trash delete-btn' onClick={() => dispatch(deleteTodo())}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;