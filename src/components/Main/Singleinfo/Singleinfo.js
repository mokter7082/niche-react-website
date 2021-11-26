import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../../Hooks/useAuth";
import "./Singleinfo.css";

const Singleinfo = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const [mobile, setMobile] = useState({});
  const { user } = useAuth();
  useEffect(() => {
    fetch(`https://enigmatic-escarpment-96711.herokuapp.com/mobile/${id}`)
      .then((res) => res.json())
      .then((data) => setMobile(data));
  }, []);
  const onSubmit = (data) => {
    data.userPrice = mobile?.price;
    data.mobileName = mobile?.mobileName;
    data.userEmail = user?.email;
    // data.serviceName = service?.adName;
    // data.ticketPrice = service?.ticketPrice;
    data.status = "pending";
    fetch("https://enigmatic-escarpment-96711.herokuapp.com/placeOrder", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("insert Success");
          reset();
        }
      });
    console.log(data);
  };
  return (
    <div className="container row mt-5" style={{ color: "black" }}>
      <div className="col-md-6">
        <img src={mobile.imgUrl} className="viewCart" alt="" />
        <h4>{mobile.mobileName}</h4>
        <h5>{mobile.mobileResolution}</h5>
        <h5>Price: {mobile.price}TK</h5>
      </div>
      <div className="col-md-6">
        <h2>Shiping to</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <input
            className="mb-1"
            placeholder="Shiping Name"
            {...register("userName")}
          />{" "}
          <br />
          {/* include validation with required or other standard HTML validation rules */}
          {/* register your input into the hook by invoking the "register" function */}
          <input
            placeholder="Shiping Address"
            {...register("shipingAddress")}
          />{" "}
          <br />
          {/* include validation with required or other standard HTML validation rules */}
          <input
            className="my-2"
            placeholder="mobile Number"
            {...register("mobile", { required: true })}
          />{" "}
          <br />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}
          <input type="submit" value="place order" />
        </form>
      </div>
    </div>
  );
};

export default Singleinfo;

{
  /* <Card className="bg-dark text-white">
<Card.Img src={mobile.imgUrl} className="viewCart" alt="Card image" />
<Card.ImgOverlay>
  <Card.Title>{mobile.mobileName}</Card.Title>
  <Card.Text>
    This is a wider card with supporting text below as a natural lead-in
    to additional content. This content is a little bit longer.
  </Card.Text>
  <Card.Text>Last updated 3 mins ago</Card.Text>
</Card.ImgOverlay>
</Card> */
}
