import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index'
import './todo.css'

const Todo = () => {
    const [inputData, setInputData] = useState('');
    const list = useSelector((e) => e.todoReducers.list);
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
                        <i className='fa fa-plus add-btn' onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
                    </div>
                    <div className='showItems'>
                        {
                            list.map((elem) => {
                                return (
                                    <div className='eachItem' key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <i className='fa fa-trash delete-btn' onClick={() => dispatch(deleteTodo(elem.id))}></i>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className='showItems'>
                        <button className='btn effect04' data-sm-link-text="remove All"><span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;