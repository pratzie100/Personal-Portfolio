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
        <Container className="home-content" style={{ paddingTop: '100px' }}>
          <Row>
            <Col md={8} className="home-header">
              <h1
                style={{ paddingBottom: '15px', fontSize: '2.5rem' }}
                className="heading"
              >
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name" style={{ fontSize: '2.5rem' }}>
                I'M
                <strong className="main-name" style={{ color: '##6c63ff' }}> PRATYUSH KARGETI</strong>
              </h1>

              <div className="typing-homeclass" style={{ marginTop: '20px', fontSize: '1.5rem' }}>
                <Typing />
              </div>
              <div className="sociallink-home" style={{ marginTop: '20px' }}>
                <ul className="homeaboutsociallinks" style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
                  <li className="socialicons" style={{ margin: '0 10px' }}>
                    <a
                      href="https://github.com/pratzie100"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                      style={{ color: '#6c63ff', fontSize: '2rem' }}
                    >
                      <AiFillGithub />
                    </a>
                  </li>
                  <li className="socialicons" style={{ margin: '0 10px' }}>
                    <a
                      href="https://www.linkedin.com/in/pratyush-kargeti-576270285/"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                      style={{ color: '#6c63ff', fontSize: '2rem' }}
                    >
                      <FaLinkedinIn />
                    </a>
                  </li>
                  <li className="socialicons" style={{ margin: '0 10px' }}>
                    <a
                      href="https://t.me/PratyushKargeti"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                      style={{ color: '#6c63ff', fontSize: '2rem' }}
                    >
                      <FaTelegramPlane />
                    </a>
                  </li>
                  <li className="socialicons" style={{ margin: '0 10px' }}>
                    <a
                      href="https://twitter.com/pratyush13390"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                      style={{ color: '#6c63ff', fontSize: '2rem' }}
                    >
                      <AiFillTwitterSquare />
                    </a>
                  </li>
                  <li className="socialicons" style={{ margin: '0 10px' }}>
                    <a
                      href="https://mail.google.com/mail/?view=cm&fs=1&to=pratyushkargeti1313@gmail.com"
                      target="_blank"
                      rel="noreferrer"
                      className="iconcolour homesocialicons"
                      style={{ color: '#6c63ff', fontSize: '2rem' }}
                    >
                      <FaGoogle />
                    </a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={4} style={{ paddingBottom: '20px', textAlign: 'center' }}>
              <div className="img-home-main">
                <Tilt>
                  <Fade cascade>
                    <img
                      src="./profile.png"
                      alt="home pic"
                      className="img-fluid"
                      style={{ maxWidth: '100%', height: 'auto' }}
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
