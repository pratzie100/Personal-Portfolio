import React from "react";
import { FaHackerrank } from "react-icons/fa";
import {
  SiLeetcode,
  SiHackerearth,
  SiCodechef,
  SiCodeforces,
  SiStopstalk,
} from "react-icons/si";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";

export default function Ranking() {
  return (
    <div className="mt-4">
      <Zoom left cascade>
        <h1>My Coding Platforms</h1>
      </Zoom>
      <Container className="mt-5">
        <Row className="g-5">
          <Col md={2}>
            <a
              href="https://www.hackerrank.com/profile/codingboy100pk"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <FaHackerrank />
              </Zoom>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://leetcode.com/u/CodingBoy100/"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <SiLeetcode />
              </Zoom>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://www.hackerearth.com/@codingboy100"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <SiHackerearth />
              </Zoom>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://www.codechef.com/users/pratyushcp"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <SiCodechef />
              </Zoom>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://codeforces.com/profile/PRATYUSH.KARGETI"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <SiCodeforces />
              </Zoom>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://www.stopstalk.com/user/profile/algorithmicPK"
              target="_blank"
              rel="noreferrer"
              className="icon-colour home-social-icons"
            >
              <Zoom cascade>
                <SiStopstalk />
              </Zoom>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
