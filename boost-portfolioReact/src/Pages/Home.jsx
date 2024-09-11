import { Button, Container, Col, Row, Image, Card, CardBody, CardGroup, CardHeader, CardImg, CardTitle, CardText} from 'react-bootstrap'
import HomepageNonsense from '../Components/ExtraDecorativeNonsense/HomePageNonsense';
import tileCover from "../../public/assets/UiELBEg.png";
import { Link } from 'react-router-dom';
import "../css/homepage.css"
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const Home = () => {
    return (
        <Container fluid style={{ backgroundColor: "#9DC7B6", backgroundImage: `url(${tileCover})`, backgroundRepeat: "repeat",  width: "100%", height: "100%" }}>
            <div className='d-flex justify-content-center'>
                <Row
                style={{
height: "100%",
margin: "4em",

                }}
                >

                    <Col> <div className="userDialogSprite">
							{/* <Image
								src={fuuchanpic}
								alt="fuuchan"
								rounded
								fluid
							/> */}
						</div> </Col>

                        <Col md> 
                        <div className="dialogSection"
                        
                        > 
                            <h1 style={{margin:"2rem", paddingLeft:"2em"}}>Hello and welcome to Vai's portfolio!</h1>
                          
						<Row>
							{" "}
							<p style={{"margin":"2em", "paddingLeft":"2em"}}>
								{" "}
								Vai is a full-stack engineer and visual designer that loves
								video games! They are new software engineer who loves old web aesthetics
								and wants to revive personal blogs, colorful profiles and add a little bit of whimsy back into the internet. <FontAwesomeIcon icon={faStar}/>
							</p> {" "}
						</Row>
                                        <Row>
                                            <div className="d-flex justify-content-center">
                
                     <Link to="/coding-projects">
                                    <button className='homepagebuttons' size="lg">All Projects </button>
                                </Link>
			
                     <Link to="/about">
                                    <button className='homepagebuttons' size="lg" variant='custom'> Learn About Me </button>
                                </Link>


                                <button className="homepagebuttons" size="lg"> Contact Me </button>
		
                    </div>
                   </Row>
                        </div>
                        </Col>
                </Row>


                </div>

        </Container>
    )
}
export default Home;