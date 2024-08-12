import { Col, Row, Container, Tab, Tabs, Image } from "react-bootstrap";
import CardSample from "../Components/Cards/profileCardSample";
import fuuchanpic from "../assets/monkey-puppet-omg-shock-gif.gif";
import seiraBG from "../assets/ffxiv_11192022_130910_344-2.png";

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const AboutMe = () => {
	return (
		<>
			<Container
				fluid
				style={{
					// backgroundImage: "url(/public/assets/ffxiv_11192022_130910_344-2.png)",
					backgroundColor: "#9DC7B6",
					backgroundRepeat: "no-repeat"
				
				}}
			>
				{/* <Row>
					<Col md={8}></Col>
						
					<Col><div className="miniHeader">
							<h1 style={{justifyContent: "right",
							backgroundColor: " rgba(255, 249, 244, 0.8)",
							color: "#43566D", 
							
							borderRadius: "50em 50em 20px 20px",
								border: "6px solid #FFF9F4",

							}}>お金稼ぐ。俺は
							<FontAwesomeIcon icon={faStar} />
							</h1>
						</div></Col></Row> */}
				<Row> 
					{/* Header row left */}
					{/* <Col>
						<div className="miniHeader">
							<h2>お金稼ぐ。俺は MiddleRow
							<FontAwesomeIcon icon={faStar} />
							</h2>
						</div>
					</Col> */}
				</Row>
				<Row >
					<Col md={4}>
						{/* Left column */}
						
						<div
							className="sidebar"
						>
						
							<Row>
              <div className="sideprofile"></div>
							<div className="imgContainer"
						style={{
								backgroundImage: 'url("../public/2fab200ee45081b2d3a942cffdcc42bc.jpg")',
								backgroundColor: "#9DC7B6",
								backgroundRepeat: "no-repeat",
								backgroundPosition: "auto", 
								minHeight: "350px" ,
								borderRadius: "50em 50em 20px 20px",
								border: "6px solid #FFF9F4",
								position:"relative" }}
							
							>
								{/* <Image
									src={fuuchanpic}
									alt="fuuchan"
									rounded
									fluid
								/> */}
							</div>
							</Row>
							<Row>
							<div>
								
								<p style={{color: "#43566D", 
								fontSize:" 25px",
								 textTransform: "uppercase",
								  letterSpacing: ".2em",
								  backgroundColor: " rgba(255, 249, 244, 0.8)",
								   fontWeight: "500"}}> You will succeed. It is inevitable. Happiness is coming.</p>
							</div>
							
							</Row>
							
						</div>
					</Col>
					{/* End Left Column */}

					<Col md={8}>
						{/* Right Column */}
						<Row>
							<Col></Col>
							<Col md={10}><div className="miniHeader"
								style={{justifyContent: "right",
									backgroundColor: " rgba(255, 249, 244, 0.8)",
							color: "#43566D", 
							
							borderRadius: "50em 50em 20px 20px",
								border: "6px solid #FFF9F4",
								}}>
							<h1>お金稼ぐ。俺は
							<FontAwesomeIcon icon={faStar} />
							</h1>
						</div></Col>
						
						</Row>
						<Row style={{ border: "3px solid #45332f", borderRadius: "5px",  backgroundColor: " rgba(255, 249, 244, 0.8)", }}>
								<Col>
									{/* Nested Table */}
									<b>
										<Row>Name</Row>
										<Row>Pronouns</Row>
										<Row>Location</Row>
										<Row>Skills</Row>
										<Row>Hobbies</Row>
										<Row> Languages</Row>
									</b>
								</Col>
								<Col>
									{/* Nested Table */}
									<Row>Vai</Row>
									<Row>They/Them/Theirs</Row>
									<Row>Los angeles, California</Row>
									<Row>Illustration, UX Design, Full Stack Engineer</Row>
									<Row>Drawing and playing video games</Row>
									<Row> English (navtive), 日本語（N3）, 한글 TOPIK-I</Row>
								</Col>
							</Row>
							{/* End nested tables */}	
							<Row style={{ border: "3px solid #45332f", borderRadius: "5px",  backgroundColor: " rgba(255, 249, 244, 0.8)", }}>
						<p>
							{" "}
							Hello! I am an illustrator, a designer, a streamer and now a
							fullstack engineer. I grew up on a computer so it is only natural
							that I eventually began to develop software. I got my start on the
							old bastions of the internet (MySpace and gaia). I've made all of
							the front end mistakes that are physically possible. Like yellow
							text on a red background. Look at me now! This entire website was
							coded by hand using bootstrap and vanilla HtML,CSS and Javascript
							elements. Isn't that neat?{" "}
						</p>
						<p>
							{" "}
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
							ipsum magni, quidem totam inventore id, sunt, exercitationem
							similique vel quo repellat ea ipsam animi nihil fugiat quaerat
							aperiam harum maxime.
						</p>

						<h3>My tech skills</h3>

						<div>
							Lorem ipsum dolor sit amet Consectetur adipiscing elit Sed do
							eiusmod tempor Incididunt ut labore et dolore Magna aliqua ut enim
							ad minim Veniam, quis nostrud exercitation

							<p>Led the initiative to review and roll out new product functionality to 500 of our highest visibility clients. 
              Project resulted in rollout of new functionality to 1,234 clients, doubling the initial goal.
              The process required creating eligibility criteria for these top client
              Created monetization opportunities  for clients that did not meet criteria to increase spend
              Oversaw the entire project management life cycle of the job matching initiative.
              Initial goal of 9% coverage was met in phase 1 allowing for additional expansion phases leading to a total of 22% job coverage by end of phase 2. 
              Defined overall scope and managed execution as well as oversaw two additional expansion phases
              Developing instructions / guidelines for our external vendor team of 10 to execute. Rolling out training and audit schedule  to the vendor team
              Collaborated peers to develop Standard Operating Procedures and decision guiding flowcharts for the vendor team and internal training purposes.
              Direct project management experience with large-scale operations team, resulting in a 20% reduction to the team's turnaround time
              Developed project timeline and milestone tracking to fit within Agile workflows
              Defined requirements and subsequently executed salesforce case research into prolonged turnaround time
              Collaborated with external product team and CRM team to create a specialized Salesforce Case Record and subtypes. 
              Created the business case to submit to leadership by defining technical requirements. Working closely with stakeholders to meet business needs
              Expanded knowledge around structure and permissions within Salesforce environment 
              Implemented an Office Hours Program, working to provide ad-hoc support and policy clarification for Client Support & Sales throughout 2022 and 2023. 
               Led more than 60 sessions in that time. 
              I leveraged internal connections to bolster documentation on common pain points 
              Expanded program to accommodate EMEA teams and Global Product Commercialization teams. 
              Campaigned for increased internal coverage of Office Hours to support the initiative 
              </p>

			  
						</div>

						<h3>My tech skills</h3>

						<div>
							Lorem ipsum dolor sit amet Consectetur adipiscing elit Sed do
							eiusmod tempor Incididunt ut labore et dolore Magna aliqua ut enim
							ad minim Veniam, quis nostrud exercitation

							<p>Led the initiative to review and roll out new product functionality to 500 of our highest visibility clients. 
              Project resulted in rollout of new functionality to 1,234 clients, doubling the initial goal.
              The process required creating eligibility criteria for these top client
              Created monetization opportunities  for clients that did not meet criteria to increase spend
              Oversaw the entire project management life cycle of the job matching initiative.
              Initial goal of 9% coverage was met in phase 1 allowing for additional expansion phases leading to a total of 22% job coverage by end of phase 2. 
              Defined overall scope and managed execution as well as oversaw two additional expansion phases
              Developing instructions / guidelines for our external vendor team of 10 to execute. Rolling out training and audit schedule  to the vendor team
              Collaborated peers to develop Standard Operating Procedures and decision guiding flowcharts for the vendor team and internal training purposes.
              Direct project management experience with large-scale operations team, resulting in a 20% reduction to the team's turnaround time
              Developed project timeline and milestone tracking to fit within Agile workflows
              Defined requirements and subsequently executed salesforce case research into prolonged turnaround time
              Collaborated with external product team and CRM team to create a specialized Salesforce Case Record and subtypes. 
              Created the business case to submit to leadership by defining technical requirements. Working closely with stakeholders to meet business needs
              Expanded knowledge around structure and permissions within Salesforce environment 
              Implemented an Office Hours Program, working to provide ad-hoc support and policy clarification for Client Support & Sales throughout 2022 and 2023. 
               Led more than 60 sessions in that time. 
              I leveraged internal connections to bolster documentation on common pain points 
              Expanded program to accommodate EMEA teams and Global Product Commercialization teams. 
              Campaigned for increased internal coverage of Office Hours to support the initiative 
              </p>

			  <h3>My tech skills</h3>

						<div>
							Lorem ipsum dolor sit amet Consectetur adipiscing elit Sed do
							eiusmod tempor Incididunt ut labore et dolore Magna aliqua ut enim
							ad minim Veniam, quis nostrud exercitation

							<p>Led the initiative to review and roll out new product functionality to 500 of our highest visibility clients. 
              Project resulted in rollout of new functionality to 1,234 clients, doubling the initial goal.
              The process required creating eligibility criteria for these top client
              Created monetization opportunities  for clients that did not meet criteria to increase spend
              Oversaw the entire project management life cycle of the job matching initiative.
              Initial goal of 9% coverage was met in phase 1 allowing for additional expansion phases leading to a total of 22% job coverage by end of phase 2. 
              Defined overall scope and managed execution as well as oversaw two additional expansion phases
              Developing instructions / guidelines for our external vendor team of 10 to execute. Rolling out training and audit schedule  to the vendor team
              Collaborated peers to develop Standard Operating Procedures and decision guiding flowcharts for the vendor team and internal training purposes.
              Direct project management experience with large-scale operations team, resulting in a 20% reduction to the team's turnaround time
              Developed project timeline and milestone tracking to fit within Agile workflows
              Defined requirements and subsequently executed salesforce case research into prolonged turnaround time
              Collaborated with external product team and CRM team to create a specialized Salesforce Case Record and subtypes. 
              Created the business case to submit to leadership by defining technical requirements. Working closely with stakeholders to meet business needs
              Expanded knowledge around structure and permissions within Salesforce environment 
              Implemented an Office Hours Program, working to provide ad-hoc support and policy clarification for Client Support & Sales throughout 2022 and 2023. 
               Led more than 60 sessions in that time. 
              I leveraged internal connections to bolster documentation on common pain points 
              Expanded program to accommodate EMEA teams and Global Product Commercialization teams. 
              Campaigned for increased internal coverage of Office Hours to support the initiative 
              </p>

			  
						</div>

			  
						</div>
						</Row>				
					</Col>
				</Row>

				<Col>
					<Row>
						<h3>Contact me</h3>
					</Row>
				</Col>
			</Container>
		</>
	);
};
export default AboutMe;
