import { Card, Col, Row } from "react-bootstrap"

const ProjectDescription = ({ w }) => {
    return (
        <Col lg={7}>
            <Card body >
                <Card.Text>
                    <p>
                        {w.name}
                    </p>
                    <p>
                        {w.text}
                    </p>
                    <Row>
                        {w.icons.map((icon) => {
                            return (
                                <Col>
                                    <p>{icon.img}</p>
                                    <p>{icon.text}</p>
                                </Col>
                            )
                        })}
                    </Row>
                </Card.Text>
            </Card>
        </Col>
    )
}

const ProjectImage = ({ w }) => {
    return (
        <Col lg={5}>
            <Card body >
                <Card.Text>
                    <p>
                        {w.image}
                    </p>
                </Card.Text>
            </Card>
        </Col>
    )
}

export { ProjectDescription, ProjectImage }