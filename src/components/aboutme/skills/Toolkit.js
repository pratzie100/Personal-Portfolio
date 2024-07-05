import React from 'react';
import { Link } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

export default function Toolkit() {
  const iconStyle = {
    margin: '10px', // Adjust the margin between icons
    width: '60px', // Increase the width of the icons
    height: '60px', // Increase the height of the icons
  };

  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary" to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Tools I Use</h1>
      </Zoom>
      <div align="center" style={{ margin: '20px 0' }}>
        <a href="https://www.w3.org/html/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/html-5.png" alt="HTML5" style={iconStyle}/>
        </a>
        <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/css3.png" alt="CSS3" style={iconStyle}/>
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/javascript--v2.png" alt="JavaScript" style={iconStyle}/>
        </a>
        <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/bootstrap.png" alt="Bootstrap" style={iconStyle}/>
        </a>
        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/react-native.png" alt="React" style={iconStyle}/>
        </a>
        <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/nodejs.png" alt="Node.js" style={iconStyle}/>
        </a>
        <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" alt="C++" style={iconStyle}/>
        </a>
        <a href="https://www.java.com" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" alt="Java" style={iconStyle}/>
        </a>
        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/python--v2.png" alt="Python" style={iconStyle}/>
        </a>
        <a href="https://www.php.net/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/officel/48/000000/php-logo.png" alt="PHP" style={iconStyle}/>
        </a>
        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/mongodb.png" alt="MongoDB" style={iconStyle}/>
        </a>
        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/git.png" alt="Git" style={iconStyle}/>
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/ios-glyphs/48/000000/github.png" alt="GitHub" style={iconStyle}/>
        </a>
        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/visual-studio-code-2019.png" alt="VSCode" style={iconStyle}/>
        </a>
        <a href="https://www.jetbrains.com/pycharm/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/pycharm.png" alt="PyCharm" style={iconStyle}/>
        </a>
        <a href="https://www.postman.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" style={{ ...iconStyle, width: '55px', height: '55px' }}/>
        </a>
        <a href="https://www.tensorflow.org/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/tensorflow.png" alt="TensorFlow" style={iconStyle}/>
        </a>
        <a href="https://numpy.org/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/numpy.png" alt="Numpy" style={iconStyle}/>
        </a>
        <a href="https://pandas.pydata.org/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/pandas.png" alt="Pandas" style={iconStyle}/>
        </a>
        <a href="https://opencv.org/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/opencv.png" alt="OpenCV" style={iconStyle}/>
        </a>
        <a href="https://colab.research.google.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/google-colab.png" alt="Google Colab" style={iconStyle}/>
        </a>
        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
          <img src="https://img.icons8.com/color/48/000000/mysql-logo.png" alt="MySQL" style={iconStyle}/>
        </a>
      </div>
    </div>
  );
}
