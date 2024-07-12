import {Col, Row, Container, Tab, Tabs, Image } from "react-bootstrap"
import CardSample from "../Components/Cards/profileCardSample";
import fuuchanpic from "../assets/monkey-puppet-omg-shock-gif.gif"
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
            <h2>How do I write code? Actually?</h2>
          </div></Col>
          
        </Row>
        <Row>
<Col> 
{/* Left column */}
<div className="sidebar" style={{ border: '5px solid #45332f', borderRadius: '3px' }}  >

<div className="imgContainer">
  <Image src={fuuchanpic} alt="fuuchan" rounded fluid/>
  
</div>
<div> You will succeed. It is inevitable. Happiness is coming.</div>
<h5>Hi, It's Vai! </h5>
<Row style={{ border: '3px solid #45332f', borderRadius: '5px' }} >
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

<p> Hello! I am an illustrator, a designer, a streamer and now a fullstack engineer. I grew up on a computer so it is only natural that I eventually began to develop software. I got my start on the old bastions of the internet (MySpace and gaia). I've made all of the front end mistakes that are physically possible. Like yellow text on a red background. Look at me now! This entire website was coded by hand using bootstrap and vanilla HtML,CSS and Javascript elements. Isn't that neat? </p>
<p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ipsum magni, quidem totam inventore id, sunt, exercitationem similique vel quo repellat ea ipsam animi nihil fugiat quaerat aperiam harum maxime.</p>

<h3>My tech skills</h3>

<div>
  Lorem ipsum dolor sit amet
  Consectetur adipiscing elit
  Sed do eiusmod tempor
  Incididunt ut labore et dolore
  Magna aliqua ut enim ad minim
  Veniam, quis nostrud exercitation
</div>
</Col>
</Row>

<Col>
<Row><h3>Contact me</h3></Row>
</Col>
      </Container>
</>

    )
}
export default AboutMe;