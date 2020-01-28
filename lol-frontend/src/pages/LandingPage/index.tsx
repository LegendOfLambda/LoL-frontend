import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import NavBar from "../../components/navigation";

import "./landing-page.scss";

const HeadingContainer = styled.div`
  padding: 2%;
  display: flex;
  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

const HeadingContent = styled.div`
  font-family: "Seymour One", sans-serif;
  margin-top: 2%;
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
      <div className="color-overlay">
        <video id="background-video" loop autoPlay>
          <source
            src="https://cdn.dribbble.com/users/1056629/videos/33440/shot_02-03_dribbble.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="image-overlay" />
        <NavBar />
        <HeadingContainer>
          <HeadingContent>
            <div className="sub-content">
              <h2>MUD Adventure Game</h2>
              <p>
                MUD adventure game with access to over 100+ rooms. The grump
                wizard needs your help brave one! <br />
                <br />
                Can you manuver the dungeion and rescue the princess?
              </p>
            </div>
          </HeadingContent>
          <HeadingContent>
            <Link className="play-button" to="/play-now">
              Start your journey
            </Link>
          </HeadingContent>
        </HeadingContainer>
      </div>
    </div>
  );
}

export default LandingPage;
