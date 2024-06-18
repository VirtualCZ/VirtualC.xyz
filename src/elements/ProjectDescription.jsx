import { Card, Col, Row } from "react-bootstrap"
import IconCard from "./IconCard"

const ProjectDescription = ({ w, className = "" }) => {
    return (
        <Col md={12} lg={7}>
            <Card className={className} >
                <Card.Body className="d-flex flex-column">
                    <h2>
                        {w.name}
                    </h2>
                    <p className="flex-grow-1">
                        {w.text}
                    </p>
                    <Row className='row-gap-3'>
                        {w.icons.map((icon) => {
                            return (
                                <Col lg={12} xl={4} key={w.name + icon.text}>
                                    <IconCard link={icon.link} src={icon.image}>{icon.text}</IconCard>
                                </Col>
                            )
                        })}
                    </Row>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default ProjectDescription