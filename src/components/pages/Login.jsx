import React from "react";
import { loginService } from "../api/service";
import { Link, useNavigate } from "react-router-dom";
import { UPDATE_USER } from "../../context/types";
import TaskContext from "../../context/tasks";

const Login = () => {
  const {dispatch} = React.useContext(TaskContext);
    const defaultValues = {
      username: "",
      password: "",
    };
    const [isError, setIsError] = React.useState({
      username: false,
      password: false,
    });
    const [formValues, setFormValues] = React.useState(defaultValues);
    const [isLoading, setIsLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState(null);

    
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsError({
      ...isError,
      username: !formValues.username,
      password: !formValues.password,
    });

    if (!formValues.username || !formValues.password) {
      return;
    }

    setIsLoading(true);

    loginService(formValues)
      .then((res) => {
        console.log(res);
        dispatch({type: UPDATE_USER, payload: res.data});
        localStorage.setItem("token", res.data.token);
        setIsLoading(false);
        navigate("/home", { replace: true });
      })
      .catch((err) => {
        setErrorMessage(err.response?.data?.message || err.message);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <form style={{ marginBottom: "30px" }} onSubmit={handleSubmit}>
        <h3 style={{ float: "right", fontSize: "20px", marginBottom: "20px" }}>
          Login
        </h3>
        {errorMessage && <p>{errorMessage}</p>}
        <br />
        <div className="form-control">
          <label>Username</label>
          <input
            style={{ borderColor: isError.username && "red" }}
            type="text"
            placeholder="Username"
            value={formValues.username}
            disabled={isLoading}
            onChange={(e) =>
              setFormValues({ ...formValues, username: e.target.value })
            }
          />
          {isError.username && (
            <span style={{ color: "red" }}>Please enter a username</span>
          )}
        </div>
        <div className="form-control">
          <label>Password</label>
          <input
            style={{ borderColor: isError.password && "red" }}
            type="password"
            placeholder="Password"
            value={formValues.password}
            disabled={isLoading}
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
          {isError.password && (
            <span style={{ color: "red" }}>Please enter a password</span>
          )}
        </div>
        <input
          disabled={isLoading}
          type="submit"
          value={`Login${isLoading ? "..." : ""}`}
          className="btn btn-block"
          style={{
            cursor: isLoading && "progress",
            backgroundColor: isLoading && "gray",
          }}
        />
      </form>
      <Link to="/register" style={{ marginBottom: "30px", float: "right" }}>
        Don't have account, Register
      </Link>
    </div>
  );
};

export default Login;