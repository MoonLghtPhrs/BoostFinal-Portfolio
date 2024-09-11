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
import shockedpika from "../assets/meme-pikachu.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectsHardCoded from "../Components/Cards/ProjectsHardCoded";
import tileCover from "../../public/assets/UiELBEg.png";
import "../css/ProjectCards.css";

const ProjectList = () => {
  return (
    <div>
      <Container fluid style={{ backgroundColor: "#9DC7B6", backgroundImage: `url(${tileCover})`, backgroundRepeat: "repeat",  width: "100%", height: "100%" }}>
       

        <div >
        <h1 style={{ margin: "2em" }}>My TechStack</h1>
          <CardGroup  className="techStack" style={{ margin: "3em" }}>
            <Card className="TechCards" >
              <CardBody>
                <CardTitle>Design & Expirence</CardTitle>
                <CardText>
                  <div>
                    <FontAwesomeIcon icon="fa-solid fa-layer-group" />
                  </div>

                  <p>
                    I love clean but eye catching design patterns with fun yet
                    thoughtful interactions
                  </p>

                  <p>Things I love Designing</p>
                  <ul>
                    <li>Desktop Applications</li>
                    <li>Social media profiles</li>
                    <li>streamlined expirences</li>
                  </ul>

                  <p>
                    <strong>Design Tools</strong>
                  </p>
                  <ul>
                    <li>Pen and Paper</li>
                    <li> Dot Matrix Notebook</li>
                    <li>Figma</li>
                    <li>Affinity Designer</li>
                    <li>Procreate</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>

            <Card className="TechCards">
              <CardBody>
                <CardTitle>Frontend Developer</CardTitle>
                <CardText>
                  <div>
                    {" "}
                    <FontAwesomeIcon icon="fa-solid fa-code" />
                  </div>
                  <p>
                    I like to code from scratch. The feeling of building from
                    the ground up is amazing
                  </p>
                  <p>
                    <strong>Dev Tools</strong>
                  </p>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li> Material Design UI</li>
                  <li>Git</li>
                  <li>netify</li>
                </CardText>
              </CardBody>
            </Card>

            <Card className="TechCards">
              <CardBody>
                <CardTitle> Backend Development</CardTitle>
                <CardText>
                  <div>
                    <FontAwesomeIcon icon="fa-solid fa-terminal"/>
                  </div>
                  <p>
                    I like to code from scratch. The feeling of building from
                    the ground up is amazing
                  </p>
                  <p>
                    <strong>Dev Tools</strong>
                  </p>
                  <li>React</li>
                  <li>Bootstrap</li>
                  <li> Material Design UI</li>
                  <li>Git</li>
                  <li>netify</li>
                </CardText>
              </CardBody>
            </Card>

            <Card className="TechCards">
              <CardBody>
                <CardTitle>Artist</CardTitle>
                <CardText>
                  <p>
                    I love clean but eye catching design patterns with fun yet
                    thoughtful interactions
                  </p>

                  <p>Things I love Designing</p>
                  <ul>
                    <li>Desktop Applications</li>
                    <li>Social media profiles</li>
                    <li>streamlined expirences</li>
                  </ul>

                  <p>
                    <strong>Design Tools</strong>
                  </p>
                  <ul>
                    <li>Pen and Paper</li>
                    <li> Dot Matrix Notebook</li>
                    <li>Figma</li>
                    <li>Affinity Designer</li>
                    <li>Procreate</li>
                  </ul>
                </CardText>
              </CardBody>
            </Card>
          </CardGroup>
        </div>
        {/* End tech stack cards */}
      

      <h4>Projects</h4>
      <p> Here are a few things I have worked on </p>
      <div className="cardContainerProject"></div>
        <ProjectsHardCoded />
      {/* Final closing div for the entire page below */}
      </Container>
    </div>
   
  );
};
export default ProjectList;
