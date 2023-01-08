import React from "react";
import AddTask from "./AddTask";
import Header from "./Header";
import Tasks from "./Tasks";

const Home = () => {
  return (
    <div>
      <Header />
      <AddTask />
      <Tasks />
    </div>
  );
};

export default Home;
