import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Login = () => {
  const { logIn, isLoading, error } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    logIn(data.email, data.password, location, history);
    reset();
  };
  return (
    <div className="col-md-4 mx-auto add-mobile">
      <h2 className="text-center my-4 text-success">Please Login here</h2>
      {!isLoading && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="w-100 form-control my-3"
            placeholder="Enter your email"
            {...register("email")}
          />
          <input
            className="w-100 form-control my-3"
            type="password"
            placeholder="Password"
            {...register("password")}
          />

          {/* errors will return when field validation fails  */}
          <input
            type="submit"
            className="btn-regular btn-block text-center"
            value="Login"
          />
        </form>
      )}
      {isLoading && <Spinner animation="border" />}
      {error && (
        <Alert className="mt-4" variant="danger">
          {error}
        </Alert>
      )}
      <Link style={{ textDecoration: "none" }} to="/register">
        Are you new user? please register
      </Link>
    </div>
  );
};

export default Login;
