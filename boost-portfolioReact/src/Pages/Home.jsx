import { Button, Container, Col, Row, Image } from 'react-bootstrap'
import HomepageNonsense from '../Components/ExtraDecorativeNonsense/HomePageNonsense';
import "../css/homepage.css"
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <Container fluid style={{  backgroundColor: "#9DC7B6", width: "100%", height: "100%"}}>
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
							<p
                            style={{"margin":"2em", "paddingLeft":"2em"}}>
								{" "}
								Vai is a full-stack engineer and visual designer that loves
								video games! I'm a new programmer who loves old web aesthetics
								and wants to revive personal blogs, colorful profiles and them
								whimsy of a corpratized internet.
							</p>{" "}
						</Row>
                                        <Row>
                                            <div className="d-flex justify-content-center">
                
                     <Link to="/coding-projects">
                                    <Button className='homepagebuttons' size="lg">All Projects </Button>
                                </Link>
			
                     <Link to="/about">
                                    <Button className='homepagebuttons' size="lg"> Learn About Me </Button>
                                </Link>
		
                    </div>
                   </Row>
                        </div>
                        </Col>
                </Row>


                </div>



        {/* <div className="d-flex justify-content-center">
            <div className='ContentContainerHomePage'>
            <h1>Boost Portfolio</h1>
           <HomepageNonsense/>
           </div>
     
        </div> */}
        </Container>
    )
}
export default Home;