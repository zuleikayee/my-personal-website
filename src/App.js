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
import movies1 from './img/movies1.jpg';
import movies2 from './img/movies2.jpg';
import movies3 from './img/movies3.jpg';
import movies4 from './img/movies4.jpg';
import movies5 from './img/movies5.jpg';
import movies6 from './img/movies6.jpg';
import music1 from './img/music1.jpg';
import music2 from './img/music2.jpg';
import music3 from './img/music3.jpg';

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
                  <p className="intro-details">
                    I'm a Front End Developer at Awesome OS. 
                    I'm skilled at software development, mathematics and time management.
                    I sell coffee jelly as a sideline and play football/soccer to cope with adulting.
                    As of the moment, my ultimate goals are to gradually improve my technical skills, build my own business, and to continue playing my sport. 
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
              <Row className="work-row">
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
                  <p className="work-details-text">
                    I played football since the 5th grade.
                    Ever since, I have developed a passion for the sport that not many would understand.
                    When I was a student-athlete, I could wake up at 4:00am for training despite having classes for the whole day afterwards, while still being able to maintain good grades.
                    Football for me was a coping mechanism for problems I had in school and in general. 
                    Others might see it as something that eats up study and social time but the truth is, it made my life more joyful.
                    Now that I'm working the graveyard shift, I still see to it that I can play at least once a week.
                  </p>
                </Col>
              </Row>
              <Row className="work-row">
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
                  <p className="work-details-text">
                    I grew up with a family that recognizes the importance of food.
                    My parents would always treat us wherever we wanted to eat and serve us whatever food we craved for. 
                    Because of this, I grew up to be a foodie or a foodtrip enthusiast.
                    For me, tasting different kinds of food from different origins is an adventure.
                    My current goal as a foodie is to explore the oldest living restaurants and carinderias in Davao City. 
                  </p>
                </Col>
              </Row>
              <Row className="work-row">
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
                  <p className="work-details-text">
                    Back in the days, my sisters and I were fond of binge watching the Barefoot Contessa cooking series in the Food Network Channel. 
                    I personally find it fun to create something great from tiny simple things and being creative about it. 
                    I started off with cooking hotdogs, spam, instant noodles, and sunny side up eggs. 
                    After mastering sunny side ups, I became more confident in the kitchen and tried simple dishes like fried rice, sausage broccoli, and no-bake desserts. 
                    I dream of having my own spacious kitchen with complete equipments to harness my cooking skills more.
                  </p>
                </Col>
              </Row>
              <Row className="work-row">
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
                  <p className="work-details-text">
                    I was diagnosed with Asthma when I was younger, therefore being allergic to fur, but that did not hinder my love for dogs.
                    In fact, we have 7 dogs: Mhikko ✝, Mhikkai, Clark ✝, Zukko, Pukko, Kitkat and Lokki. 
                    They make me happy every single day.  
                  </p>
                </Col>
              </Row>
              <Row className="work-row">
                <Col sm={4} className="work-img-col">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={movies1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={movies2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={movies3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={movies4}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={movies5}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={movies6}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel> 
                </Col>
                <Col sm={8} className="work-details-col">
                  <h3 className="work-details-header">Movies and Television</h3>
                  <p className="work-details-text">
                    I haven't been a movie/tv enthusiast until I was in 3rd year college. 
                    My college friends suggested that I should watch the FRIENDS sitcom.
                    I enjoyed every bit of the series, thus I watched more comedy and mystery series in Netflix.
                    Some of my favorite tv series other than FRIENDS are Brooklyn Nine-nine, How to Get Away with Murder, Lucifer, Black Mirror, and You.
                    I also started watching the Star Wars films during the summer of 2018 because I had nothing to do.
                    Since then, I have been a fan. 
                    Some of my favorite films other than Star Wars are Harry Potter, The Shining, Bohemian Rhapsody, Mamma Mia, and MCU films.
                    
                  </p>
                </Col>
              </Row>
              <Row className="work-row">
                <Col sm={4} className="work-img-col">
                  <Carousel>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={music1}
                        alt="First slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={music2}
                        alt="Second slide"
                      />
                    </Carousel.Item>
                    <Carousel.Item>
                      <img
                        className="d-block work-img"
                        src={music3}
                        alt="Third slide"
                      />
                    </Carousel.Item>
                  </Carousel> 
                </Col>
                <Col sm={8} className="work-details-col">
                  <h3 className="work-details-header">Music</h3>
                  <p className="work-details-text">
                    My friends and family know that I cannot live without my earphones.
                    I always listen to music whenever I'm alone, at work or at home. 
                    It controls my mood and keeps me focused.
                    Some of my favorite artists are Maroon 5, Queen, and Khalid.
                    Although I do not support the K-pop industry, I love listening to BlackPink.
                    Disclaimer: I don't sing. 
                  </p>
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
