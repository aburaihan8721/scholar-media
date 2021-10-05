import React, { useEffect, useState } from "react";
import "./Services.css";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Services() {

  // ======state for service data=====
  const [services, setServices] = useState([]);

  // =========loading service data==========
  useEffect(() => {
    fetch(`./fakeData1.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);


  return (
    <div className="mt-5 mb-5">
      <Container>
        <h1 className="text-center text-white mb-3">Our Services</h1>
        <p className="text-center text-white w-50 mx-auto">
          Getting education isn’t easy, and most students experience challenges
          during their degrees. The important thing is to believe in yourself
          and not give up.{" "}
        </p>

        <Row xs={1} sm={2} md={2} className="g-4">
          {/* ===========dynamic service data======== */}
          {services.map((service, idx) => (
            <Col key={idx}>
              <Card className="card-height">
                <Card.Img variant="middle" src={service.image} />
                <Card.Body>
                  <Card.Title>Service : {service.course}</Card.Title>
                  <Card.Text>Price : ${service.price}</Card.Text>
                  <Link to="/">
                    <Button variant="primary">More info</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Services;

// =============end===============
