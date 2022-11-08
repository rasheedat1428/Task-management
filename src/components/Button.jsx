import React from 'react'
import TaskContext from '../context/tasks';
import { CHANGE_SHOW_FORM } from '../context/types';


const Button = () => {
  const {state, dispatch} = React.useContext(TaskContext);
  const label = state.showForm ? "Hide Form" : "Show Form"
  const color = state.showForm ? "purple" : "green";

const handleClick = () => {
  dispatch({type: CHANGE_SHOW_FORM});
};

  return (
    <button 
        onClick = {handleClick} 
        className="btn"
        style={{ backgroundColor: color }}
     >
            {label}
    </button>
  );
};
export default Button