import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./Addmobile.css";

const Addmobile = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://enigmatic-escarpment-96711.herokuapp.com/addMobile", data)
      .then((res) => {
        console.log(res);
        if (res.status == 200) {
          alert("inset Success full");
          reset();
        }
      });
  };
  return (
    <div className="col-md-4 mx-auto add-mobile">
      <h2 className="text-center mt-4 text-success">Add Services</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="w-100 form-control my-2"
          placeholder="Mobile Name"
          {...register("mobileName")}
        />
        <input
          className="w-100 form-control my-2"
          placeholder="Mobile Color"
          {...register("mobileColor")}
        />
        <input
          className="w-100 form-control my-2"
          placeholder="Mobile Size"
          {...register("mobileSize")}
        />
        <input
          className="w-100 form-control my-2"
          placeholder="Mobile Resolution"
          {...register("mobileResolution")}
        />
        <input
          className="w-100 form-control my-2"
          placeholder="First Release"
          {...register("firstRelease")}
        />
        <input
          className="w-100 form-control my-2"
          placeholder="Price"
          {...register("price")}
        />
        <input
          className="w-100 form-control my-2"
          placeholder="Image Url"
          {...register("imgUrl")}
        />

        {/* errors will return when field validation fails  */}
        <input type="submit" className="btn-regular" value="Add Now" />
      </form>
    </div>
  );
};

export default Addmobile;
