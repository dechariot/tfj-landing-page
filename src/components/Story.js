import React from "react";
import { Container, Carousel } from "react-bootstrap";

export default function Story() {
  //CSS===========================
  const story = {
    padding: "2rem 0",
    maxWidth: "700px",
    margin: "0 auto",
    backgroundColor: "#5804ff",
  };
  const storyTitle = {
    fontWeight: "600",
    color: "white",
    paddingBottom: "0.5rem",
  };
  const carousel = {
    height: "200px",
  }
  const storyText = {
    fontWeight: "300",
    textAlign: "justify",
    color: "white",
    maxWidth: "400px",
    margin: "0 auto",
  };
  //===========================CSS
  return (
    <div style={{backgroundColor:"#5804ff"}}>
      <Container style={story}>
        <h2 style={storyTitle}>
          MY STORY
        </h2>

        <Carousel interval="3000" fade="true" prevIcon="" nextIcon="" style={carousel}>
          <Carousel.Item >
            <p style={storyText}>The motivation what makes to create this project is that I interest a lots in Tarot. I had a occasion to join a workshop about psychology. A Speaker who used a Deviant Moon Tarot to show off some relations between tarot and psychology. I was impressed and that person inspired me to go into the huge Tarot's World. </p>
          </Carousel.Item>
          <Carousel.Item>
           <p style={storyText}>
           Although many sites and apps are similar with my web app but the problem is that they seem too complicated to use. That's why I want to make some things easy to use with minimalist design.</p>
          </Carousel.Item>
          <Carousel.Item>
            <p style={storyText}>
            Lastly, I want this app as a friend or healer to heal the tarots lovers who are in trouble in life to send them some advises to makes them can face to face with the problems and give they some optional directions in their troubles.
            </p>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
}
