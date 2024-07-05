import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import LightSpeed from 'react-reveal/LightSpeed';

export default function PersonalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">Technical Skill</Link>
        <Link className="btn btn-primary me-3" to="/personalskill">Soft Skill</Link>
        <Link className="btn btn-primary" to="/toolkit">Toolkit</Link>
      </div>
      <LightSpeed left cascade>
        <h1 className="mt-4 text-center">Soft Skills</h1>
      </LightSpeed>
      <div className="mt-4">
        <Container>
          <Row className="g-5 justify-content-center">
            <Col md={4} className="text-center">
              <LightSpeed left cascade>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  <li>Problem-solving</li>
                  <li>Active listening</li>
                  <li>Patience</li>
                  <li>Critical thinking</li>
                  <li>Creativity</li>
                  <li>Accountability</li>
                  <li>Confidence</li>
                  <li>Time and project management</li>
                </ul>
              </LightSpeed>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
