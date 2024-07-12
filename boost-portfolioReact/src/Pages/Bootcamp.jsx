import React from "react"
import {Tab, Row, Col, Nav, Card, CardImg, Button, Table, Container, ListGroup, ListGroupItem} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import shockedpika from "../assets/meme-pikachu.gif"

const Bootcamp = () => {
    return (
      <Container style={{ backgroundColor: '#322f31', color: '#b7b2a6', borderColor: 'hsla(0,0%,100%, .15)' }} fluid>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col xl={1}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link style={{borderRadius:'3px',borderColor: 'hsla(0,0%,100%, .15)' }} eventKey="first">Boot Camp</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Weekly Scores</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Program Feedback</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">My Mentors</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h4>Boot Camp Experience</h4>
                <p>
                  Attending a coding boot camp is an intensive and immersive experience. It often includes long hours, challenging projects, and constant learning. Participants gain practical skills in programming, software development, and problem-solving. The experience is designed to be transformative, equipping individuals with the necessary tools to start a career in tech.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h4>Projects</h4>
                <p> Here are a few things I have worked on </p>
                    <div className="cardContainerProject">

                    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col key={idx}>
          <Card style={{ backgroundColor: '#322f31', color: '#b7b2a6', borderColor: 'hsla(0,0%,100%, .15)', borderRadius: '3px' }}>
          <Card.Title>Project Name</Card.Title>
          <Card.Img variant="top" src={shockedpika} />
            <Card.Body>
              <Card.Text>
                This is where I would type up a 2 to 3 sentence summary on the project. But I haven't decided if I want to make a list of cards and hardcode it into vs code.
                OR, if I want to go through the hastle of creating an entire backend data base, which only sounds worse and gross.
                So i'll probably just write ou t the cards themselves. Hope you like the content. 

                <hr/>
                <Card.Text>Technology used</Card.Text>
                <ListGroup style={{ backgroundColor: '#322f31', color: '#b7b2a6', borderColor: 'hsla(0,0%,100%, .15)', borderRadius: '3px' }} variant="flush">
        <ListGroup.Item>Javascript</ListGroup.Item>
        <ListGroup.Item>React</ListGroup.Item>
        <ListGroup.Item>3am Tears</ListGroup.Item>
      </ListGroup>
                <Button href=""> View On Github</Button>
                {/* Add an onclick to open up a modal popup / open to another page, whichever you desire really */}
                <Button> Click to view project write up</Button> 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>


                    </div>

              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h4>Weekly Scores</h4>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Week</th>
                      <th>Score</th>
                      <th>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Week 1</td>
                      <td>85</td>
                      <td>Good understanding of basic concepts</td>
                    </tr>
                    <tr>
                      <td>Week 2</td>
                      <td>90</td>
                      <td>Excellent project work</td>
                    </tr>
                    <tr>
                      <td>Week 3</td>
                      <td>80</td>
                      <td>Needs improvement in debugging</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <h4>Program Feedback</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi scelerisque nisi, eu ullamcorper nisl nunc eu nisi. Duis ac tortor quis tortor ornare bibendum. Curabitur ut ullamcorper libero. Vivamus ac vestibulum nunc, eu suscipit lorem. Mauris convallis sapien eget augue dignissim, sed malesuada tortor volutpat.
                </p>


              <p></p>

              <p> Reflect back to when you first received news you were going to be a part of the BOOST Program. How did you feel? Was there anything you were really looking forward? Was there anything you were worried about? </p>
              <p> Excited, Grateful, terrified - I felt a full range of emotions because I was excited to be able to learn something that I had been struggling  trying to learn for years and I got to learn as a part of my day job. The news was like getting the best of both worlds. </p>
              <p>Learning as much as I could - However, I really wanted to see and learn more about how back end works. I had an idea of making something pretty but lacked the ability to make it work. </p>
              <p>Not being able to perform, falling behind the group, not understanding the material/failing the course. </p>

              <p>Think back to all of your projects, which one was your favorite? Why was it your favorite? What was your proudest moment with it? </p>
              <p>Proudest moment was with my final project because I got to try something new and some how it mostly came together! I was excited to show that I did learn the material and that could make something cool in a short amount of time. Even despite it not 100% working as intended, the proof of concept was beyond solid and anyone could pick up the project and know the intention. </p>


              <p>Think back to all of your projects, which one was your least favorite? Why was it your least favorite? What was your proudest moment with it? </p>
              <p>The dictionary app, it was my first time using Java in its entirety. IT was all around a frustrating experience. I couldn’t get things to work. I didn’t know where to start. None of my mentors were really giving me the logic I needed to move forward. But it all came together at the end. I was the most proud when stuff finally clicked and I was able to just start taking off with development and actually get it done on time to present. I was able to present without it breaking! That was great. </p>

              <p>Think about a moment that made you feel closer to your cohort members. What happened? What made you feel connected? Was there anything you wish you did to help connect more? </p>
              <p>I think the last two weeks after the project made me feel very close to the cohort. We were really in the weeds right after the layoffs and you could tell that morale was low. But more than ever people leaned on each other to help with different aspects of our individual projects. </p>

              <p>Now that you are past the bootcamp, think of your last three months. How do you feel? Can you see the growth you’ve accomplished? Go back to your first project on github and give yourself a code review. </p>

              <p>I definitely see the growth and I think going back to look at my first projects made me realize I should be more proud of myself and what I have accomplished. I struggled so much that all I could focus on was how much I was struggling and how far behind I constantly felt. It became overwhelming towards the end. I think I still need time for how much I’ve accomplished to really sink in.

              </p>
            


              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </Container>
    );
  };
  
export default Bootcamp;