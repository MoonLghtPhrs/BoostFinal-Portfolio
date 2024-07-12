import {Tab, Row, Col, Nav, Card, CardImg, Button, Table, Container} from "react-bootstrap"

const Bootcamp = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Boot Camp</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Weekly Scores</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">Program Feedback</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h4>Boot Camp Experience</h4>
                <p>
                  Attending a coding boot camp is an intensive and immersive experience. It often includes long hours, challenging projects, and constant learning. Participants gain practical skills in programming, software development, and problem-solving. The experience is designed to be transformative, equipping individuals with the necessary tools to start a career in tech.
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h4>Projects</h4>
                <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Project Title</Card.Title>
                    <Card.Text>
                      This is a brief summary of the project. It showcases the main objectives, technologies used, and the outcome.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com" target="_blank">View Code on Git</Button>
                    <Button variant="secondary" style={{ marginLeft: '10px' }}>Read Project Write-Up</Button>
                  </Card.Body>
                </Card>
                <Card style={{ width: '18rem', marginBottom: '1rem' }}>
                  <Card.Img variant="top" src="https://via.placeholder.com/150" />
                  <Card.Body>
                    <Card.Title>Another Project</Card.Title>
                    <Card.Text>
                      This is a brief summary of another project. It includes details on the approach, technologies, and results.
                    </Card.Text>
                    <Button variant="primary" href="https://github.com" target="_blank">View Code on Git</Button>
                    <Button variant="secondary" style={{ marginLeft: '10px' }}>Read Project Write-Up</Button>
                  </Card.Body>
                </Card>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <h4>Weekly Scores</h4>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Week</th>
                      <th>Score</th>
                      <th>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Week 1</td>
                      <td>85</td>
                      <td>Good understanding of basic concepts</td>
                    </tr>
                    <tr>
                      <td>Week 2</td>
                      <td>90</td>
                      <td>Excellent project work</td>
                    </tr>
                    <tr>
                      <td>Week 3</td>
                      <td>80</td>
                      <td>Needs improvement in debugging</td>
                    </tr>
                  </tbody>
                </Table>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <h4>Program Feedback</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi vel consectetur interdum, nisl nisi scelerisque nisi, eu ullamcorper nisl nunc eu nisi. Duis ac tortor quis tortor ornare bibendum. Curabitur ut ullamcorper libero. Vivamus ac vestibulum nunc, eu suscipit lorem. Mauris convallis sapien eget augue dignissim, sed malesuada tortor volutpat.
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    );
  };
  
export default Bootcamp;