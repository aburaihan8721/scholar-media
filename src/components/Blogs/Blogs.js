import React from "react";
import Card from "react-bootstrap/Card";
import "./Blogs.css";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
function Blogs() {
  return (
    <Container>
      <Card className="text-center mb-4">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Online Learning</Card.Title>
          <Card.Text>
            Canadian leaders hold a more positive of the learning outcomes in
            online courses than counterparts surveyed in the United States
            during the same time period. “The 2018 survey results illustrate
            that most Canadian post-secondary institutions see online learning
            as critical to their future academic plans; particularly as it
            relates to increasing access for students,” says Tricia Donovan ...
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>

      <Card className="text-center mb-4">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Custom E-Learning</Card.Title>
          <Card.Text>
            Easy to customise and manage. Create and publish courses with no
            additional tools needed. We design and build custom Learning
            Management Systems for your business' needs. Bristol based. Call us
            now. UK based. Deliver training online. Services: E-Learning
            Development, LMS & Web Design, Learn Management Systems.
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
      <Card className="text-center mb-4">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Digital Learning</Card.Title>
          <Card.Text>
            Discover the Incident Command System (ICS) & how to create an
            emergency response strategy. Learn how to work in a Section in
            different roles to guide an effective response strategy. Lead a
            crisis response. ICS Training. NAIT CADEM. Understand ICS. Expert
            instructors. Courses: ICS 100, ICS 200, ICS 300, ECC Operations, The
            Command Staff, The Operations Section, The Planning Section.
          </Card.Text>
          <Button variant="primary">Read More</Button>
        </Card.Body>
        <Card.Footer className="text-muted"></Card.Footer>
      </Card>
    </Container>
  );
}

export default Blogs;
