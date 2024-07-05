import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineMail,
} from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function SocialMedia() {
  return (
    <div className="mt-4" style={{ textAlign: "center" }}>
      <Zoom left cascade>
        <h1>Connect with me</h1>
      </Zoom>
      <br />
      <br />
      <Container className="mt-5">
        <Row className="g-5" style={{ justifyContent: "center" }}>
          <Col md={2} style={{ margin: "0 auto" }}>
            <a
              href="https://github.com/pratzie100"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiFillGithub />
              </Zoom>
            </a>
          </Col>
          <Col md={2} style={{ margin: "0 auto" }}>
            <a
              href="https://linkedin.com/in/pratyush-kargeti-576270285"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiFillLinkedin />
              </Zoom>
            </a>
          </Col>
          <Col md={2} style={{ margin: "0 auto" }}>
            <a
              href="https://t.me/PratyushKargeti"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <FaTelegramPlane />
              </Zoom>
            </a>
          </Col>
          <Col md={2} style={{ margin: "0 auto" }}>
            <a
              href="https://x.com/pratyush13390"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiFillTwitterCircle />
              </Zoom>
            </a>
          </Col>
          <Col md={2} style={{ margin: "0 auto" }}>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pratyushkargeti1313@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <AiOutlineMail />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
