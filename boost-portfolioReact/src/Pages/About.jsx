import {Col, Row, Container, Tab, Tabs, Image } from "react-bootstrap"
import CardSample from "../Components/Cards/profileCardSample";
import fuuchanpic from "../assets/1720397083360511.gif"
import seiraBG from "../assets/ffxiv_11192022_130910_344-2.png"
const AboutMe = () => {
    return (
      <>
      
      <Container fluid
      style={{
        backgroundImage: {seiraBG}
      }}>
        <Row>
          <Col><div className="miniHeader">
            <h2>Come in, do you read me?</h2>
          </div></Col>
          
        </Row>
        <Row>
<Col> 
{/* Left column */}
<div className="sidebar">

<div className="imgContainer">
  <Image src={fuuchanpic} alt="fuuchan" rounded fluid/>
  
</div>
<div> You will succeed. It is inevitable. Happiness is coming.</div>
<h5>Hi, It's Vai! </h5>
<Row>
<Col>
{/* Nested Table */}
<b><Row>Name</Row>
<Row>Pronouns</Row>
<Row>Location</Row>
<Row>Skills</Row>
<Row>Hobbies</Row>
<Row> Languages</Row> </b>
</Col>
<Col>
{/* Nested Table */}
<Row>Name</Row>
<Row>Pronouns</Row>
<Row>Location</Row>
<Row>Skills</Row>
<Row>Hobbies</Row>
</Col>

</Row>
{/* End nested tables */}
</div>

</Col>
{/* End Left Column */}

<Col>
{/* Right Column */}

<p> am an illustrator, a designer, a streamer and now a fullstack engineer. I grew up on a computer so it is only natural that I eventually began to develop software. I got my start on the old bastions of the internet (MySpace and Gaia.com) don't really basic front end tweeks. I've made all of the front end mistakes that are physically possible. Like yellow text on a red background. Look at me now! This entire website was coded by hand using bootstrap and vanilla HtML,CSS and Javascript elements. Isn't that neat? </p>
<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ipsum magni, quidem totam inventore id, sunt, exercitationem similique vel quo repellat ea ipsam animi nihil fugiat quaerat aperiam harum maxime.</p>
</Col>

        </Row>
      </Container>
</>

    )
}
export default AboutMe;