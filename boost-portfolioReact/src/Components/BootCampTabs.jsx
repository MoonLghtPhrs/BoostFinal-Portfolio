import React, { useState, useEffect} from "react"
import {Tab, Tabs, Row, Col, Nav, Card, CardImg, Button, Table, Container, ListGroup, ListGroupItem,} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css";
import shockedpika from "../assets/meme-pikachu.gif";
import "../css/WeeklyScoreTables.css";

const BootCampTabs = () => {

    const [key, setKey] = useState('bootcamp');

return (





<Container style={{   borderColor: 'hsla(0,0%,100%, .15)', minHeight: "750px"}} fluid>

<div style={{}}>
<Tabs style={{  borderRadius:"40px", marginTop:"2em",
         padding: "16px" }}
  id="controlled-tab-example"
 
  activeKey={key}
  onSelect={(k) => setKey(k)}
  className="mb-3"

>

<Tab style={{borderRadius: "20px", padding: "2em", backgroundColor: "#FFF9F4",
										border: "6px solid #FFF9F4",}} eventKey="bootcamp" title="BootCamp Summary" defaultActiveKey>

                <h4>Boot Camp Experience</h4>
                <p>
                Attending a coding boot camp is an intensive and immersive experience. It often includes long hours, challenging projects, and constant learning. Participants gain practical skills in programming, software development, and problem-solving. The experience is designed to be transformative, equipping individuals with the necessary tools to start a career in tech.
              </p>
              <p> For some context, I have always been passionate about art and design, and I see software engineering as the perfect way to bring those skills into the digital world. The challenge of transforming creative designs into functional, user-friendly applications excites me. I also believe in the power of technology to simplify complex processes—whether it’s helping individuals find work or improving internal tooling for teams. My goal is to contribute to products that make people's lives easier and more efficient.</p>

              <p> It is for these reasons that lead me to want to take a chance and become a software engineer. I truely believe that I could make a difference by bringing a fresh approach to the software design space. </p>
    </Tab>


    <Tab eventKey="feedback" title="Bootcamp Feedback"
      style={{borderRadius: "20px", padding: "2em", backgroundColor: "#FFF9F4",
        margin: "2em",
                            border: "6px solid #FFF9F4",}} >
        
        <h4>Phase 1: Bootcamp Program Feedback</h4>
              

            <blockquote> Reflect back to when you first received news you were going to be a part of the BOOST Program. How did you feel? Was there anything you were really looking forward? Was there anything you were worried about? </blockquote>
            <p> Excited, Grateful, terrified - I felt a full range of emotions because I was excited to be able to learn something that I had been struggling  trying to learn for years and I got to learn as a part of my day job. The news was like getting the best of both worlds. </p>
            <p>Learning as much as I could - However, I really wanted to see and learn more about how back end works. I had an idea of making something pretty but lacked the ability to make it work. </p>
            <p>Not being able to perform, falling behind the group, not understanding the material/failing the course. </p>

            <blockquote> <p>Think back to all of your projects, which one was your favorite? Why was it your favorite? What was your proudest moment with it? </p> </blockquote>
            <p>Proudest moment was with my final project because I got to try something new and some how it mostly came together! I was excited to show that I did learn the material and that could make something cool in a short amount of time. Even despite it not 100% working as intended, the proof of concept was beyond solid and anyone could pick up the project and know the intention. </p>


            <blockquote> <p>Think back to all of your projects, which one was your least favorite? Why was it your least favorite? What was your proudest moment with it? </p></blockquote> 

            <p>The dictionary app, it was my first time using Java in its entirety. IT was all around a frustrating experience. I couldn’t get things to work. I didn’t know where to start. None of my mentors were really giving me the logic I needed to move forward. But it all came together at the end. I was the most proud when stuff finally clicked and I was able to just start taking off with development and actually get it done on time to present. I was able to present without it breaking! That was great. </p>

            <blockquote> 
            <p>Think about a moment that made you feel closer to your cohort members. What happened? What made you feel connected? Was there anything you wish you did to help connect more? </p> </blockquote> 
            <p>I think the last two weeks after the project made me feel very close to the cohort. We were really in the weeds right after the layoffs and you could tell that morale was low. But more than ever people leaned on each other to help with different aspects of our individual projects. </p>

            <blockquote>  <p>Now that you are past the bootcamp, think of your last three months. How do you feel? Can you see the growth you’ve accomplished? Go back to your first project on github and give yourself a code review. </p> </blockquote> 

            <p>I definitely see the growth and I think going back to look at my first projects made me realize I should be more proud of myself and what I have accomplished. I struggled so much that all I could focus on was how much I was struggling and how far behind I constantly felt. It became overwhelming towards the end. I think I still need time for how much I’ve accomplished to really sink in.

            </p>
          


      </Tab>
      {/* <Tab eventKey="Projects" title="Projects">
        Tab content for Profile
        <div className="cardContainerProject">

<Row xs={1} md={2} lg={3} xl={4} className="g-4">
{Array.from({ length: 12 }).map((_, idx) => (
<Col key={idx}>
<Card style={{ backgroundColor: '#322f31', color: '#b7b2a6', borderColor: 'hsla(0,0%,100%, .15)', borderRadius: '3px' }}>
<Card.Title>Project Name</Card.Title>
<Card.Img variant="top" src={shockedpika} />
<Card.Body>
<Card.Text>
This is where I would type up a 2 to 3 sentence summary on the project. But I haven't decided if I want to make a list of cards and hardcode it into vs code.
OR, if I want to go through the hastle of creating an entire backend data base, which only sounds worse and gross.
So i'll probably just write ou t the cards themselves. Hope you like the content. 

<hr/>
<Card.Text>Technology used</Card.Text>
<ListGroup style={{ backgroundColor: '#322f31', color: '#b7b2a6', borderColor: 'hsla(0,0%,100%, .15)', borderRadius: '3px' }} variant="flush">
<ListGroup.Item>Javascript</ListGroup.Item>
<ListGroup.Item>React</ListGroup.Item>
<ListGroup.Item>3am Tears</ListGroup.Item>
</ListGroup>
<Button href=""> View On Github</Button>
{/* Add an onclick to open up a modal popup / open to another page, whichever you desire really 
<Button> Click to view project write up</Button> 
</Card.Text>
</Card.Body>
</Card>
</Col>

))}
</Row>
</div>
      </Tab> */}
      <Tab eventKey="WeeklyScores" title="Bootcamp Weekly Scores">
      <h4>Weekly Scores</h4>
    
            
<Table class="tg"><thead>
  <tr>
    <th class="tg-8mqg" colspan="7" rowspan="2">GA Initial Reporting</th>
  </tr>
  <tr>
  </tr></thead>
<tbody>
  <tr>
    <td class="tg-7zrl"></td>
    <td class="tg-7zrl">Topic</td>
    <td class="tg-2b7s">Color Score</td>
    <td class="tg-7zrl" colspan="2">Feedback</td>
    <td class="tg-7zrl" colspan="2">Action Items</td>
  </tr>
  <tr>
    <td class="tg-7zrl">GA Week 1</td>
    <td class="tg-7zrl">Dev setup, git &amp; HTML</td>
    <td class="tg-g9f2"></td>
    <td class="tg-7zrl" colspan="2">Very active, drive to help other students and willing to seek out 1-on-1 debugging in the face of difficult issues. Consistent with homework thus far.</td>
    <td class="tg-7zrl" colspan="2">More metaphors to relate curriculum.</td>
  </tr>
  <tr>
    <td class="tg-7zrl">GA Week 2</td>
    <td class="tg-7zrl">JS (Looping, Arrays &amp; Functions)</td>
    <td class="tg-0qou"></td>
    <td class="tg-7zrl" colspan="2">Up to date on deliverables, great quality to them. Full attendance, consistent with exit tickets.Evidence of good note taking and paying attention to lectures, interactive in class and asksquestions. Frequent direct communication.</td>
    <td class="tg-7zrl" colspan="2"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">GA Week 3</td>
    <td class="tg-7zrl">JS (Dom, Event Listeners, API calls, Fetching APIs)</td>
    <td class="tg-g9f2"></td>
    <td class="tg-7zrl" colspan="2">No longer up to date on deliverables, missing week 3. Still asking questions and paying attention tolectures. Asked for "small scale" homework in ET, i.e. more small examples to practice on.</td>
    <td class="tg-7zrl" colspan="2">Really leaning into sessions with mentor; Bereket to check in with Vai on Monday. Asha to checkon GitHub pushes.</td>
  </tr>
  <tr>
    <td class="tg-7zrl">GA Week 4</td>
    <td class="tg-7zrl">Unit Project Week</td>
    <td class="tg-4ok0"></td>
    <td class="tg-7zrl" colspan="2">Project is missing many requirements. Struggled but did not reach out. "Couldn't get anything towork", but unclear why or how. There is plenty of code to suggest effort, and the code seems toserve a purpose on reviewing it. Needs follow up to figure out core problem. March 18 resubmissionof "_ things" to demonstrate understanding of Javascript.</td>
    <td class="tg-7zrl" colspan="2">1:1 to unpack what issues they encountered and why they didn’t reach out for assistance.Re-submission with smaller scope is due 3/18.</td>
  </tr>
  <tr>
    <td class="tg-7zrl">GA Week 5</td>
    <td class="tg-7zrl">Intro to Java</td>
    <td class="tg-g9f2"></td>
    <td class="tg-7zrl" colspan="2">Project problems were largely related to a disruptive and demanding work environment. Based on1-on-1s and their homework, they appear to be doing well enough absorbing the concepts for thisweek.</td>
    <td class="tg-7zrl" colspan="2"></td>
  </tr>
  <tr>
    <td class="tg-7zrl">GA Week 6</td>
    <td class="tg-7zrl">Java Deep Dive</td>
    <td class="tg-4ok0"></td>
    <td class="tg-7zrl" colspan="2">Concerned. Both homeworks this week were largely blank. Project is off to a slower start - again,citing home-wide construction - but has at least been proactive in asking Asha’s opinions on howsoon to ask me for help, what they should be starting with, and about the project structure.</td>
    <td class="tg-7zrl" colspan="2">High priority for proactive project help and will continue on with that into next week.</td>
  </tr>
  <tr>
    <td class="tg-7zrl">GA Week 7</td>
    <td class="tg-7zrl">Unit Project Week</td>
    <td class="tg-g9f2"></td>
    <td class="tg-7zrl" colspan="2">Response about the homework completion was unsurprisingly still the disruption of the construction.They planned to complete those homeworks late after finishing the project. For the project itself,while they did need a lot of support, having missed two critical homeworks, the amount of work thedid outside of instructor oversight showed a good amount of growth in both comprehension andability to do independent work. They would frequently bring a function to instructors that was almostentirely complete, but with a few pieces that they knew they wanted inside it but didn't quite knowhow to get it to work. The project was finished on time and looked generally good.</td>
    <td class="tg-7zrl" colspan="2">Continued support/check-ins as they push into SQL.</td>
  </tr>
  <tr>
    <td class="tg-7zrl">GA Week 8</td>
    <td class="tg-7zrl">SQL</td>
    <td class="tg-g9f2"></td>
    <td class="tg-7zrl" colspan="2">Seems to almost have the hang of SQL. Evidence of confusion over small syntax structure liketable aliasing. I'm not worried about it. Construction appears to be something that may beindefinite.</td>
    <td class="tg-7zrl" colspan="2">Bereket &amp; Asha will continue holding additional class hours (office hours) on Fridays to support.</td>
  </tr>
</tbody></Table>
        
      </Tab>

      {/* <Tab eventKey="Mentors" title="Mentors"
      style={{borderRadius: "20px", padding: "2em", backgroundColor: "#FFF9F4",
        margin: "2em",
                            border: "6px solid #FFF9F4",}}  disabled>
        Tab content for Profile
      </Tab> */}

     
{/* 
      <Tab eventKey="profile" title="Mock Interviews Round 1"disabled>
        Tab content for Profile
      </Tab>
      <Tab eventKey="profile" title="MockInterviews Round 2" disabled>
        Tab content for Profile
      </Tab> */}
      

</Tabs>
</div>

    </Container>
  );
};

export default BootCampTabs;