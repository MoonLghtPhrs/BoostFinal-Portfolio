import React from "react"
import {Tab, Row, Col, Nav, Card, CardImg, Button, Table, Container, ListGroup, ListGroupItem} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import shockedpika from "../assets/meme-pikachu.gif"
import BootCampTabs from "../Components/BootCampTabs";

const Bootcamp = () => {
    return (
      <>
   <Container fluid >
    <Row style={{display: "flex"}}> 
      <Col>
      <div className="qotebanner" style={{
      marginLeft: "4em",
      marginTop: "4em", 
      borderRadius:"40px", 
      border: "5px solid",  
      maxHeight: "300px",
        minHeight: "50px",
        maxWidth: "auto",
        minWidth: "300px",
          color: "#43566D",
          fontSize: " 25px",
          textTransform: "uppercase",
          letterSpacing: ".2em",
          fontWeight: "500",
          alignItems: "center",
          alignContent: "stretch"
        }}>  
       
         <blockquote>  <p>Sphix of black quartz, hear my vow or something of whatever. This is a quote space
         </p>
         <footer className="blockquote">
          <cite Title="I pulled it out of my ass">I pulled it out of my ass</cite>
         </footer>
         </blockquote>
        </div>
        
        </Col>
      <Col></Col>


    </Row>
    <Row>
      <BootCampTabs />
    </Row>
      

   </Container>


</>


    );
  };
  
export default Bootcamp;