import React, { useEffect, useState } from "react";
import "./Services.css";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`./fakeData1.json`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  // console.log(services);

  return (
    <div>
      <Container>
        <Row xs={1} sm={2} md={2} className="g-4">
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
