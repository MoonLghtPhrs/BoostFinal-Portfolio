import React from "react"
import {Tab, Row, Col, Nav, Card, CardImg, Button, Table, Container, ListGroup, ListGroupItem} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import shockedpika from "../assets/meme-pikachu.gif"
import BootCampTabs from "../Components/BootCampTabs";

const Bootcamp = () => {
    return (
      <>
   <Container fluid>
    <Row> 
      <Col></Col>
      <Col><div className="qotebanner" style={{position: "relative", borderRadius:"40px", border: "5px solid",  maxHeight: "300px",
        minHeight: "50px",
        maxWidth: "auto"}}> Qoute Banner</div></Col>
      <Col></Col>


    </Row>
    <Row>
      
    </Row>
      

   </Container>

<BootCampTabs/>
</>


    );
  };
  
export default Bootcamp;