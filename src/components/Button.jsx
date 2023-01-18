import React from 'react'
import TaskContext from '../context/tasks';
import { CHANGE_SHOW_FORM } from '../context/types';


const Button = ({label, color}) => {
  const {state, dispatch} = React.useContext(TaskContext);
  const labelText = label ? label : state.showForm ? "Hide Form" : "Show Form"
  const bgColor = color ? color : state.showForm ? "purple" : "green";

const handleClick = () => {
  dispatch({type: CHANGE_SHOW_FORM});
};

  return (
    <button 
        onClick = {handleClick} 
        className="btn"
        style={{ backgroundColor: bgColor }}
     >
            {labelText}
    </button>
  );
};
export default Button