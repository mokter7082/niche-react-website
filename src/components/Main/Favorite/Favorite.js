import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Mobile from "../Mobile/Mobile";

const Favorite = () => {
  const [mobiles, setMobies] = useState([]);
  useEffect(() => {
    fetch("https://enigmatic-escarpment-96711.herokuapp.com/allMobile")
      .then((res) => res.json())
      .then((data) => setMobies(data));
  }, []);
  return (
    <div className="container">
      <h2 className="text-success text-center my-4">Favorite Items</h2>
      <Row xs={1} md={4} className="g-4">
        {mobiles.slice(6, 10).map((mobile) => (
          <Mobile key={mobile._id} mobiles={mobile}></Mobile>
        ))}
      </Row>
    </div>
  );
};

export default Favorite;
