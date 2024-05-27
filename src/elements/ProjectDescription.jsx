import { Card, Col, Row } from "react-bootstrap"
import IconCard from "./IconCard"

const ProjectDescription = ({ w, className = "UwU" }) => {
    return (
        <Col md={12} lg={7}>
            <Card className={className} body>
                <h2>
                    {w.name}
                </h2>
                <p>
                    {w.text}
                </p>
                <Row className='row-gap-3'>
                    {w.icons.map((icon) => {
                        return (
                            <Col lg={12} xl={4} key={w.name + icon.text}>
                                <IconCard src={icon.image}>{icon.text}</IconCard>
                            </Col>
                        )
                    })}
                </Row>
            </Card>
        </Col>
    )
}

export default ProjectDescription