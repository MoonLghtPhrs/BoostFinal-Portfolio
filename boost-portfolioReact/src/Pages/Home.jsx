import { Button, Container } from 'react-bootstrap'
import UsingHas from '../Themes/UsingHas';
import HomepageNonsense from '../Components/ExtraDecorativeNonsense/HomePageNonsense';
import "../css/homepage.css"


const Home = () => {
    return (
        <Container fluid style={{  backgroundColor: "#9DC7B6", }}>
        <div className="d-flex justify-content-center">
            <div className='ContentContainerHomePage'>
            <h1>Boost Portfolio</h1>
           <HomepageNonsense/>
           </div>
     
        </div>
        </Container>
    )
}
export default Home;