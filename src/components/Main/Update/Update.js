import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";

const Update = () => {
  const { id } = useParams();
  const [mobile, setMobile] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //GET SINGLE VALUE WITH GET METHOD
  useEffect(() => {
    fetch(`https://enigmatic-escarpment-96711.herokuapp.com/mobile/${id}`)
      .then((res) => res.json())
      .then((data) => setMobile(data));
  }, []);

  const handleNameChange = (e) => {
    const updatedName = e.target.value;
    const updatedUser = {
      mobileName: updatedName,
      mobileColor: mobile.mobileColor,
    };
    setMobile(updatedUser);
  };
  const handleColorChange = (e) => {
    const updatedColor = e.target.value;
    const updatedUser = {
      mobileName: mobile.mobileName,
      mobileColor: updatedColor,
    };
    setMobile(updatedUser);
  };
  //const onSubmit = (data) => console.log(data);
  const mobileUpdate = (e) => {
    e.preventDefault();
    //SEND UPDATED TATA FROM CLIENT SETE
    axios
      .put(
        `https://enigmatic-escarpment-96711.herokuapp.com/mobile/${id}`,
        mobile
      )
      //   .then((res) => res.json())
      .then((data) => console.log(data));
    //********/
  };
  return (
    <div className="col-md-4 mx-auto mt-4">
      <form onSubmit={mobileUpdate}>
        <label htmlFor="">Mobile Name</label>
        <input
          type="text"
          className="form-control my-2"
          onChange={handleNameChange}
          value={mobile.mobileName || ""}
        />
        <label htmlFor="">Mobile Color</label>
        <input
          type="text"
          className="form-control my-2"
          onChange={handleColorChange}
          value={mobile.mobileColor || ""}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Update;
