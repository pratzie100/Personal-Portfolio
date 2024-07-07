import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div>
      <Container>
        <Row className="mt-5">
          <Col md={5}>
            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                I am <b className="purple">Pratyush Kargeti, </b> 
                and I am persuing B.Tech in <b className="purple">Computer Science and Engineering </b> 
                from <b className="purple">Graphic Era University, </b> 
                Dehradun, India.
                <br />
                <br />
                I am proficient in various programming languages such as &nbsp;
                <b className="purple">
                  C, C++, Java, Python, HTML, CSS, PHP, JavaScript, SQL, ReactJS, NodeJS, EJS, ExpressJS, and MongoDB.
                </b>
                <br />
                <br />
                I also have experience working with frameworks and libraries such as &nbsp;
                <b className="purple">
                  TensorFlow, Keras, Scikit-Learn, Matplotlib, Numpy, Pandas, Seaborn, OpenCV, GridSearchCV, and Jupyter Notebook.
                </b>
                <br />
                <br />
                I have worked with various tech tools and frameworks including &nbsp;
                <b className="purple">
                  GitHub, Git Bash, XAMPP, VSCode, CodeBlocks, Postman, Joi, Flex, Bison, and MongoDB Compass.
                </b>
                <br />
                <br />
                I am passionate about coding and enjoy solving problems through <b className="purple">creative and efficient solutions.</b> 
                <br />
                <br />
                In my free time, I enjoy playing <b className="purple">badminton and cricket</b> as well as <b className="purple">listening to and playing music.</b>
              </p>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
