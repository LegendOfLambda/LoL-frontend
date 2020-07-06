import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import "./navigation.scss";

import Lambda from "../../assetts/lambda.png";

const TopBar = styled.div`
  display: flex;
  font-family: "Trade Winds", cursive;
  padding: 2%;
  margin-left: 7%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
    margin-left: 0;
    margin: 0 auto;
  }
`;

var navContainer = document.getElementById("navBar");

// Get all buttons with class="nav" inside the container
var navItems = document.getElementsByClassName("navItem");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", function(this: { className: string }) {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    console.log(this.className);
  });
}

export default function NavBar() {
  return (
    <TopBar>
      <Link className="h1" to="/">
        <h1>
          Legend of Lambda
          <img src={Lambda} alt="Lambda School logo" />
        </h1>
      </Link>
      <nav
        id="navBar"
        style={{
          width: "45%",
          fontSize: ".9rem",
          textShadow: "1px 1px #000"
        }}
      >
        <NavLink
          activeClassName="navbar active"
          className="navItem"
          to="/story"
        >
          Story
        </NavLink>
        <NavLink
          activeClassName="navbar active"
          className="navItem"
          to="/features"
        >
          Features
        </NavLink>
        <NavLink
          activeClassName="navbar active"
          className="navItem"
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          activeClassName="navbar active"
          className="navItem"
          to="/register"
        >
          Sign up
        </NavLink>
      </nav>
    </TopBar>
  );
}
