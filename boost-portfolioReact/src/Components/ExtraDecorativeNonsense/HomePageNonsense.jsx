import { Container, Row, Col, Image, Button} from "react-bootstrap"
import fuuchanpic from "./2fab200ee45081b2d3a942cffdcc42bc.jpg";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextChat from "./TextChat";



const HomepageNonsense = () => {

    return (
<Container  style={{maxHeight: "6%", margin: "5rem"}} className="background"fluid>

<Row>
<FontAwesomeIcon icon={faStar} />
</Row>
<Row> 
<Col>

<div>
<Row> <h3> Hello and welcome to Vai's portfolio!</h3></Row>
<Row> <p> Vai is a full-stack engineer and visual designer that loves video games! I'm a new programmer who loves old web aesthetics and wants to revive personal blogs, colorful profiles
and them whimsy of a corpratized internet.</p> </Row>
</div>
</Col>
<Col>

<Image
		src={fuuchanpic}
	alt="fuuchan"
	rounded
	fluid
    style={{maxHeight: "80%"}}
	/> 

</Col>

</Row>

<Row>

    <Col>
    <Button>All Projects </Button></Col>
    <Col>
    <Button> Learn About Me </Button></Col>
    <Col>
    <Button> Contact me </Button></Col>
    
</Row>

<Row>
    <TextChat/>
</Row>
</Container>

    )
}

export default HomepageNonsense;