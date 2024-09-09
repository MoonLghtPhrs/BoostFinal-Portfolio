import { CardBody, CardFooter, CardHeader, Card, Button, CardText, CardImg } from "react-bootstrap"

const ProjectCardOld = ({}) => {
    return (
        <>
        <p> Here are a few things I have worked on </p>
        <div className="cardContainerProject">

        <Row xs={1} md={2} lg={3} className="g-4">
{Array.from({ length: 12 }).map((_, idx) => (
<Col key={idx}>
<Card style={{
maxWidth: "650px",
maxHeight: "auto",
border: "3px solid", 
boxShadow: "10px 10px 2px 3px rgba(4, 42, 87, 0.25)"
}}>
<Card.Title
style={{border: "1px solid",
padding: "12px", 
textAlign: "center"
}}
>Project Name</Card.Title>

<Card.Body
style={{padding: "50px",}}
>
  <Row  style={{border: "1px solid",}}>

    <Col>  <Card.Img variant="top" src={shockedpika} />
    </Col>

    <Col>
    <Card.Text>
    This is where I would type up a 2 to 3 sentence summary on the project. But I haven't decided if I want to make a list of cards and hardcode it into vs code.
    OR, if I want to go through the hastle of creating an entire backend data base, which only sounds worse and gross.
    So i'll probably just write ou t the cards themselves. Hope you like the content. 
    </Card.Text>
    </Col>
  </Row>

  
    <hr/>
    <Card.Text>Technology used</Card.Text>
    <ListGroup variant="flush">
<ListGroup.Item>Javascript</ListGroup.Item>
<ListGroup.Item>React</ListGroup.Item>
<ListGroup.Item>3am Tears</ListGroup.Item>
</ListGroup>
<Row>
{/* Add an onclick to open up a modal popup / open to another page, whichever you desire really */}
<Col> <Button href=""> View On Github</Button></Col>
<Col><Button> Read More</Button> </Col>
</Row>
   
  
    
 
</Card.Body>
</Card>
</Col>
))}
</Row>
</div>
</>

        
    )
}
export default ProjectCardOld;