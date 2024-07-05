import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaLinkedinIn, FaTelegramPlane, FaGoogle } from "react-icons/fa";
import { AiFillGithub, AiFillTwitterSquare } from "react-icons/ai";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Pratyush Kargeti</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year} Pratyush Kargeti</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
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
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
