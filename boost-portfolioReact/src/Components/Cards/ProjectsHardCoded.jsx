import React from "react";
import {
  Tab,
  Row,
  Col,
  Nav,
  Card,
  CardImg,
  Button,
  Table,
  Container,
  ListGroup,
  ListGroupItem,
  CardGroup,
  CardText,
  CardTitle,
  CardBody,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import shockedpika from "../../assets/meme-pikachu.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/ProjectCards.css";

const ProjectsHardCoded = () => {
  return (
    <>
      <Container fluid>
        <Row>
          {/* Three Columns per row */}
{/* Row 1 */}
          <Col>
            <Card className="projectCard">
              <CardTitle> LL&P Healthcare</CardTitle>
              <CardBody>
                <Card.Img variant="top" src={shockedpika} style={{width: "200px", height:"auto"}}  />
                <CardText>
                  <p>
                    {" "}
                    LL&P is a healthcare app that makes it fast and easy to
                    choose a doctor and schedule an appointment with the
                    provider of your choice. Patients are able to choose their
                    healthcare team based on unique qualifications that matter
                    to them and then set an appointment with the doctor of their
                    choice.{" "}
                  </p>
                </CardText>
              </CardBody>
              <Button href=""> View On Github</Button>
            </Card>
          </Col>

          <Col>
          <Card className="projectCard">
              <CardTitle> League Manager App </CardTitle>
              <CardBody>
                <Card.Img variant="top" src={shockedpika} style={{width: "200px", height:"auto",}} />
                <CardText>
                  <p>
                    {" "}
                   This was a cooperative project between myself a Boost Team member. The goal of this project was to test the connectivity between Java, Springboot and PostGress SQL. A prime goal was to understand REST API's and how they can be used to alter data within a database{" "}
                  </p>
                </CardText>
              </CardBody>
              <Button href=""> View On Github</Button>
            </Card>
          
          </Col>

          <Col>
          
          <Card className="projectCard">
              <CardTitle> Dictionary App </CardTitle>
              <CardBody>
                <Card.Img variant="top" src={shockedpika}x />
                <CardText>
                  <p>
                    {" "}
                    This was my first Java project, a simple dictionary app. The user has the ability to add words, defenitions and parts of speech to a custom dictionary. The project served as a good introduction into separation of concerns and utilities. It teaches the basics of reading and writing to a file. 
                   {" "}
                  </p>
                </CardText>
            
              </CardBody>
              <Button href=""> View On Github</Button>
            </Card>
          
          </Col>
        </Row>
{/* Row two */}
        <Row>

        <Col>
          
          <Card className="projectCard">
              <CardTitle> Boost: Mentor Match </CardTitle>
              <CardBody>
                <Card.Img variant="top" src={shockedpika} style={{width: "200px", height:"auto",}} />
                <CardText>
                  <p>
                    {" "}
                    This application working in collaboration with my fellow Boost team mate. The goal is to empower mentors and mentees to connect with each other. People in search of a mentor are able to see a list of mentors along with their various qualifications. Mentees are able to filter through mentors, read their bios and learn about their prospective mentors before choosing them.
                   {" "}
                  </p>
                  <p> 

                    <strong> Please note </strong>: This project is Indeed internal only. This code is not avaliable for viewing outside of Indeed.
                  </p>
                </CardText>
                
              </CardBody>
              <Button href="" disabled> View On Github</Button>
            </Card>
          
          </Col>

          <Col>
          
          <Card className="projectCard">
              <CardTitle> Personal Portfolio </CardTitle>
              <CardBody>
                <Card.Img variant="top" src={shockedpika} style={{width: "200px", height:"auto",}} />
                <CardText>
                  <p>
                    {" "}
                    Oh hey! That's this website here! 
                    Built entirely with react. Deployed via netlifly. It's supposed to look like a choose your own adventure game.
                   {" "}
                  </p>
                </CardText>
                
              </CardBody>
              <Button href=""> View On Github</Button>
            </Card>
          
          </Col>

          <Col>
          
          <Card>
              <CardTitle> Dictionary App </CardTitle>
              <CardBody>
                <Card.Img variant="top" src={shockedpika} style={{width: "200px", height:"auto",}} />
                <CardText>
                  <p>
                    {" "}
                   {" "}
                  </p>
                </CardText>
               
              </CardBody>
              <Button href=""> View On Github</Button>
            </Card>
          
          </Col>

        </Row>
      </Container>
    </>
  );
};
export default ProjectsHardCoded;
