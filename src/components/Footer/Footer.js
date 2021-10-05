import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "react-bootstrap/Container";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="bg-dark text-white">
      <Container fluid>
        <Row className="p-5">
          <Col className="border m-2 p-3">
            <h4>Scholar Media</h4>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </Col>
          <Col className="border m-2 p-3">
            <h4>Get help</h4>
            <ul>
              <li>
                <Link to="">FAQ</Link>
              </li>
              <li>
                <Link to="">Math</Link>
              </li>
              <li>
                <Link to="">English</Link>
              </li>
              <li>
                <Link to="">Physic</Link>
              </li>
              <li>
                <Link to="">Chemistry</Link>
              </li>
            </ul>
          </Col>
          <Col className="border m-2 p-3">
            <h4>Online Support</h4>
            <ul>
              <li>
                <Link to="">+0202020202</Link>
              </li>
              <li>
                <Link to="">+0303030303</Link>
              </li>
              <li>
                <Link to="">+0404040404</Link>
              </li>
              <li>
                <Link to="">+0505050505</Link>
              </li>
            </ul>
          </Col>
          <Col className="border m-2 p-3">
            <h4>Follow Us</h4>
            <div className="">
              <Link to="" className="d-block">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
              <Link to="" className="d-block">
                <FontAwesomeIcon icon={faFacebookF} />
              </Link>
              <Link to="" className="d-block">
                <FontAwesomeIcon icon={faTwitter} />
              </Link>
              <Link to="" className="d-block">
                <FontAwesomeIcon icon={faInstagram} />
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
