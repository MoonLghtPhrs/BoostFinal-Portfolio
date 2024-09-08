import { Button } from 'react-bootstrap'
import UsingHas from '../Themes/UsingHas';
import HomepageNonsense from '../Components/ExtraDecorativeNonsense/HomePageNonsense';
import "../css/homepage.css"


const Home = () => {
    return (
        <div className='MainContainer'>
            <div className='ContentContainerHomePage'>
            <h1>Boost Portfolio</h1>
           <HomepageNonsense/>
           </div>
     
        </div>
    )
}
export default Home;