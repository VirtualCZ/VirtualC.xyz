import { Card, Col, Row } from "react-bootstrap"
import IconCard from "./IconCard"

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
                                <IconCard src={icon.image} text={icon.text}/>
                            </Col>
                        )
                    })}
                </Row>
            </Card>
        </Col>
    )
}

export default ProjectDescription