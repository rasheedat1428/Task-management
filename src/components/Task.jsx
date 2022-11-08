import React from 'react'
import {FaTimes, FaClock, FaList} from "react-icons/fa";
import TaskContext from '../context/tasks';
import { UPDATE } from '../context/types';

const Task = ({task}) => {
  const { dispatch } = React.useContext(TaskContext);
  const handleDbClick = () => {
   dispatch({type: UPDATE, payload: task.id});
  };
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}
       onDoubleClick = {handleDbClick} >
        <FaList />                         
     <h3>{task.text}{""}
        <FaTimes  style={{
            color: "darkred",
            cursor: "pointer",
          }}
        />
     </h3>   
        <FaClock /> {task.day}
    </div>
  );
};

export default Task