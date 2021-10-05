import React, { useEffect, useState } from "react";
import "./ServiceDetails.css";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

function ServiceDetails() {
  const [serviceDetails, setServiceDetails] = useState([]);

  useEffect(() => {
    fetch(`./fakeData2.json`)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  console.log(serviceDetails);

  return (
    <div>
      <Container className="mb-3">
        <Row xs={1} sm={2} md={3} className="g-4">
          {serviceDetails.map((serviceDetail, idx) => (
            <Col key={idx}>
              <Card className="service-detail-card">
                <Card.Img variant="top" src={serviceDetail.image} />
                <Card.Body>
                  <Card.Title>Service : {serviceDetail.course}</Card.Title>
                  <Card.Text>Price : ${serviceDetail.price}</Card.Text>
                  <Card.Text>{serviceDetail.des}</Card.Text>
                  <Link to="/">
                    <Button variant="primary">Enroll Now</Button>
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

export default ServiceDetails;
