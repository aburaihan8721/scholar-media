import React from "react";
import "./Home.css";
import Services from "../Services/Services";
import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import Testimonials from "../Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <Container>
      <Banner></Banner>
      <Services></Services>
      <Testimonials></Testimonials>
      </Container>

    </div>
  );
}

export default Home;
