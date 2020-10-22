import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo ,removeTodos } from '../redux/actions';
import {Button} from 'react-bootstrap';

function AddTask() {
    let [title, setTitle] = useState() ;
    let [description, setDescription] = useState();
   
    let dispatch = useDispatch() ;
    return (
        <div> <div className='first-div'><i className="fas fa-calendar-check fa-5x"></i> <h1 className='todo-app'>Todo App</h1><i className="fas fa-calendar-check fa-5x"></i></div> 
        <div className='row m-2'>
            <div className="column input-container">
            <Button className='clear-all' variant="danger" onClick ={()=> { dispatch(removeTodos({}))}}>Clear All Todos </Button>
            <input value = {title} onChange={(e)=>setTitle(e.target.value)} type="text" required={true} placeholder="Set title" className="col form-control"/>
            <input value = {description} onChange={(e)=>setDescription(e.target.value)} type="text" required={true} placeholder="Set description" className="col form-control"/>
            <button className="btn btn-primary mx-2" onClick ={()=> { dispatch(addTodo(
                {
                    id: Math.random(),
                    title: title,
                    description: description,
                }))
                    setTitle('');
                    setDescription('');
                   
            }}>Add Todo</button>         
            </div>
            </div>
    </div>
    )
}

export default AddTask
