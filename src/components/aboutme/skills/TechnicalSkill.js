import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Soft Skill
        </Link>
        <Link className="btn btn-primary" to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Fade bottom>
        <h1 className="mt-4 text-center">Technical Skills</h1>
      </Fade>
      <div className="mt-5">
        <Container>
          <Row className="g-5">
            <Col md={4}>
              <Zoom>
                <div className="text-center">
                  <h2>Languages</h2>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    <li>C</li>
                    <li>C++</li>
                    <li>Java</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>PHP</li>
                    <li>JavaScript</li>
                    <li>SQL</li>
                    <li>ReactJS</li>
                    <li>NodeJS</li>
                    <li>EJS</li>
                    <li>ExpressJS</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
              </Zoom>
            </Col>
            <Col md={4}>
              <Zoom>
                <div className="text-center">
                  <h2>Tools & Frameworks</h2>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    <li>GitHub</li>
                    <li>Git Bash (Git Version Control)</li>
                    <li>XAMPP (database connectivity using PHP)</li>
                    <li>VSCode</li>
                    <li>CodeBlocks</li>
                    <li>Postman</li>
                    <li>Joi</li>
                    <li>MongoDB Compass</li>
                    <li>Flex (lexical analyzer)</li>
                    <li>Bison (parser generator)</li>
                  </ul>
                </div>
              </Zoom>
            </Col>
            <Col md={4}>
              <Zoom>
                <div className="text-center">
                  <h2>Machine Learning</h2>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    <li>TensorFlow</li>
                    <li>Keras</li>
                    <li>Scikit-learn</li>
                    <li>Matplotlib</li>
                    <li>Numpy</li>
                    <li>Pandas</li>
                    <li>Seaborn</li>
                    <li>OpenCV</li>
                    <li>GridSearchCV (hyper-parameter tuning)</li>
                    <li>Google Colab</li>
                    <li>Jupyter Notebook</li>
                    <li>Anaconda Prompt (Miniconda3)</li>
                  </ul>
                </div>
              </Zoom>
            </Col>
            <Col md={{ span: 4, offset: 4 }}>
              <Zoom>
                <div className="text-center">
                  <h2>Additional Proficiency</h2>
                  <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                    <li>Computer Networks</li>
                    <li>Operating Systems</li>
                    <li>Databases</li>
                    <li>Data Structures & Algorithms</li>
                    <li>Theory of Computation</li>
                  </ul>
                </div>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
