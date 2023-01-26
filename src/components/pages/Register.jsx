import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerApiService } from "../api/service";

const Register = () => {
  const defaultValues = {
    name: "",
    username: "",
    password: "",
  };
  const [isError, setIsError] = React.useState({
    name: false,
    username: false,
    password: false,
  });
  const [formValues, setFormValues] = React.useState(defaultValues);
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState(null);

  const navigate = useNavigate;

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsError({
      ...isError,
      name: !formValues.name,
      username: !formValues.username,
      password: !formValues.password,
    });

    if (!formValues.name || !formValues.username || !formValues.password) {
      return;
    }

    setIsLoading(true);

    registerApiService() 
    registerApiService(formValues)
    .then((res) => {
      localStorage.setItem("auth", JSON.stringify(res.data));
      setIsLoading(false);
      navigate("/home", { replace: true });
    })
    .catch((err) => {
      setErrorMessage(err.response?.data?.message || err.message);
      setIsLoading(false);
    });
  }

  return (
    <div>
      <form style={{ marginBottom: "30px" }} onClick = {handleSubmit}>
        <h3 style={{ float: "right", fontSize: "20px", marginBottom: "20px" }}>
          Register
        </h3>
        {errorMessage && <p>{errorMessage}</p>}
        <br />
        <div className="form-control">
          <label>Name</label>
          <input
            style={{ borderColor: isError.name && "red" }}
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={(e) =>
              setFormValues({ ...formValues, name: e.target.value })
            }
          />
          {isError.name && (
            <span style={{ color: "red" }}>Please enter a name</span>
          )}
        </div>
        <div className="form-control">
          <label>Username</label>
          <input
            style={{ borderColor: isError.username && "red" }}
            type="text"
            placeholder="Username"
            value={formValues.username}
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
      <Link to="/login" style={{ marginBottom: "30px", float: "right" }}>
        Already Registred, Login
      </Link>
    </div>
  );
};

export default Register;