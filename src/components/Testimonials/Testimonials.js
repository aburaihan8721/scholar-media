import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div>
      <Container>
        <h1 className="text-white text-center">What Our Students Says</h1>
        <p className="text-white text-center mb-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
          distinctio.
        </p>

        <Row id="c-style">
          <Col className="border p-3" id="col-style">
            <img
              src="https://www.mccnh.edu/images/mcc/admissions/new-student-secondary.jpg"
              alt="profile img"
            />
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                vitae ducimus molestiae pariatur sint asperiores sit quisquam
                illum facilis unde.
              </p>
              <h3>Kobir Mahamud</h3>
            </div>
          </Col>
          


          <Col className="border p-3" id="c-testimonials">
            <img
              src="https://ceduema.com/wp-content/uploads/2014/01/college-student-520x378.jpg"
              alt="profile img"
            />
            <div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
                vitae ducimus molestiae pariatur sint asperiores sit quisquam
                illum facilis unde.
              </p>
              <h3>Sadia Sultana</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Testimonials;
