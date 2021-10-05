import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import "./About.css";

function About() {
  return (
    <Container id="section-spacing">
      <h1 className="text-white text-center">Our Teachers</h1>
      <p className="text-white text-center w-50 mx-auto">Education requires costly resources, like time and money, which are often hard to find. But those who do invest these resources, often end up richer – not just because they often improve their financial situation, but because their minds are richer too.</p>
      <Row xs={1} md={2} className="g-4" id="custom-r">
        <Col>
          <Card>
            <Card.Img variant="top" src="https://us.123rf.com/450wm/serezniy/serezniy1809/serezniy180939232/110035288-beautiful-young-teacher-explaining-math-formulas-written-on-blackboard.jpg?ver=6" />
            <Card.Body>
              <Card.Title>Name : Zinia</Card.Title>
              <Card.Text> Subject : Math</Card.Text>
              <Card.Text> Contact : +1111111111</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://i.guim.co.uk/img/media/b897974dce4559ebe02af27e10c475068ead46a8/0_0_4000_2400/master/4000.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=a53a3c7714a215af7051daea5b14971c" />
            <Card.Body>
              <Card.Title>Name : Abu Rony</Card.Title>
              <Card.Text> Subject : Physic</Card.Text>
              <Card.Text> Contact : +222222222</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://www.thebalancecareers.com/thmb/mA1EU2tgVbzc6vkoreIvq_uIlok=/1885x1414/smart/filters:no_upscale()/teacher-pointing-while-teaching-in-classroom-962347986-75ce5f976522477686ca12d3e7972054.jpg" />
            <Card.Body>
              <Card.Title>Name : Abu Taher</Card.Title>
              <Card.Text> Subject : English</Card.Text>
              <Card.Text> Contact : +000000000</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src="https://cdn.elearningindustry.com/wp-content/uploads/2013/08/321-free-tools-for-teachers-free-educational-technology-1024x574.png" />
            <Card.Body>
              <Card.Title>Name : Afroza</Card.Title>
              <Card.Text> Subject : Bangla</Card.Text>
              <Card.Text> Contact : +333333333</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
}

export default About;
