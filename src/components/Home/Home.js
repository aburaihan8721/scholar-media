import React from "react";
import "./Home.css";
import Services from "../Services/Services";
import { Container } from "react-bootstrap";

function Home() {
  return (
    <div>
      <Container>
        <h1 className="text-center">Our Services</h1>
        <Services></Services>
      </Container>
    </div>
  );
}

export default Home;
