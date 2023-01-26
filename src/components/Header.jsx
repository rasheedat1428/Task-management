import React from 'react'
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import TaskContext from "../context/tasks";
import { DELETE_ALL, UPDATE_USER } from "../context/types";
import Button from './Button'

const Header = ({title}) => {
  const [dispatch] = React.useContext(TaskContext);
  const navigate = useNavigate;
  
  const logout = () => {
    localStorage.removeItem("auth");
    dispatch({type: DELETE_ALL});
    dispatch({type: UPDATE_USER, payload: undefined});
    navigate("/login", {replace: true});
  }
  
  return (
    <header className="header">
        <p> Welcome, {title}
          <FaSignOutAlt onclick= {logout} style = {{cursor: "pointer" }}/>
        </p>
        <Button />
    </header>
  );
};
 Header.defaultProps = {
     title: "Task Tracker",
 };

export default Header
