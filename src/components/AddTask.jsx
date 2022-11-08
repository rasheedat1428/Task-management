import React, {Fragment} from 'react'
import TaskContext from '../context/tasks';
import { ADD } from '../context/types';
import { generateId } from '../utility/taskUtility';


const AddTask = () => {
  const defaultValue = {
    text: "",
    day: "",
    reminder: false,
  };

  const [isError, setIsError] = React.useState({text: false, day: false});
  const [formValues, setFormValues] = React.useState(defaultValue);
  const {state, dispatch} = React.useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsError({...isError, text: !formValues.text, day: !formValues.day})
  
    if(!formValues.text || !formValues.day) {
      return;
    }
     const payload = {...formValues, id: generateId(state.tasks)
     };
     
    dispatch({type: ADD, payload});
    setFormValues(defaultValue);
  };
    return (
      <Fragment>
        {state.showForm && (
        <form className="add-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label>Task</label>
            <input 
            style={{borderColor: isError.text && "red"}}
            type="text" 
            placeholder="Add Task" 
            value={formValues.text}
            onChange={(e) => setFormValues({...formValues, text: e.target.value})}
           />
            {isError.text && (<span style={{color: "red"}}>Please add a task</span>)}
            </div>
          <div className="form-control">
            <label>Day &amp; Time</label>
            <input 
            style={{borderColor: isError.day && "red"}}
            type="text" 
            placeholder="Add Day &amp; Time" 
            value={formValues.day}
            onChange={(e) => setFormValues({...formValues, day: e.target.value})}
            />   
            {isError.day && (<span style={{color: "red"}}>Please add a date and time</span>)}      
            </div>
          <div className="form-control form-control-check">
            <label>Set Reminder</label>
            <input type="checkbox" 
            checked={formValues.reminder}
            onChange={(e) => setFormValues({...formValues, reminder: e.currentTarget.checked})}
            />
          </div>
    
          <input type="submit" 
            value="Save Task" 
            className="btn btn-block" />
        </form>
        )}
        </Fragment>
      );
    };

export default AddTask