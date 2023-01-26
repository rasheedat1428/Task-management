import React, {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import TaskContext from "../context/tasks";
import AddTask from "./AddTask";
import Header from "./Header";
import Tasks from "./Tasks";
import {fetchUserProfile, fetchUserTasks} from "./api/service";
import {UPDATE_USER, ADD_ALL} from "../context/types";

const Home = () => {
  const {state, dispatch} = useContext(TaskContext);
  
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const user = state.user;
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login", {replace: true});
  } else {
    setIsLoading(true);

    fetchUserProfile() 
    .then((res) => {
      dispatch({type:UPDATE_USER, payload: res.data});
    })
    .catch((err) => {
      navigate("/login", {replace: true});
    })

      fetchUserTasks()
      .then((res) => {
        dispatch({type: ADD_ALL, payload: res.data})
        setError(false)
        setIsLoading(false)
    })
      .catch((err) => {
        setError(true)
        setIsLoading(false)
    })
    
  }
}, []);

  return (
    <>
      {user ? (
      <>
      <Header title={user?.name || "Guest!"}/>
      {!isLoading && (
        <>
      <AddTask />
      {error && <p>Unable to Fetch Tasks</p>}
      <Tasks />
      </>
      )}
      {isLoading && <p>Fetching Tasks...</p>}
      </>
     ) : (
        <></>
      )}
    </>
  );
};

export default Home;
