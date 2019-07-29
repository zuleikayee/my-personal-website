import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Nav, Container, Row, Col, Button, Card, Form, FormControl, Carousel } from 'react-bootstrap';
import profpic from './img/profpic2.jpg';
import logo from './img/icon.png';
import logo2 from './img/ZULEIKA.png';
import dummy from './img/dummy.jpg';
import linkedin from './img/linkedin.png';
import github from './img/github.png';

// interests jpg files
import football1 from './img/football1.jpg';
import football2 from './img/football2.jpg';
import football3 from './img/football3.jpg';
import foodie1 from './img/foodie1.jpg';
import foodie2 from './img/foodie2.jpg';
import foodie3 from './img/foodie3.jpg';
import cooking1 from './img/cooking1.jpg';
import cooking2 from './img/cooking2.jpg';
import cooking3 from './img/cooking3.jpg';
import dogs1 from './img/dogs1.jpg';
import dogs2 from './img/dogs2.jpg';
import dogs3 from './img/dogs3.jpg';

function App() {

  return (
    <html>
    <div className="App">
      <header>        
        <script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
        <Navbar className="navbar-bg" fixed="top" expand="lg">
          <Navbar.Brand href="#home">
            <img
              src={logo}
              className="d-inline-block align-top logo"
              alt="logo"
            />
            {/* <img
              src={logo2}
              className="d-inline-block align-top logo"
              alt="logo"
            /> */}
          </Navbar.Brand>
          <br/>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              
            </Nav>
            <Nav className="nav-collapse">
              <Nav.Link href="#home" className="links">about me</Nav.Link>
              <Nav.Link href="#work" className="links">interests</Nav.Link>
              <Nav.Link href="#contact" className="links">contact</Nav.Link>
              <Nav.Link href="#socialmedia" className="links">social media</Nav.Link>
              {/* <Form inline className="searchbar">
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-secondary">Search</Button>
              </Form> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
      <body className="body">
        <div>
          <div id="home">
            <Container>
              <Row className="home-row">
                <Col className="intro">
                  <div className="vertical-line"></div>
                  <p className="intro-header">Hi, I'm Zuleika Yee</p>
                  <p className="intro-details">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                    <div className="profiles">
                      <p className="viewprofile">View Profile: </p>
                      <Button variant="outline-light" className="linkedin-button"><a className="linkedin-link" href='https://www.linkedin.com/in/zuleika-yee-7841b5180/'><img src={linkedin} className="linkedin-logo"/></a></Button>
                      <Button variant="outline-light" className="github-button"><a className="github-link" href='https://www.github.com/zuleikayee'><img src={github} className="github-logo"/></a></Button>
                    </div>
                  
                </Col>
                <Col className="picture">
                  <img src={profpic} className="intro-profpic"></img>
                </Col>
              </Row>
            </Container>
          </div>
          <div id="work">
            <h3 className="work-header">interests</h3>
            <Container>
              <Row className="work-row work-webdev">
                <Col sm={4} className="work-img-col">
                  <Carousel className="work-carousel">
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={football1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={football2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={football3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col sm={8} className="work-details-col">
                  <h3 className="work-details-header">Football/Soccer</h3>
                  <p className="work-details-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
              </Row>
              <Row className="work-row work-androiddev">
                <Col sm={4} className="work-img-col">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={foodie1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={foodie2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={foodie3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col sm={8} className="work-details-col">
                  <h3 className="work-details-header">Food Trips</h3>
                  <p className="work-details-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
              </Row>
              <Row className="work-row work-windowsdev">
                <Col sm={4} className="work-img-col">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={cooking1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={cooking2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={cooking3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col sm={8} className="work-details-col">
                  <h3 className="work-details-header">Cooking</h3>
                  <p className="work-details-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
              </Row>
              <Row className="work-row work-crossplatformmobiledev">
                <Col sm={4} className="work-img-col">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={dogs1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={dogs2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={dogs3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel>
                </Col>
                <Col sm={8} className="work-details-col">
                  <h3 className="work-details-header">Dogs</h3>
                  <p className="work-details-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
              </Row>
              <Row className="work-row work-iosdev">
                <Col sm={4} className="work-img-col">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={dummy}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={dummy}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={dummy}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel> 
                </Col>
                <Col sm={8} className="work-details-col">
                  <h3 className="work-details-header">Math and Programming</h3>
                  <p className="work-details-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </Col>
              </Row>
            </Container>
          </div>
          <div id="contact">
            <h3 className="contact-header">contact</h3>
            <div className="contact-details">
              <h3 className="contact-details-header">Mobile</h3>
              <p className="contact-details-text">09477564237</p>
              <p className="contact-details-text">09054791547</p>
            </div>
            <div className="contact-details">
              <h3 className="contact-details-header">E-mail</h3>
              <p className="contact-details-text">zuleikayee@gmail.com</p>
              <p className="contact-details-text">zuleikayee@outlook.com</p>
            </div>
            <div className="contact-details">
              <h3 className="contact-details-header">Skype</h3>
              <a className="contact-details-text">zuleikayee_1</a>
            </div>
          </div>
          <div id="socialmedia">
            <h3 className="contact-header">social</h3>
            <div className="contact-details">
              <h3 className="contact-details-header">Twitter</h3>
              <a className="contact-details-text">zuleikayeee</a>
            </div>
            <div className="contact-details">
              <h3 className="contact-details-header">Instagram</h3>
              <a className="contact-details-text">zuleikayee</a>
            </div>
            <div className="contact-details">
              <h3 className="contact-details-header">Facebook</h3>
              <a className="contact-details-text">Zuleika Yee / zuleikayeee</a>
            </div>
          </div>
        </div>
      </body>
      <div id="footer">
      </div>
    </div>
    </html>
  );
}


export default App;
