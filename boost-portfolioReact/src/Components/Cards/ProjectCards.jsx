import { CardBody, CardFooter, CardHeader, Card, Button, CardText, CardImg } from "react-bootstrap"

const ProjectCard = ({}) => {
    return (
        <Card>
            <CardImg variant="top" src="#" alt="This is a placeholder"></CardImg>
            <CardHeader as="h4">Project Title</CardHeader>
            <CardBody>
            <CardText> Project Description</CardText>
            <Button variant="primary">View on GitHub</Button> <Button variant="disabled">Read Project Write up</Button>
            </CardBody>
            <CardFooter className="text-muted" > 4/10 on the suffering scale</CardFooter>

        </Card>
    )
}