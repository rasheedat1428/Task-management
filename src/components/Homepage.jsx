import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Homepage = () => {
  return (
    <>
      <h1> Task Tracker </h1>
      <p>
        In this post, we are going to learn how to work with tasks. In task you
        have some basic attributes like author of the task, assignee of the
        task, start date, due date, estimated time, spent time, task priority,
        tracker, and status.
      </p>
      <div className="auth-links">
        <Link to="/login">
          <Button label="Login" color="gray" />
        </Link>
        <Link to="/register">
          <Button label="Register" color="gray" />
        </Link>
      </div>
    </>
  );
};

export default Homepage;
