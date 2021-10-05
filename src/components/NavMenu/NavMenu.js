import React from "react";
import { Container, Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import "./NavMenu.css";

function NavMenu() {
  return (
    <div>
      <Navbar>
        <Container fluid id="c-padding">
          <Link to="/home" className="navbar-brand" id="c-brand">
            <img
              width="50px"
              height="50px"
              className="logo"
              src="https://www.pngitem.com/pimgs/m/4-43262_school-png-photo-transparent-school-logo-png-png.png"
              alt="logo"
            />{" "}
            Scholar Media
          </Link>
          <Nav className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  id="c-color"
                  to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  id="c-color"
                  to="/services"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Services
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  id="c-color"
                  to="/blogs"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  Blogs
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  id="c-color"
                  to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  About
                </NavLink>
              </li>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavMenu;
