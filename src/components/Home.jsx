import React, {useContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import TaskContext from "../context/tasks";
import AddTask from "./AddTask";
import Header from "./Header";
import Tasks from "./Tasks";

const Home = () => {
  const {state} = useContext(TaskContext);
  console.log(state);
  const user = state.user;
  const navigate = useNavigate

  useEffect(() => {
    if (!user || !user.name) {
      navigate("/login", {replace: true});
  }}, [navigate, user]);

  const name = state.user?.name || "Guest!";

  return (
    <>
      {user ? (
      <>
      <Header title={name}/>
      <AddTask />
      <Tasks />
      </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Home;
