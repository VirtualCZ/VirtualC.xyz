import { Card, Col, Row } from "react-bootstrap"

const ProjectDescription = ({ w }) => {
    return (
        <Col lg={7}>
            <Card body >
                <p>
                    {w.name}
                </p>
                <p>
                    {w.text}
                </p>
                <Row>
                    {w.icons.map((icon) => {
                        return (
                            <Col key={w.name + icon.text}>
                                <p>{icon.img}</p>
                                <p>{icon.text}</p>
                            </Col>
                        )
                    })}
                </Row>
            </Card>
        </Col>
    )
}

export default ProjectDescription