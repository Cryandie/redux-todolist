import React  from 'react';
import { showCompleted, showInprogress, } from '../redux/actions';
import  {useDispatch} from 'react-redux';


     const FilterTask = (todos) => {
        let dispatch = useDispatch();

    return (
        <div className='filter-task'>
            <select className='selection'>
                <option> Select filter </option> 
                <option onClick={()=> {dispatch(showCompleted({...todos,completed:todos.completed}))}}>Done </option> 
                <option onClick={()=> {dispatch(showInprogress({...todos,completed:!todos.completed}))}}>In progress</option>
            </select>
        </div>
    )
}

export default FilterTask