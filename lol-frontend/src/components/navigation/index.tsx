import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
        style={{
          width: "45%",
          fontSize: ".9rem",
          textShadow: "1px 1px #000"
        }}
      >
        <Link to="/story">Story</Link>
        <Link to="/featured">Features</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/register">Sign up</Link>
      </nav>
    </TopBar>
  );
}
