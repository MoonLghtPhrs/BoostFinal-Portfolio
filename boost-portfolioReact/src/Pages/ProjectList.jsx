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
  Accordion,

} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import shockedpika from "../assets/meme-pikachu.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProjectsHardCoded from "../Components/Cards/ProjectsHardCoded";
import tileCover from "../../public/assets/UiELBEg.png";
import "../css/ProjectCards.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProjectList = () => {
  return (
    <div>
      <Container fluid style={{ backgroundColor: "#9DC7B6", backgroundImage: `url(${tileCover})`, backgroundRepeat: "repeat",  width: "100%", height: "100%" }}>
      <Row>
              <Col></Col>
              <Col>
                <div
                  className="miniHeader"
                  style={{
                    backgroundColor: " rgba(218, 235, 246, 0.75)",
                    color: "#43566D",
                    margin: "2em",
                    borderRadius: "50em",
                    border: "5px solid #828FB6",
                  }}
                >
                  <p
                    style={{
                      paddingleft: "120px",
                      fontSize: "32px",
                      fontWeight: "bold",
                      left: "7em",
                      top: "10px",
                      position: "relative",
                      fontFamily: "Helvetica Neue",
                      textTransform: "uppercase",
                      letterSpacing: ".2em",
                    }}
                  >
                    Projects
                    <FontAwesomeIcon icon={faStar} />!
                  </p>
                </div>
              </Col>
            </Row>

      <div className="cardContainerProject"></div>
        <ProjectsHardCoded />
      {/* Final closing div for the entire page below */}
      </Container>
    </div>
   
  );
};
export default ProjectList;
