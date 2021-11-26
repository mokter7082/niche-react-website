import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Mobile = ({ mobiles }) => {
  const { _id, mobileName, mobileResolution, imgUrl } = mobiles;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{mobileName.slice(0, 20)}</Card.Title>
          <Card.Text>{mobileResolution}</Card.Text>
        </Card.Body>
        <div className="text-center my-2">
          <Link to={`/mobile/${_id}`}>
            <Button className="mx-2 btn-block">Order Now</Button>
          </Link>
        </div>
      </Card>
    </Col>
  );
};

export default Mobile;
