import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import GooglePlay from "../assetts/google-play.png";
import AppleStore from "../assetts/apple-store.png";
import Lambda from "../assetts/lambda.png";

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

const HeadingContainer = styled.div`
  padding: 2%;
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const HeadingContent = styled.div`
  font-family: "Seymour One", sans-serif;
  margin-top: 5%;
  margin-left: 3%;
  width: 47.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;

  @media (max-width: 1200px) {
    text-align: center;
    width: 100%;
    height: 100%;
  }
`;

const AppButton = styled.img`
  width: 30%;
  @media (max-width: 800px) {
    height: auto;
    width: 60%;
  }
  &:hover {
    cursor: pointer;
  }
  &:last-child {
    height: 150%;
    position: absolute;
    bottom: -25%;
    left: 30%;
    @media (max-width: 1200px) {
      left: 100%;
    }
  }
`;

function LandingPage() {
  return (
    <div className="landing-page">
      <TopBar>
        <h1>
          Legend of Lambda
          <img src={Lambda} alt="Lambda School logo" />
        </h1>
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
      <HeadingContainer>
        <HeadingContent>
          <div className="sub-content">
            <h2>Point and Click Adventure</h2>
            <p>
              Point and click adventure game with access to over 100+ rooms. Can
              you save the princess?
            </p>
            <div className="store-buttons">
              <AppButton src={AppleStore} alt="Apple store button" />
              <AppButton src={GooglePlay} alt="google play store button" />
            </div>
          </div>
        </HeadingContent>
        <HeadingContent>
          <Link className="play-button" to="/play-now">
            Play Now
          </Link>
        </HeadingContent>
      </HeadingContainer>
    </div>
  );
}

export default LandingPage;
