import React, { useState } from 'react'
import {Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import {  deleteTodo, updateTodo } from '../redux/actions';

function Task( {todo}  ) {
    let dispatch = useDispatch();
    const [edit, setEdit] = useState(false);
    let [newDescription, setNewDescription,] = useState();
    return (
        <div className= "task-container">
            
             <div className='task-title-cont'><h3> {todo.title} </h3> </div>
                {edit? <input  type="text" className="form-control" value={newDescription}  onChange={(e)=>setNewDescription(e.target.value)} /> : 
                <span style ={{textDecoration:todo.completed?"line-through":'none'}} className="desc" 
                onClick={()=> {dispatch(updateTodo(
                {
                    ...todo,
                    completed: !todo.completed,
                    
                 }))
                 }}> 
                {todo.description}</span> }
            <div className="task-content">
            <Button onClick={()=> {dispatch(updateTodo(
                {
                    ...todo,
                    title: todo.title,
                    description: newDescription,
                } 
            ));  setNewDescription(todo.description); ; if (edit){setNewDescription(todo.description)} setEdit(!edit);}} className='edit-button' variant="warning">{edit? 'Update' : 'Edit'} </Button>
            <Button onClick={()=> dispatch(deleteTodo(todo.id))}  variant="danger">Delete</Button>
            <hr/>
            </div>
        </div>
    )
}

export default Task
