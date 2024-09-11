import {Col, Row, Container, Button, Accordion, AccordionCollapse, AccordionItem, AccordionHeader, AccordionBody,} from "react-bootstrap";
import { Link } from "react-router-dom";
import CardSample from "../Components/Cards/profileCardSample";
import fuuchanpic from "../assets/monkey-puppet-omg-shock-gif.gif";
import seiraBG from "../assets/ffxiv_11192022_130910_344-2.png";
import tileCover from "../../public/assets/UiELBEg.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/AboutPage.css";

const AboutMe = () => {
	return (
		<>
			<Container
				fluid
				
				style={{
					backgroundColor: "#828FB6",
					
					 backgroundImage: `url(${tileCover})`, 
					 backgroundRepeat: "repeat"
				}}
			>
				
				<Row>
					{/* Header row left */}
					
				</Row>
				<Row style={{ marginTop: "4em" }} className="d-flex justify-content-center">
					<Col
						md={3}
						style={{ marginRight: "1.5em", marginLeft: "2em" }}
					>
						{/* Left column */}

						<div className="sidebar">
							<Row>
								<div className="panels"></div>
								<div
									className="imgContainer"
									style={{
										backgroundImage:
											'url("../public/2fab200ee45081b2d3a942cffdcc42bc.jpg")',
										backgroundColor: "#9DC7B6",
										backgroundRepeat: "no-repeat",
										backgroundPosition: "auto",
										minHeight: "350px",
										borderRadius: "50em 50em 20px 20px",
										border: "6px solid #828FB6",
										position: "relative",
									}}
								>
									
								</div>
							</Row>
							{/* <Row>
								<div>
									<p
										style={{
											color: "#43566D",
											fontSize: " 25px",
											textTransform: "uppercase",
											letterSpacing: ".2em",
											backgroundColor: " rgba(218, 235, 246, 0.75)
",
											fontWeight: "500",
										}}
									>
										{" "}
										You will succeed. It is inevitable. Happiness is coming.
									</p>
								</div>
							</Row> */}
						</div>
						<Row>
							{" "}
						
						</Row>

						<Row
							style={{
								border: "6px solid #828FB6",
								borderRadius: "50px",
								minWidth: "100%",
								backgroundColor: " rgba(218, 235, 246, 0.75)",
								padding: "2em",
								marginTop:"2em",
								marginBottom:"2em",
						
							}}
						>
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

{/* Tech Stack nested table */}
<Row>
{" "}
</Row>

<Row
							style={{
								border: "6px solid #828FB6",
								borderRadius: "50px",
								minWidth: "100%",
								backgroundColor: " rgba(218, 235, 246, 0.75)",
								padding: "2rem",
								marginTop:"2em",
								marginBottom:"2em",
							}}
						> 
						<p> Tech Stack</p>
						<Col>
								{/* Nested Table */}
								
																	<ul><p>Frontend Development</p> 
																		<li>Figma</li>
																		<li>React</li>
																		<li>Javascript</li>
																		<li>GraphQL</li>
																		<li>Apollo</li>
																		<li>Bootstrap</li>
																	</ul>
								
							</Col>
							<Col>
								{/* Nested Table */}
							
								<ul> 	<p> Backend Development</p>
								<li>Java</li>
								<li>Springboot</li>
								<li>C#</li>
								<li>postGressSQL</li>
								</ul>
							</Col>
						
						</Row>



						{/* End nested tables */}

						{/* <Row>
							<div className="LinksToResume">
								<Button class="btn btn-info"> Download Resume PDF</Button>
								<Button>View on Linked in</Button>
								<Button> Website Version of Resume</Button>
							</div>
						</Row> */}
					</Col>
					{/* End Left Column */}

					<Col
						md={6}
						style={{ marginLeft: "1.5rem" }}
						
					>
						{/* Right Column */}
						<Row>
							<Col></Col>
							<Col md={11}>
								<div
									className="miniHeader"
									style={{
										backgroundColor: " rgba(218, 235, 246, 0.75)",	
										color: "#43566D",
										marginTop: "2em",
										marginLeft:"2em",
										borderRadius: "50em 50em 20px 20px",
										border: "5px solid #828FB6",
									}}
								>

<p style={{ marginleft: "6em", paddingleft: "120px", fontSize:"32px", fontWeight:"bold", left: "125px", top: "10px", position: "relative", fontFamily: "Helvetica Neue", textTransform: "uppercase", letterSpacing: ".2em", }}> 
											お金稼ぐ。俺は
											<FontAwesomeIcon icon={faStar} />! 
										</p>
									
								</div>
							</Col>
						</Row>

						<Row
							style={{
								backgroundColor: "rgba(218, 235, 246, 0.75)",
								color: "#43566D",
								

								border: "6px solid #828FB6",
							}}
						>
							<div
								className="AboutBodyText"
								style={{
									padding: "2rem",
								}}
							>
								<h2>Hello Hello Hello!!</h2>
								<p style={{
									paddingLeft: "4rem",
								}}>
									{" "}
									Hello! I am an illustrator, a designer, a streamer and now a
									fullstack engineer. I grew up on a computer so it is only
									natural that I eventually began to develop software. I got my
									start on the old bastions of the internet (MySpace and gaia). I make custom themes on these websites, and really made editing html a hobby when tumblr rolled around. 
									I've made all of the front end mistakes that are physically
									possible. Like yellow text on a red background. Look at me
									now! This entire website was coded by hand using bootstrap and React!
									Isn't that neat?{" "}
								</p>
							</div>

							{/* Nested Profile Information.*/}

							<Row>
								<h3 style={{
									padding: "2rem",
								}}>Why SWE</h3>
								<Row>
									<p style={{
									paddingLeft: "4rem",
								}}>
										{" "}
										I want to blend art, the essesnce of the human expirence
										with technology to reach new heights. I'm driven to innovate
										user experiences and eager for partnerships that push
										boundaries and deliver lasting value. 
										Also, I'm always on the computer anyway. So, I thought it would be good to challenge myself and learn how to make cool things.
										{" "}
									</p>
								</Row>
							</Row>
							{/* <Row>
								<Col></Col>
								<Col>
									<h3>Areas of Interest</h3>
									<p>
										I like making video games and front end. I love the way
										people interact with technology.
									</p>
								</Col>
							</Row> */}

							<Row>
								<Col>
									<h3 style={{
									padding: "2rem",
								}}>My career goals</h3>
									<ul style={{
									paddingLeft: "4rem",
								}}>
										<li>
											Become a master designer. UXers and SWES will come to me
											for design decisions.
										</li>
										<li>
											{" "}
											Create products that break barriers to those without the
											privelige of a career network that prevent them from
											getting jobs
										</li>
										<li>Write and code a visual novel</li>
										<li> Work on a video game with a team</li>
									</ul>
								</Col>
							</Row>
						</Row>

						<Row
							className="WorkHistory"
							style={{
								backgroundColor: " rgba(218, 235, 246, 0.75)",
								color: "#43566D",
								marginTop: "2em",
								padding: "2rem",
								border: "6px solid #828FB6",
								
							}}
						>
							

								<Row>
									
									<h3> Resume and Work History</h3>
										<p> Get a ATS friendly pdf version of my resume here!</p>
										<button className="customButton" href="/assets/Pearson Richelle Resume.pdf" target="_blank" rel="noopener noreferrer">Download ATS Resume Resume</button>
									</Row>
									
								<Row>
									<Accordion style={{ width: "auto" }}>
										<AccordionItem eventKey="0">
											<AccordionHeader>
												{" "}
												Operations Support Specialist - Indeed June 2021 - Feb
												2024{" "}
											</AccordionHeader>
											<AccordionBody>
												<ul>
													<li>
														Led the initiative to review and roll out new
														product functionality to 500 of our highest
														visibility clients.{" "}
													</li>
													<li>
														{" "}
														Project resulted in rollout of new functionality to
														1,234 clients, doubling the initial goal.{" "}
													</li>
													<li>
														{" "}
														The process required creating eligibility criteria
														for these top client{" "}
													</li>
													<li>
														{" "}
														Created monetization opportunities for clients that
														did not meet criteria to increase spend
													</li>
													<li>
														{" "}
														Oversaw the entire project management life cycle of
														the job matching initiative.
													</li>
													<li>
														{" "}
														Initial goal of 9% coverage was met in phase 1
														allowing for additional expansion phases leading to
														a total of 22% job coverage by end of phase 2.{" "}
													</li>
													<li>
														{" "}
														Defined overall scope and managed execution as well
														as oversaw two additional expansion phases
													</li>
													<li>
														{" "}
														Developing instructions / guidelines for our
														external vendor team of 10 to execute. Rolling out
														training and audit schedule to the vendor team
													</li>
													<li>
														{" "}
														Collaborated peers to develop Standard Operating
														Procedures and decision guiding flowcharts for the
														vendor team and internal training purposes.
													</li>
													<li>
														{" "}
														Direct project management experience with
														large-scale operations team, resulting in a 20%
														reduction to the team's turnaround time
													</li>
													<li>
														{" "}
														Developed project timeline and milestone tracking to
														fit within Agile workflows
													</li>
													<li>
														{" "}
														Defined requirements and subsequently executed
														salesforce case research into prolonged turnaround
														time
													</li>
													<li>
														{" "}
														Collaborated with external product team and CRM team
														to create a specialized Salesforce Case Record and
														subtypes.{" "}
													</li>
													<li>
														{" "}
														Created the business case to submit to leadership by
														defining technical requirements. Working closely
														with stakeholders to meet business needs{" "}
													</li>
													<li>
														{" "}
														Expanded knowledge around structure and permissions
														within Salesforce environment{" "}
													</li>
													<li>
														{" "}
														Implemented an Office Hours Program, working to
														provide ad-hoc support and policy clarification for
														Client Support & Sales throughout 2022 and 2023.{" "}
													</li>
													<li> Led more than 60 sessions in that time. </li>
													<li>
														{" "}
														I leveraged internal connections to bolster
														documentation on common pain points{" "}
													</li>
													<li>
														{" "}
														Expanded program to accommodate EMEA teams and
														Global Product Commercialization teams.{" "}
													</li>
													<li>
														{" "}
														Campaigned for increased internal coverage of Office
														Hours to support the initiative{" "}
													</li>
												</ul>
											</AccordionBody>
										</AccordionItem>

										<AccordionItem eventKey="1">
											<AccordionHeader>
												{" "}
												Colosseum Athletics - Social Media Intern Nov 2019 –
												April 2020{" "}
											</AccordionHeader>
											<AccordionBody>
												<ul>
												<li>Increased conversion rates on email marketing
													newsletter by 0.5% by improving formatting, all CTAs and interesting email subjects in MailChimp</li>
													<li>Consistently managed multiple social media accounts A
													schedules (Facebook, Instagram) </li>
													<li>Created unique marketing materials
													that served to establish a brand voice</li>
													
													<li> Successfully
													promoted merchandise sales by utilizing professional
													relationships with brand ambassadors and Instagram
													influencers. </li>
													<li>Constructed in-house photo shoots to
													create engaging polished content for websites and
													social media. </li>
												</ul>
											</AccordionBody>
										</AccordionItem>

										<AccordionItem eventKey="2">
											<AccordionHeader>
												{" "}
												Conduent – Data Entry Specialist May 2019 – Nov 2019{" "}
											</AccordionHeader>
											<AccordionBody>
												<ul>
												<li>Reduced project workload by entering large amounts of
												data ahead of schedule, reducing pressure on team</li>
												members and focusing on high priority projects.

												<li>Maintained highly organized file systems allowing for
												easy access to important evidence and client notice.</li>

												</ul>
											</AccordionBody>
										</AccordionItem>
									</Accordion>
									
								</Row>
							
						</Row>

						<Row>
							<div
								className="education"
								style={{
									backgroundColor: " rgba(218, 235, 246, 0.75)",
									color: "#43566D",
									marginTop: "2em",
									border: "6px solid #828FB6",
									padding: "2rem"
									
								}}
							>
								<Col>
									{" "}
									<h2> Education</h2>{" "}
								</Col>

								<Accordion
									style={{
										width: "auto",
									}}
								>
									<AccordionItem eventKey="0">
										<AccordionHeader>
											{" "}
											California State University Long Beach 2013 - 2020
										</AccordionHeader>
										<AccordionBody> BFA Illustration</AccordionBody>
									</AccordionItem>
<AccordionItem eventKey="3">
	<AccordionHeader> UCLA Extension 2023 </AccordionHeader>
	<AccordionBody> User Expirence Certification Course</AccordionBody>
</AccordionItem>
									<AccordionItem eventKey="1">
										<AccordionHeader> Hongik University, South Korea 2017</AccordionHeader>
										<AccordionBody> Study Abroad program, Communication Design</AccordionBody>
									</AccordionItem>

									<AccordionItem eventKey="2">
										<AccordionHeader> Long Beach City College 2015- 2017</AccordionHeader>
										<AccordionBody> Recreational Art Classes</AccordionBody>
									</AccordionItem>
								</Accordion>
							</div>
						</Row>
					</Col>
				</Row>

				{/* <Col>
					<Row>
						<h3>Contact me</h3>
					</Row>
				</Col> */}
			</Container>
		</>
	);
};
export default AboutMe;
