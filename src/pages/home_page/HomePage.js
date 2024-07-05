import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Typing from "./Typing";
import Tilt from "react-parallax-tilt";
import AboutmeContainer from "../../components/aboutme/aboutmeContainer";
import Fade from "react-reveal/Fade";

import { FaLinkedinIn, FaTelegramPlane, FaGoogle } from "react-icons/fa";
import { AiFillGithub, AiFillTwitterSquare } from "react-icons/ai";

import Certification from "../../components/certificate/Certification";
import Projects from "../../components/projects/Projects";
import Contactus from "../../components/contactus/Contactus";

export default function Home() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: 15, fontSize: "175px" }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> PRATYUSH KARGETI</strong>
              </h1>

              <div className="typing-homeclass">
                <Typing />
              </div>
              <div className="sociallink-home">
                <ul className="homeaboutsociallinks">

                  <li className="socialicons">
  <a
    href="https://github.com/pratzie100"
    target="_blank"
    rel="noreferrer"
    className="iconcolour homesocialicons"
  >
    <AiFillGithub />
  </a>
</li>
<li className="socialicons">
  <a
    href="https://www.linkedin.com/in/pratyush-kargeti-576270285/"
    target="_blank"
    rel="noreferrer"
    className="iconcolour homesocialicons"
  >
    <FaLinkedinIn />
  </a>
</li>
<li className="socialicons">
  <a
    href="https://t.me/PratyushKargeti"
    target="_blank"
    rel="noreferrer"
    className="iconcolour homesocialicons"
  >
    <FaTelegramPlane />
  </a>
</li>
<li className="socialicons">
  <a
    href="https://twitter.com/pratyush13390"
    target="_blank"
    rel="noreferrer"
    className="iconcolour homesocialicons"
  >
    <AiFillTwitterSquare />
  </a>
</li>
<li className="socialicons">
  <a
    href="https://mail.google.com/mail/?view=cm&fs=1&to=pratyushkargeti1313@gmail.com"
    target="_blank"
    rel="noreferrer"
    className="iconcolour homesocialicons"
  >
    <FaGoogle />
  </a>
</li>

                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: 20 }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      src="./profile.png"
                      alt="home pic"
                      className="img-fluid"
                    />
                  </Fade>
                </Tilt>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <AboutmeContainer />
      <Certification />
      <Projects />
      <Contactus />
    </section>
  );
}
