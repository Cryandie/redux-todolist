import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

function TodoList() {
    let todos = useSelector(state => state) 
    let weHaveTodos = todos.length ? ( todos.map(todo => {
        return <Task key ={todo.id} todo={todo} />           
    }
     
    )  ) : (<h2 className="empty-todos"> No Todo's left ! You're temporarily free !!!</h2>)
    return (
        <div className='first-cont'>
            
            <h3 className='main-title'> <strong> TodoList </strong> </h3>
           
            {weHaveTodos}
            <div className="bot-icons">
                
            <div><i className="fas fa-calendar-check fa-5x"></i></div>
            
            </div>
        </div>
    )
}

export default TodoList
