import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";

const Makeadmin = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };
  // console.log(email);
  const handleAdminSubmit = (e) => {
    e.preventDefault();
    // alert("sdfs");
    const user = { email };
    // console.log(user);
    fetch("https://enigmatic-escarpment-96711.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="col-md-4 mx-auto">
      <h2>Make an Admin</h2>
      <form onSubmit={handleAdminSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Email"
          onBlur={handleOnBlur}
        />
        <input
          className="btn btn-info mt-2 text-center"
          type="submit"
          value="Make Admin"
        />
      </form>
    </div>
  );
};

export default Makeadmin;
