import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import GooglePlay from "../assetts/google-play.png";
import AppleStore from "../assetts/apple-store.png";
import Lambda from "../assetts/lambda.png";

const NavContainer = styled.nav`
  font-size: 1.2rem;
  display: flex;
  padding: 2%;
  justify-content: space-between;
  align-items: center;
`;

const HeadingContainer = styled.div`
  padding: 2%;
  display: flex;
`;

const HeadingContent = styled.div`
  font-size: 1rem;
  margin-top: 5%;
  margin-left: 3%;
  width: 47.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 50vh;
`;

const AppButton = styled.img`
  width: 50%;
`;

function LandingPage() {
  return (
    <div className="landing-page">
      <NavContainer>
        <h1>
          Legend of Lambda
          <img
            style={{ height: "40px", marginLeft: "10px" }}
            src={Lambda}
            alt="Lambda School logo"
          />
        </h1>
        <div
          style={{
            width: "50%",
            fontSize: ".9rem",
            textShadow: "1px 1px #000"
          }}
        >
          <Link
            to="/story"
            style={{ color: "#fff", textDecoration: "none", margin: "2%" }}
          >
            Story
          </Link>
          <Link
            style={{ color: "#fff", textDecoration: "none", margin: "2%" }}
            to="/featured"
          >
            Features
          </Link>
          <Link
            style={{ color: "#fff", textDecoration: "none", margin: "2%" }}
            to="/contact"
          >
            Contact
          </Link>
          <Link
            style={{
              color: "#fff",
              background: "#BB1333",
              border: "1px solid #fff",
              borderRadius: "10px",
              boxShadow: "1px 1px 3px #000",
              textDecoration: "none",
              textShadow: "1px 1px #000",
              margin: "2%",
              padding: "3.5%"
            }}
            to="/register"
          >
            Sign up
          </Link>
        </div>
      </NavContainer>
      <HeadingContainer>
        <HeadingContent>
          <h2>Point and Click Adventure</h2>
          <p>
            Point and click adventure game with access to over 100+ rooms. Can
            you save the princess?
          </p>
          <div>
            <AppButton
              style={{ height: "67%", marginBottom: "3%" }}
              src={AppleStore}
              alt="Apple store button"
            />
            <AppButton src={GooglePlay} alt="google play store button" />
          </div>
        </HeadingContent>
        <HeadingContent>
          <Link to="/play-now" style={{ margin: "0 auto" }}>
            Play Now
          </Link>
        </HeadingContent>
      </HeadingContainer>
    </div>
  );
}

export default LandingPage;
