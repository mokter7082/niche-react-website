import React from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Register = () => {
  const { registerUser, isLoading, user, error } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    registerUser(data.email, data.password, data.displayName);
    // saveUser(data.displayName, data.email);
    reset();
  };
  return (
    <div className="col-md-4 mx-auto add-mobile">
      <h2 className="text-center my-4 text-success">Please Register here</h2>
      {!isLoading && (
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="w-100 form-control my-3"
            placeholder="Enter your Name"
            {...register("displayName")}
          />
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
            value="Register"
          />
        </form>
      )}
      {isLoading && <Spinner animation="border" />}
      {/* {user.email && (
        <Alert className="mt-1" variant="success">
          Registration Success
        </Alert>
      )} */}
      {error && (
        <Alert className="mt-4" variant="danger">
          {error}
        </Alert>
      )}
      <Link style={{ textDecoration: "none" }} to="/login">
        Are you register user? please login
      </Link>
    </div>
  );
};

export default Register;
