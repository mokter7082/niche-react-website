import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Mobile from "../Mobile/Mobile";

const Explore = () => {
  const [mobiles, setMobies] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-escarpment-96711.herokuapp.com/allMobile")
      .then((res) => res.json())
      .then((data) => setMobies(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-center text-success mt-4">Explore All Products</h2>
      <Row xs={1} md={3} className="g-4">
        {mobiles.map((mobile) => (
          <Mobile key={mobile._id} mobiles={mobile}></Mobile>
        ))}
      </Row>
    </div>
  );
};

export default Explore;
