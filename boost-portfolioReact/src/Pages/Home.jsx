import { Button, Container, Col, Row, Image } from 'react-bootstrap'
import UsingHas from '../Themes/UsingHas';
import HomepageNonsense from '../Components/ExtraDecorativeNonsense/HomePageNonsense';
import "../css/homepage.css"


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

                        <Col> 
                        <div className="SplashBox"> 
                            <h1>Boost Portfolio</h1>
                            <Row>
							{" "}
							<h3> Hello and welcome to Vai's portfolio!</h3>
						</Row>
						<Row>
							{" "}
							<p>
								{" "}
								Vai is a full-stack engineer and visual designer that loves
								video games! I'm a new programmer who loves old web aesthetics
								and wants to revive personal blogs, colorful profiles and them
								whimsy of a corpratized internet.
							</p>{" "}
						</Row>
                        <Row>
                <Col>
					<Button className=
                    'homepagebuttons'
                    size="lg">All Projects </Button> </Col>
				<Col>
					<Button  className=
                    'homepagebuttons' size="lg"> Learn About Me </Button></Col>
				<Col>
					<Button  className=
                    'homepagebuttons' size="lg"> Contact me </Button></Col>
				
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