import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import "./Banner.css";

function Banner() {
  return (
    <Container>
      <div className="text-box">
        <h1>Country's Famous Schools</h1>
        <p>
          Education is the first step for people to gain the knowledge, critical
          thinking, empowerment and skills they need to make this world a better
          place.
        </p>
        <Link to="">
            <Button variant="outline-secondary">Visit Us To Know More</Button>
        </Link>
      </div>
    </Container>
  );
}

export default Banner;
