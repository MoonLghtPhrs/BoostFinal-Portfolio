import { Container, Row, Col, Image, Button} from "react-bootstrap"
import fuuchanpic from "./2fab200ee45081b2d3a942cffdcc42bc.jpg";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextChat from "./TextChat";
import "../../css/homepage.css"



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
    <Button 
    size="lg"
    >All Projects </Button></Col>
    <Col>
    <Button
    size="lg"
    > Learn About Me </Button></Col>
    <Col>
    <Button
    size="lg"> Contact me </Button></Col>
    
</Row>


<Row>
<Col>
<div className="ChatTextBoxContainer"> 
    
    <h3>
        This is a container</h3> 
        <div className="userDialogSprite">
        <Image
		src={fuuchanpic}
	alt="fuuchan"
	rounded
	fluid
    style={{maxHeight: "80%"}}
	/> 
        </div>

        <div className="userDiaglogueName"> <h4>Viscount Dante</h4> </div>
        <div className="dialogSection">

            <p> Nice to meet you! Thank you for coming! Please feel free to contact me if you have any questions! </p>
            <FontAwesomeIcon icon={faStar} className="bouncyStar"/>

        </div>
        
 </div>

</Col>

</Row>


</Container>

    )
}

export default HomepageNonsense;