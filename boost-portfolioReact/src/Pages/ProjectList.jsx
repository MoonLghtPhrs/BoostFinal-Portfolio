import React from "react"
import {Tab, Row, Col, Nav, Card, CardImg, Button, Table, Container, ListGroup, ListGroupItem} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import shockedpika from "../assets/meme-pikachu.gif"

const ProjectList = () => {
    return (
<div>
<h4>Projects</h4>
                <p> Here are a few things I have worked on </p>
                    <div className="cardContainerProject">

                    <Row xs={1} md={2} lg={3} xl={4} className="g-4">
      {Array.from({ length: 12 }).map((_, idx) => (
        <Col key={idx}>
          <Card >
          <Card.Title>Project Name</Card.Title>
          <Card.Img variant="top" src={shockedpika} />
            <Card.Body>
              <Card.Text>
                This is where I would type up a 2 to 3 sentence summary on the project. But I haven't decided if I want to make a list of cards and hardcode it into vs code.
                OR, if I want to go through the hastle of creating an entire backend data base, which only sounds worse and gross.
                So i'll probably just write ou t the cards themselves. Hope you like the content. 

                <hr/>
                <Card.Text>Technology used</Card.Text>
                <ListGroup variant="flush">
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


</div>


    ) 
}
export default ProjectList